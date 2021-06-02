import React from 'react'

import './Blogs.css'

import {blogsdata} from './blogsdata'
const Blogs=()=>{
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
	return (
		<div className="body" id="blogpage">
			<div className="blogs-body">
				<div className="blog-tab">
					<button className="tablink" id="All-btn" onClick={()=>{triggerTab("All")}}>All</button>
					<button className="tablink" id="AI-btn" onClick={()=>{triggerTab("AI")}}>Artificial Intelligence</button>
					<button className="tablink" id="Robotics-btn" onClick={()=>{triggerTab("Robotics")}}>Robotics</button>
					<button className="tablink" id="Programming-btn" onClick={()=>{triggerTab("Programming")}}>Programming</button>
					<button className="tablink" id="Exploration-btn" onClick={()=>{triggerTab("Exploration")}}>Exploration Series</button>
					{/* <button onClick={()=>window.location.href="/blogs/new"} id="blog-btn" className="tablink" onClick={()=>{}}>New Blog</button> */}
				</div>

				<div id="All" className="tabcontent container">
				{
						blogsdata.AI.map((value)=>{
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
											<p className="card-text">{value.caption}</p>
											<p className="card-text"><small className="text-muted">{value.updatedAt}</small></p>
											<div className="d-grid gap-2 d-md-flex justify-content-md-end">
												<button onClick={()=>window.location.href=`/blogs/AI+${value._id}`} className="read-btn me-md-2" type="button">Read More...</button>
											</div>								
										</div>
									</div>
								</div>
							</div>
							)
						})
					}
					{
						blogsdata.Robotics.map((value)=>{
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
											<p className="card-text">{value.caption}</p>
											<p className="card-text"><small className="text-muted">{value.updatedAt}</small></p>
											<div className="d-grid gap-2 d-md-flex justify-content-md-end">
												<button onClick={()=>window.location.href=`/blogs/Robotics+${value._id}`} className="read-btn me-md-2" type="button">Read More...</button>
											</div>								
										</div>
									</div>
								</div>
							</div>
							)
						})
					}
					{
						blogsdata.Programming.map((value)=>{
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
											<p className="card-text">{value.caption}</p>
											<p className="card-text"><small className="text-muted">{value.updatedAt}</small></p>
											<div className="d-grid gap-2 d-md-flex justify-content-md-end">
												<button onClick={()=>window.location.href=`/blogs/Programming+${value._id}`} className="read-btn me-md-2" type="button">Read More...</button>
											</div>								
										</div>
									</div>
								</div>
							</div>
							)
						})
					}
					{
						blogsdata.Exploration.map((value)=>{
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
											<p className="card-text">{value.caption}</p>
											<p className="card-text"><small className="text-muted">{value.updatedAt}</small></p>
											<div className="d-grid gap-2 d-md-flex justify-content-md-end">
												<button onClick={()=>window.location.href=`/blogs/Exploration+${value._id}`} className="read-btn me-md-2" type="button">Read More...</button>
											</div>								
										</div>
									</div>
								</div>
							</div>
							)
						})
					}
				</div>
				<div id="AI" className="tabcontent container">
					{
						blogsdata.AI.map((value)=>{
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
											<p className="card-text">{value.caption}</p>
											<p className="card-text"><small className="text-muted">{value.updatedAt}</small></p>
											<div className="d-grid gap-2 d-md-flex justify-content-md-end">
												<button onClick={()=>window.location.href=`/blogs/AI+${value._id}`} className="read-btn me-md-2" type="button">Read More...</button>
											</div>								
										</div>
									</div>
								</div>
							</div>
							)
						})
					}
				</div>
				<div id="Robotics" className="tabcontent container">
				{
						blogsdata.Robotics.map((value)=>{
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
											<p className="card-text">{value.caption}</p>
											<p className="card-text"><small className="text-muted">{value.updatedAt}</small></p>
											<div className="d-grid gap-2 d-md-flex justify-content-md-end">
												<button onClick={()=>window.location.href=`/blogs/Robotics+${value._id}`} className="read-btn me-md-2" type="button">Read More...</button>
											</div>								
										</div>
									</div>
								</div>
							</div>
							)
						})
					}
				</div>
				<div id="Programming" className="tabcontent container">
				{
						blogsdata.Programming.map((value)=>{
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
											<p className="card-text">{value.caption}</p>
											<p className="card-text"><small className="text-muted">{value.updatedAt}</small></p>
											<div className="d-grid gap-2 d-md-flex justify-content-md-end">
												<button onClick={()=>window.location.href=`/blogs/Programming+${value._id}`} className="read-btn me-md-2" type="button">Read More...</button>
											</div>								
										</div>
									</div>
								</div>
							</div>
							)
						})
					}
				</div>
				<div id="Exploration" className="tabcontent container">
				{
						blogsdata.Exploration.map((value)=>{
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
											<p className="card-text">{value.caption}</p>
											<p className="card-text"><small className="text-muted">{value.updatedAt}</small></p>
											<div className="d-grid gap-2 d-md-flex justify-content-md-end">
												<button onClick={()=>window.location.href=`/blogs/Exploration+${value._id}`} className="read-btn me-md-2" type="button">Read More...</button>
											</div>								
										</div>
									</div>
								</div>
							</div>
							)
						})
					}
				</div>
			</div>
		</div>
	)
}

export default Blogs;