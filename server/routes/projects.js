const express= require('express')
const bodyParser=require('body-parser')
const mongoose=require('mongoose')

const Projects=require('../models/projects')
const authenticate=require('../authenticate')

const projectRouter=express.Router()

projectRouter.route('/').all((req,res,next)=>{
  res.statusCode=200;
  res.setHeader('Content-Type','text/plain')
  next()
})

.get((req,res,next)=>{
  Projects.find({}).then(projects=>{
    res.statusCode=200;
    res.setHeader('Content-Type','application/json')
    res.json(projects)
  },err=>next(err))
  .catch(err=>next(err))
})
.post(authenticate.verifyUser,(req,res,next)=>{
  //console.log(req.body)
  if(req.user.admin){
    Projects.create(req.body).then(project=>{
      res.statusCode=200;
      res.setHeader('Content-type','application/json');
      res.json(project)
    },err=>next(err))
    .catch(err=>next(err))
  }else{
    res.statusCode=401;
    res.setHeader('Content-type','application/json')
    res.json({message:"Only admin can add projects!"})
  }
})

projectRouter.route('/:project_id')
.put(authenticate.verifyUser,(req,res,next)=>{
  if(req.user.admin){
    Projects.findByIdAndUpdate(req.params.project_id,{$set:req.body},{new:true})
    .then((project)=>{
      res.statusCode=200;
      res.setHeader('Content-type','application/json')
      res.json(project)
      })
  }else{
    res.statusCode=401;
    res.setHeader('Content-type','application/json')
    res.json({message:"Only admin can update projects!"})
  }
})
.delete(authenticate.verifyUser,(req,res,next)=>{
  if(req.user.admin){
    Projects.findByIdAndRemove(req.params.project_id).then(res=>{
      res.statusCode=200;
      res.setHeader('Content-type','application/json')
      res.json({resp,message:"Deleted Successfully!"})
    })
  }else{
    res.statusCode=401;
    res.setHeader('Content-type','application/json')
    res.json({message:"Only admin can delete projects!"})
  }
})

projectRouter.route('/:project_id/instructors')
.post(authenticate.verifyUser,(req,res,next)=>{
  if(req.user.admin){
    Projects.findById(req.params.project_id).then(project=>{
      project.instructors.push(req.body)
      project.save().then(project=>{
        res.statusCode=200;
        res.setHeader('Content-Type','application/json')
        res.json(project)
      },err=>next(err))
      .catch(err=>next(err))
    },err=>next(err))
    .catch(err=>next(err))
  }else{
    res.statusCode=401;
    res.setHeader('Content-type','application/json')
    res.json({message:"Only admin can add instructors!"})
  }
})

projectRouter.route('/:project_id/comments/:instructor_id')
.put(authenticate.verifyUser,(req,res,next)=>{
  Blogs.findById(req.params.project_id).then(project=>{
    if(project.instructors.id(req.params.instructor_id)!=null){
        if(req.body.name) project.instructors.id(req.params.instructor_id).name=req.body.name
        if(req.body.image) project.instructors.id(req.params.instructor_id).rating=req.body.image

      project.save().then(project=>{
        Projects.findById(project._id)
        .then(project=>{
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json(project); 
        })
      },err=>next(err))
    }
  },err=>next(err))
  .catch(err=>next(err))
})
.delete(authenticate.verifyUser,(req,res,next)=>{
  Projects.findById(req.params.project_id).then(project=>{
    if(project.instructors.id(req.params.instructor_id)!=null){
        project.instructors.id(req.params.instructor_id).remove()
      project.save().then(project=>{
        Projects.findById(project._id).then(project=>{
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json(project); 
        })
      },err=>next(err))
      .catch(err=>next(err))
    }
  },err=>next(err))
  .catch(err=>next(err))
})
module.exports=projectRouter