import React from 'react'

import './Blogs.css'

import {blogsdata} from './blogsdata'
const Blogs=()=>{
	return (
		<div className="body">
			<div className="blogs-header">
				<h1>Blogs</h1>
			</div>
			<div className="blogs-body">
				<div className="post-blog-btn">
					<button>New Blog</button>
				</div>
				<div className="blogs-content">
					<div className="container">
						<div className="row">
						{
							blogsdata.map((value,i)=>{
								//console.log(value)
								return(
									<div className="col-sm-4" key={i}>
										<div className="card">
											<div className="card-header">
												<h3>{value.title}</h3>
											</div>
											<div className="card-body">
												<img src={value.thumbnail} alt="..."/>
												<h6>By: {value.author} <span className="badge">a few minutes ago</span></h6>
												<p>{value.caption}</p>
												<span onClick={()=>{window.location.href=`/blogs/${i}`}}>More...</span>
											</div>
										</div>
									</div>
								)
							})
						}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Blogs;