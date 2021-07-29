const express= require('express')
const bodyParser=require('body-parser')
const mongoose=require('mongoose')

const Instructors=require('../models/instructor')

const instructorRouter=express.Router()

instructorRouter.route('/join-request').all((req,res,next)=>{
  res.statusCode=200;
  res.setHeader('Content-Type','text/plain')
  next()
})

.get((req,res,next)=>{
  Instructors.findById('610311b2527dacaa9a8fa84e').then(instructors=>{
    res.statusCode=200;
    res.setHeader('Content-Type','application/json')
    res.json(instructors.joinUs)
  },err=>next(err))
  .catch(err=>next(err))
})
.post((req,res,next)=>{
  //console.log(req.body)
  Instructors.findById('610311b2527dacaa9a8fa84e').then((instructor)=>{
    //console.log(instructor)
    instructor.joinUs.push(req.body)
    instructor.save().then(instructor=>{
      res.statusCode=200;
      res.setHeader('Content-type','application/json');
      res.json(instructor.joinUs)
    },err=>next(err))
    .catch(err=>next(err))
  },err=>next(err))
  .catch(err=>next(err))
});

instructorRouter.route('/submit-project').all((req,res,next)=>{
  res.statusCode=200;
  res.setHeader('Content-Type','text/plain')
  next()
})

.get((req,res,next)=>{
  Instructors.findById('610311b2527dacaa9a8fa84e').then(instructors=>{
    res.statusCode=200;
    res.setHeader('Content-Type','application/json')
    res.json(instructors.submission)
  },err=>next(err))
  .catch(err=>next(err))
})
.post((req,res,next)=>{
  //console.log(req.body)
  Instructors.findById('610311b2527dacaa9a8fa84e').then((instructor)=>{
    //console.log(instructor)
    instructor.submission.push(req.body)
    instructor.save().then(instructor=>{
      res.statusCode=200;
      res.setHeader('Content-type','application/json');
      res.json(instructor.submission)
    },err=>next(err))
    .catch(err=>next(err))
  },err=>next(err))
  .catch(err=>next(err))
})
module.exports=instructorRouter