const mongoose=require('mongoose')
const Schema=mongoose.Schema;

var instructorSchema=new Schema({
  name:{
    type:String,
    required:true
  },
  image:{
    type:String,
    required:true
  }
},{timestamps:true})

var projectSchema=new Schema({
  image:{
    type:String,
    required:true
  },
  title:{
    type:String,
    required:true
  },
  description:{
    type:String,
    required:true
  },
  message:{
    type:String,
    required:true
  },
  price:{
    type:String,
    required:true
  },
  instructors:[instructorSchema]
},{
  timestamps:true
})

module.exports=mongoose.model('Project',projectSchema)