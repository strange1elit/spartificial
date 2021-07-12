import React,{useState} from 'react'
import './Projects.css'
import {NavLink} from 'react-router-dom'
import Payments from '../payments/Payment'
import { useSelector } from 'react-redux'
const Projects=({projects})=>{
	//console.log(projects)
	const [pay,setPay]=useState({amount:0,title:'',show:false,project_id:'',description:'',image:''})

	const users=useSelector((state)=>state.users)

  var current=null
  if(users.current) current=users.current

	return (
		<div className="projects">
			<Payments show={pay.show} onHide={()=>setPay({amount:0,title:'',show:false})} title={pay.title} amount={pay.amount} project_id={pay.project_id} description={pay.description} image={pay.image}/>
			<div className="hero">
				<div className="title">
					<h4>Projects</h4>
					<h1>Join our projects<br/>to develop AI for the<br/>benefit of everyone.</h1>
				</div>
      </div>
			<div className="container projects-list p-1">
				<div className="row">
					{projects?projects.map((val,idx)=>{
						return(
							<div className="col-sm-12 col-md-6 col-xs-4 col-12 text-center" key={idx}>
								<div className="card m-3">
									<img src={val.image} alt="..." className="img-fluid"/>
									<div className="card-body">
										<h5 className="card-title">{val.title}</h5>
										<p className="card-text">{val.description}</p>
										<div className="buttons" style={{textAlign:'right'}}>

										{
											current?current.payments.length>0?current.payments.map((paid,id)=>{
												//console.log(paid)
												return paid.project_id===val._id?
													<button key={id} className="btn btn-outline-success btn-sm m-2"> 
														Enrolled
													</button>	:
													<button key={id} onClick={()=>{
														setPay({amount:val.price,title:val.title,show:true,project_id:val._id,description:val.description,image:val.image})
														}} className="btn btn-warning m-2"> 
														Enroll Now
													</button>				
												}):
												<button onClick={()=>{
													setPay({amount:val.price,title:val.title,show:true,project_id:val._id,description:val.description,image:val.image})
													}} className="btn btn-warning m-2"> 
													Enroll Now
												</button>				
										:<React.Fragment>
													<button onClick={()=>{
														setPay({amount:val.price,title:val.title,show:true,project_id:val._id,description:val.description,image:val.image})
														}} className="btn btn-warning m-2"> 
														Enroll Now
													</button>				
											</React.Fragment>
										}


											<NavLink to={`/projects/${val._id}`} className="btn btn-primary m-2">Read More...</NavLink>
										</div>
									</div>
								</div>
							</div>
						)
					}):""}
				</div>
			</div>

			{/* <div className="text-center">
				<button onClick={()=>{
					setPaymentData({...paymentData,amount:700})
					setShow(true)
					}} className="btn btn-warning text-dark"> 
					Buy Now for 700
				</button>
			</div> */}
		</div>
	)
}

export default Projects;