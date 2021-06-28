import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import './Blogs.css'

import CreateBlog from './CreateBlog'
import Toaster from '../loader/Toast'
const Blogs=({blogs})=>{
	const errmess=useSelector(state=>state.blogs.errmess)

	const AI=blogs.filter(blog=>blog.category==="AI");
	const Robotics=blogs.filter(blog=>blog.category==="Robotics");
	const Programming=blogs.filter(blog=>blog.category==="Programming");
	const Exploration=blogs.filter(blog=>blog.category==="Exploration");

	//console.log(blogs)
	//console.log(typeof(blogsdata),blogsdata)
	const triggerTab=(tabName)=>{
		var i,tabcontent,tablinks;
		tabcontent=document.getElementsByClassName("tabcontent")
		for(i=0;i<tabcontent.length;i++){
			tabcontent[i].style.display="none"
		}
		tablinks=document.getElementsByClassName("tablink")
		for(i=0;i<tablinks.length;i++){
			tablinks[i].style.color="#0a0e2a"
			tablinks[i].style.fontWeight="normal"
		}
		document.getElementById(tabName).style.display="block"
		document.getElementById(tabName+"-btn").style.color="black"
		document.getElementById(tabName+"-btn").style.fontWeight="600"
	}
	const [show,setShow]=useState(false)
	const onHide=()=>{
		setShow(false)
	}
	return (
		<div className="body" id="blogpage">
			{errmess?<Toaster message={errmess.message}/>:<></>}
			<CreateBlog show={show} onHide={onHide}/>
			<div className="blogs-body">
				<div className="blog-tab">
					<button className="tablink" id="All-btn" onClick={()=>{triggerTab("All")}}>All</button>
					<button className="tablink" id="AI-btn" onClick={()=>{triggerTab("AI")}}>Artificial Intelligence</button>
					<button className="tablink" id="Robotics-btn" onClick={()=>{triggerTab("Robotics")}}>Robotics</button>
					<button className="tablink" id="Programming-btn" onClick={()=>{triggerTab("Programming")}}>Programming</button>
					<button className="tablink" id="Exploration-btn" onClick={()=>{triggerTab("Exploration")}}>Exploration Series</button>
					<button id="blog-btn" className="tablink" onClick={()=>setShow(true)}>New Blog</button>
				</div>

				<div id="All" className="tabcontent container">
				{blogs.length>0?
						blogs.map((value)=>{
							//console.log(idx,value)
							return(
								<div className="card mb-3" key={value._id}>
								<div className="row g-0">
									<div className="col-md-4">
										<img loading="lazy" width="auto" className="img-fluid" src={value.image} alt="..."/>
									</div>
									<div className="col-md-8">
										<div className="card-body">
											<h5 className="card-title">{value.title}&nbsp;<span style={{color:'white',backgroundColor:'green'}} className="badge">{value.category}</span></h5>
											<p className="card-text">{value.description}</p>
											<p className="card-text"><small className="text-muted">{value.createdAt}</small></p>
											<div className="d-grid gap-2 d-md-flex justify-content-md-end">
												<NavLink to={`/blogs/${value.category}+${value._id}`} className="read-btn me-md-2" type="button">Read More...</NavLink>
											</div>								
										</div>
									</div>
								</div>
							</div>
							)
						}):<h3>No blogs Found</h3>
					}
				</div>
				<div id="AI" className="tabcontent container">
					{AI.length>0?
						AI.map((value)=>{
							//console.log(idx,value)
							return(
								<div className="card mb-3" key={value._id}>
								<div className="row g-0">
									<div className="col-md-4">
										<img loading="lazy" width="auto" className="img-fluid" src={value.image} alt="..."/>
									</div>
									<div className="col-md-8">
										<div className="card-body">
											<h5 className="card-title">{value.title}</h5>
											<p className="card-text">{value.description}</p>
											<p className="card-text"><small className="text-muted">{value.createdAt}</small></p>
											<div className="d-grid gap-2 d-md-flex justify-content-md-end">
												<NavLink to={`/blogs/${value.category}+${value._id}`} className="read-btn me-md-2" type="button">Read More...</NavLink>
											</div>								
										</div>
									</div>
								</div>
							</div>
							)
						}):<h3>No AI blogs found!</h3>
					}
				</div>
				<div id="Robotics" className="tabcontent container">
				{Robotics.length>0?
						Robotics.map((value)=>{
							//console.log(idx,value)
							return(
								<div className="card mb-3" key={value._id}>
								<div className="row g-0">
									<div className="col-md-4">
										<img loading="lazy" width="auto" className="img-fluid" src={value.image} alt="..."/>
									</div>
									<div className="col-md-8">
										<div className="card-body">
											<h5 className="card-title">{value.title}</h5>
											<p className="card-text">{value.description}</p>
											<p className="card-text"><small className="text-muted">{value.createdAt}</small></p>
											<div className="d-grid gap-2 d-md-flex justify-content-md-end">
												<NavLink to={`/blogs/${value.category}+${value._id}`} className="read-btn me-md-2" type="button">Read More...</NavLink>
											</div>								
										</div>
									</div>
								</div>
							</div>
							)
						}):<h3>No Robotics blogs found!</h3>
					}
				</div>
				<div id="Programming" className="tabcontent container">
				{Programming.length>0?
						Programming.map((value)=>{
							//console.log(idx,value)
							return(
								<div className="card mb-3" key={value._id}>
								<div className="row g-0">
									<div className="col-md-4">
										<img loading="lazy" width="auto" className="img-fluid" src={value.image} alt="..."/>
									</div>
									<div className="col-md-8">
										<div className="card-body">
											<h5 className="card-title">{value.title}</h5>
											<p className="card-text">{value.description}</p>
											<p className="card-text"><small className="text-muted">{value.createdAt}</small></p>
											<div className="d-grid gap-2 d-md-flex justify-content-md-end">
												<NavLink to={`/blogs/${value.category}+${value._id}`} className="read-btn me-md-2" type="button">Read More...</NavLink>
											</div>								
										</div>
									</div>
								</div>
							</div>
							)
						}):<h3>No Programming Blogs found!</h3>
					}
				</div>
				<div id="Exploration" className="tabcontent container">
				{Exploration.length>0?
						Exploration.map((value)=>{
							//console.log(idx,value)
							return(
								<div className="card mb-3" key={value._id}>
								<div className="row g-0">
									<div className="col-md-4">
										<img loading="lazy" width="auto" className="img-fluid" src={value.image} alt="..."/>
									</div>
									<div className="col-md-8">
										<div className="card-body">
											<h5 className="card-title">{value.title}</h5>
											<p className="card-text">{value.description}</p>
											<p className="card-text"><small className="text-muted">{value.createdAt}</small></p>
											<div className="d-grid gap-2 d-md-flex justify-content-md-end">
												<NavLink to={`/blogs/${value.category}+${value._id}`} className="read-btn me-md-2" type="button">Read More...</NavLink>
											</div>								
										</div>
									</div>
								</div>
							</div>
							)
						}):<h3>No Exploration blog found</h3>
					}
				</div>
			</div>
		</div>
	)
}

export default Blogs;