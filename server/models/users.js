const mongoose = require('mongoose')
const passportLocalMongoose=require('passport-local-mongoose')
const Schema=mongoose.Schema;

var  userSchema = new  Schema({
    googleId:{
        type:String,
        default:''
    },
    firstname:{
        type:String,
        default:''
    },
    lastname:{
        type:String,
        default:''
    },
    admin:{
        type:Boolean,
        default:false
    },
    mentor:{
      type:Boolean,
      default:false
    },
    email:{
        type:String,
        default:''
    },
    phone:{
        type:String,
        default:''
    },
    gender:{
        type:String,
        default:''
    },
    dob:{
        type:String,
        default:''
    },
    about:{
        type:String,
        default:''
    },
    education:{
        type:String,
        default:''
    },
    address:{
        type:String,
        default:''
    },
    img:{
        type:String,
        default:''
    }

});
userSchema.plugin(passportLocalMongoose);
module.exports=mongoose.model('User',userSchema)