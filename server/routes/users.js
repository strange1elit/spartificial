var express = require('express');
var router = express.Router();
var passport=require('passport')
const bodyParser=require('body-parser')

const SendOtp=require('sendotp')
const sendOtp=new SendOtp('msg91_apikey')

const Users=require('../models/users')
const authenticate=require('../authenticate')
/* GET users listing. */

router.use(bodyParser.json())

//***********username password signup**************

router.get('/',authenticate.verifyUser,(req,res,next)=>{
  //console.log(req.user)
  Users.find({}).then((users)=>{
    res.json({users})
  }).catch((err)=>console.log(err))
})

router.post('/signup',(req,res,next)=>{
  Users.register(new Users({username:req.body.username,firstname:req.body.firstname,lastname:req.body.lastname,email:req.body.email}),req.body.password,(err,user)=>{
    if(err){
      res.statusCode=500
      res.setHeader('Content-Type','application/json')
      res.json(err)
    }else{
      passport.authenticate('local')(req,res,()=>{
        var token= authenticate.getToken({_id:req.user._id})
        //console.log(req.user)

        res.statusCode=200;
        res.setHeader('Content-Type','application/json')
        res.json({success:true,token:token,user:req.user,status:'Registration Successful'})
      })
    }
  })
})

// router.post('/login',passport.authenticate('local',{failureMessage:'Invalid Password'}),(req,res,next)=>{
//   var token= authenticate.getToken({_id:req.user._id})
//   res.statusCode=200;
//   res.setHeader('Content-Type','application/json')
//   res.json({success:true,token:token,user:req.user,status:'Logged in Successfully'})
// })

router.post('/login',passport.authenticate('local',{failureMessage:'Invalid Password',failWithError:true}),(req,res,next)=>{
  var token= authenticate.getToken({_id:req.user._id})
  res.statusCode=200;
  res.setHeader('Content-Type','application/json')
  res.json({success:true,token:token,user:req.user,status:'Logged in Successfully'})
},(err,req,res,next)=>{
  if(err.name==="AuthenticationError"){
    res.statusCode=401
    err.message="Inavlid Username or Password!"
    res.setHeader('Content-Type','application/json')
    //console.log(err)
    res.json(err)
  }else{
    res.statusCode=500
    err.message="Something went wrong!"
    res.setHeader('Content-Type','application/json')
    //console.log(err)
    res.json(err)
  }
})

router.get('/logout',(req,res,next)=>{
  if(req.session){
    req.session.destroy();
    res.clearCookie('session-id')
    res.redirect('/')
  }else{
    var err=new Error('Not Logged in!');
    err.status=403
    next(err)
  }
})

router.post('/changepassword',authenticate.verifyUser,(req, res)=> {

  Users.findOne({ _id: req.user._id },(err, user) => {
    //console.log(req.body)
    // Check if error connecting
    if (err) {
      res.statusCode=404
      res.setHeader('Content-Type','application/json')
      res.json({ success: false, message: err }); // Return error
    } else {
      // Check if user was found in database
      if (!user) {
        res.statusCode=403
        res.setHeader('Content-Type','application/json')  
        res.json({ success: false, message: 'User not found' }); // Return error, user was not found in db
      } else {
        user.changePassword(req.body.currentpassword, req.body.newpassword, function(err) {
           if(err) {
                    if(err.name === 'IncorrectPasswordError'){
                        res.statusCode=403
                        res.setHeader('Content-Type','application/json')                
                        res.json({ success: false, message: 'Incorrect password' }); // Return error
                    }else {
                        res.statusCode=500
                        res.setHeader('Content-Type','application/json')
                        res.json({ success: false, message: 'Something went wrong!! Please try again after sometimes.' });
                    }
          } else {
            res.statusCode=200
            res.setHeader('Content-Type','application/json')      
            res.json({ success: true, message: 'Your password has been changed successfully' });
           }
         })
      }
    }
  });   
});

router.post('/forgetpassword',(req,res,next)=>{
  if(req.body.phone){
    Users.findOne({phone:req.body.phone}).then((user)=>{
      if(!user){
        res.json({success:false,message:"User not found"})
      }else{
        sendOtp.send(req.body.phone,'senderID',(err,data)=>{
          if(err) return res.json({success:false,err})
          data.type==="success"?res.json({success:true,messsage:"OTP sent successfully!"})
          :res.json({success:false,message:"Something went wrong."})
        })
      }
    })
  }
})
router.post('/setpassword',(req,res,next)=>{
  sendOtp.verify(req.body.phone,req.body.otp,(err,data)=>{
    if(err) return res.json({success:false,message:"Password setting unsuccessful!",err})
    Users.findOne({phone:req.body.phone}).then((user)=>{
      if(!user) return res.json({success:false,message:"User not found"})
      user.setPassword(req.body.newpassword,(err)=>{
        //console.log("changing")
        if(err) res.json({success:false,message:"Something Went wrong",err})
        user.save()
        res.json({success:true,message:"Password changed successfully!"})
      })
    })
  })
})

router.put('/:_id',authenticate.verifyUser,(req,res,next)=>{
  // console.log(req.user)
  // console.log(req.body)
  Users.findByIdAndUpdate(req.params._id,{$set:req.body},{new:true}).then((user)=>{
    var token= authenticate.getToken({_id:req.user._id})
    res.statusCode=200;
    res.setHeader('Content-Type','application/json')
    res.json({success:true,token:token,user:user,status:'Logged in Successfully'})
    },(err)=>next(err))
  .catch((err)=>next(err))
})
//***************otp login****************//

router.post('/phone/sendotp',(req,res)=>{
  sendOtp.send(req.body.phone,'senderID',(err,data)=>{
    if(err) return res.json({err})
    res.statusCode=200;
    res.setHeader('Content-Type','application/json')  
    data.type==="success"?res.json({success:true}):res.json({success:false})
  })
})

router.post('/phone/validateotp',(req,res)=>{
  sendOtp.verify(req.body.phone,req.body.otp,(err,data)=>{
    if(err) return res.json({err})
    let{phone}=req.body
    Users.findOne({phone},(err,user)=>{
      if(err) return res.json({err})
      if(!user){
        Users.create({phone:req.body.phone,username:req.body.phone},(err,user)=>{
          if(err) return res.json({err})
          let token=authenticate.getToken({_id:user._id})
          res.statusCode=200;
          res.setHeader('Content-Type','application/json')   
          console.log()     
          res.json({success:true,token:token,admin:user.admin,status:'Logged in Successfully'})
        })
      }else{
        let token=authenticate.getToken({_id:user._uid})
        res.statusCode=200;
        res.setHeader('Content-Type','application/json')       
        res.json({success:true,token:token,admin:user.admin,status:'Logged in Successfully'})
      }
    })
  })
})

//*********************google oauth login******************/

router.get('/google',passport.authenticate('google',{scope:['profile','email']}))

router.get('/google/callback',passport.authenticate('google'),(req,res)=>{
  //console.log(req.user)
  var token=authenticate.getToken({_id:req.user._id})
  res.json({success:true,token:token,status:"Logged in successffully!"})
})
module.exports = router;