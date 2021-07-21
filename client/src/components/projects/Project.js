import React, { useState } from 'react'
import Payments from '../payments/Payment'
import {useSelector } from 'react-redux'
const Project =({match}) =>{
  const [show,setShow]=useState(false)
  const projects=useSelector(state=>state.projects.projects)
  const users=useSelector((state)=>state.users)

  var purchased=null
  if(users.current) purchased=users.current.payments.filter((project)=>project.project_id===match.params.project_id)[0]
  //console.log(purchased)
  // console.log(users.current)
  // console.log(match.params.project_id)

  const project=projects.filter(project=>project._id===match.params.project_id)[0]

  //console.log(project)
  return(project?
    <div className="project-desc">
      <Payments show={show} fees={project.fees} onHide={()=>setShow(false)} title={project.title} project_id={project._id} description={project.description} image={project.image}/>
      <div className="container">
        <div className="row pb-5">
          <div className="col-sm-6 col-12 text-center align-self-center">
            <h2 className="m-3" style={{fontWeight:'600'}}><i>{project.title}</i></h2>
            {
              purchased?
              <button className="btn btn-outline-success btn-sm"><strong>Enrolled</strong></button>

              :
              <>            
                <button className="btn btn-primary btn-sm" onClick={()=>setShow(true)}><strong>Enroll Now</strong></button><br/>
                {/* <small><strong>@</strong> <br/>Rs.{project.price} and <br/>get discounts upto Rs. 300</small> */}
              </>
            }
          </div>
          <div className="col-sm-6 align-self-center p-3 top">
            <div style={{textAlign:'right'}}>
              <img src={project.image} alt="..." className="img-fluid"/>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            {/* <h4 style={{borderBottom:'1px solid #c4c4c4'}}>Project Description</h4> */}
            <p className="p-3 mb-3">{project.description}</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h4 style={{borderBottom:'1px solid #c4c4c4'}}>Objectives</h4>
            <ol style={{paddingLeft:'25px'}}>
              {project.objectives.map((val,idx)=>{
                return <li key={idx}>{val}</li>
              })}
            </ol>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h4 style={{borderBottom:'1px solid #c4c4c4'}}>Prerequisites</h4>
            <ol style={{paddingLeft:'25px'}}>
              {project.prerequisites.map((val,idx)=>{
                return <li key={idx}>{val}</li>
              })}
            </ol>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h4 style={{borderBottom:'1px solid #c4c4c4'}}>Deliverables</h4>
            <ol style={{paddingLeft:'25px'}}>
              {project.deliverables.map((val,idx)=>{
                return <li key={idx}>{val}</li>
              })}
            </ol>
          </div>
        </div>
        <div className="row justify-content-center">
          <h4 style={{borderBottom:'1px solid #c4c4c4'}}>Our Instructors</h4>
          {project.instructors.map((val,idx)=>{
            return(
              <div className="col-6 col-sm-4 col-md-3 text-center" key={idx}>
                <div className="card mb-4">
                  <img src={val.photo} alt="..." className="img-fluid"/>
                  <div className="card-img-overlay" style={{backgroundColor:'transparent'}}>
                    <h6 style={{position:'absolute',bottom:'0',left:'5px',right:'5px',backgroundColor:'#0a0e2abe',color:'white',borderRadius:'20px',padding:'3px 4px', fontSize:'14px'}}>{val.name}</h6>
                  </div>
                </div>
              </div>  
            )
          })}
        </div>
      </div>
    </div>:""
  )
}

export default Project;