import React from 'react'

import './Blogs.css'

import {blogsdata} from './blogsdata'
const Blogs=()=>{
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
					<button id="blog-btn" className="tablink" onClick={()=>{}}>New Blog</button>
				</div>

				<div id="All" className="tabcontent container">
				<div className="card mb-3">
						<div className="row g-0">
							<div className="col-md-4">
								<img width="auto" className="img-fluid" src="https://i.guim.co.uk/img/media/e746109cf7315dbb58c23d0b903e4d9c579bfb25/0_0_4096_2459/master/4096.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=3a2a090066c5bfc15c0571dc7261968f" alt="..."/>
							</div>
							<div className="col-md-8">
								<div className="card-body">
									<h5 className="card-title">Title</h5>
									<p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting</p>
									<p className="card-text"><small className="text-muted">Last Updated 5 mins ago</small></p>
									<div className="d-grid gap-2 d-md-flex justify-content-md-end">
										<button className="read-btn me-md-2" type="button">Read More...</button>
									</div>								
								</div>
							</div>
						</div>
					</div>
					<div className="card mb-3">
						<div className="row g-0">
							<div className="col-md-4">
								<img width="auto" className="img-fluid" src="https://blogs.3ds.com/northamerica/wp-content/uploads/sites/4/2019/08/Robots-Square.jpg" alt="..."/>
							</div>
							<div className="col-md-8">
								<div className="card-body">
									<h5 className="card-title">Title</h5>
									<p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting</p>
									<p className="card-text"><small className="text-muted">Last Updated 5 mins ago</small></p>
									<div className="d-grid gap-2 d-md-flex justify-content-md-end">
										<button className="read-btn me-md-2" type="button">Read More...</button>
									</div>								</div>
							</div>
						</div>
					</div>
					<div className="card mb-3">
						<div className="row g-0">
							<div className="col-md-4">
								<img width="auto" className="img-fluid" src="https://thedisciplinedinvestor.com/blog/wp-content/uploads/2017/05/tdi_robo_banner-865x470.jpg" alt="..."/>
							</div>
							<div className="col-md-8">
								<div className="card-body">
									<h5 className="card-title">Title</h5>
									<p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting</p>
									<p className="card-text"><small className="text-muted">Last Updated 5 mins ago</small></p>
									<div className="d-grid gap-2 d-md-flex justify-content-md-end">
										<button className="read-btn me-md-2" type="button">Read More...</button>
									</div>								</div>
							</div>
						</div>
					</div>
				</div>
				<div id="AI" className="tabcontent container">
					<div className="card mb-3">
						<div className="row g-0">
							<div className="col-md-4">
								<img width="auto" className="img-fluid" src="https://cdn.corporatefinanceinstitute.com/assets/artificial-intelligence-1024x512.jpeg" alt="..."/>
							</div>
							<div className="col-md-8">
								<div className="card-body">
									<h5 className="card-title">Title</h5>
									<p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting</p>
									<p className="card-text"><small className="text-muted">Last Updated 5 mins ago</small></p>
									<div className="d-grid gap-2 d-md-flex justify-content-md-end">
										<button className="read-btn me-md-2" type="button">Read More...</button>
									</div>								
								</div>
							</div>
						</div>
					</div>
					<div className="card mb-3">
						<div className="row g-0">
							<div className="col-md-4">
								<img width="auto" className="img-fluid" src="https://estio.training/wp-content/uploads/2020/02/ai.png" alt="..."/>
							</div>
							<div className="col-md-8">
								<div className="card-body">
									<h5 className="card-title">Title</h5>
									<p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting</p>
									<p className="card-text"><small className="text-muted">Last Updated 5 mins ago</small></p>
									<div className="d-grid gap-2 d-md-flex justify-content-md-end">
										<button className="read-btn me-md-2" type="button">Read More...</button>
									</div>								
								</div>
							</div>
						</div>
					</div>
				</div>
				<div id="Robotics" className="tabcontent container">
				<div className="card mb-3">
						<div className="row g-0">
							<div className="col-md-4">
								<img width="auto" className="img-fluid" src="https://lh3.googleusercontent.com/proxy/PxNJ9necAKVWEGlxaYTinGV8c1mWQusMdI1nH3SUuzUA5_giIDjk7-A36elhXnJvHJp4CRLtNcuOs_ZSr5CDKyDZzlr_w4P36M45dIDZQB9ysihV11fnuHhf0Id9dGFQFryJZLs" alt="..."/>
							</div>
							<div className="col-md-8">
								<div className="card-body">
									<h5 className="card-title">Title</h5>
									<p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting</p>
									<p className="card-text"><small className="text-muted">Last Updated 5 mins ago</small></p>
									<div className="d-grid gap-2 d-md-flex justify-content-md-end">
										<button className="read-btn me-md-2" type="button">Read More...</button>
									</div>								
								</div>
							</div>
						</div>
					</div>
					<div className="card mb-3">
						<div className="row g-0">
							<div className="col-md-4">
								<img width="auto" className="img-fluid" src="https://d1qq9lwf5ow8iz.cloudfront.net/live-images-1/ImageDetail_85d5141d-e331-445b-8eb7-b49ba533e2bf_Large" alt="..."/>
							</div>
							<div className="col-md-8">
								<div className="card-body">
									<h5 className="card-title">Title</h5>
									<p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting</p>
									<p className="card-text"><small className="text-muted">Last Updated 5 mins ago</small></p>
									<div className="d-grid gap-2 d-md-flex justify-content-md-end">
										<button className="read-btn me-md-2" type="button">Read More...</button>
									</div>								
								</div>
							</div>
						</div>
					</div>
				</div>
				<div id="Programming" className="tabcontent container">
					<div className="card mb-3">
						<div className="row g-0">
							<div className="col-md-4">
								<img width="auto" className="img-fluid" src="https://spectrum.ieee.org/image/MzI0NDQ4Ng.jpeg" alt="..."/>
							</div>
							<div className="col-md-8">
								<div className="card-body">
									<h5 className="card-title">Title</h5>
									<p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting</p>
									<p className="card-text"><small className="text-muted">Last Updated 5 mins ago</small></p>
									<div className="d-grid gap-2 d-md-flex justify-content-md-end">
										<button className="read-btn me-md-2" type="button">Read More...</button>
									</div>								
								</div>
							</div>
						</div>
					</div>
				</div>
				<div id="Exploration" className="tabcontent container">
					<div className="card mb-3">
						<div className="row g-0">
							<div className="col-md-4">
								<img width="auto" className="img-fluid" src="https://betanews.com/wp-content/uploads/2016/10/boy-explorer.jpg" alt="..."/>
							</div>
							<div className="col-md-8">
								<div className="card-body">
									<h5 className="card-title">Title</h5>
									<p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting</p>
									<p className="card-text"><small className="text-muted">Last Updated 5 mins ago</small></p>
									<div className="d-grid gap-2 d-md-flex justify-content-md-end">
										<button className="read-btn me-md-2" type="button">Read More...</button>
									</div>								
								</div>
							</div>
						</div>
					</div>
					<div className="card mb-3">
						<div className="row g-0">
							<div className="col-md-4">
								<img width="auto" className="img-fluid" src="https://swat.io/wp-content/uploads/2019/10/instagram-explore-1.jpg" alt="..."/>
							</div>
							<div className="col-md-8">
								<div className="card-body">
									<h5 className="card-title">Title</h5>
									<p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting</p>
									<p className="card-text"><small className="text-muted">Last Updated 5 mins ago</small></p>
									<div className="d-grid gap-2 d-md-flex justify-content-md-end">
										<button className="read-btn me-md-2" type="button">Read More...</button>
									</div>								
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Blogs;