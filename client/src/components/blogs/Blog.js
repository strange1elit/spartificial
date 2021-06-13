import React from 'react'
import {blogsdata} from './blogsdata'

const userdata={
  _id:"1",
  firstname:"Author",
  lastname:"Name",
  profilePic:"https://i.pinimg.com/originals/19/cf/78/19cf789a8e216dc898043489c16cec00.jpg",
  about:"This is about the author. Lorem Ipsum has been the industry's standard dummy text when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
}
const Blog=({match})=>{
  //console.log(match.params.blog_id)
  var parameters=match.params.blog_id.split("+")
  var category=parameters[0]
  var id=parameters[1]
  var data=blogsdata[category].filter((value)=>value._id===id)[0]
  //console.log(data.image)
  return(
    <div className="body" id="blog">
      <div className="container">
      <div className="row">
          <div className="col-12">
            <h1>{data.title}</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-10 text-center offset-1">
            <img loading="lazy" className="img-fluid" src={data.image} alt={`${category}. Failed to load.`}/>
          </div>
        </div>
        <div className="row">
          <div className="col-10 text-center offset-1">
            <p>{data.caption}</p>
          </div>
        </div>
        <div className="row" id="author">
          <div className="col-12">
          <div className="card mb-3" key={userdata._id}>
								<div className="row g-0">
									<div className="col-md-4 text-center">
										<img loading="lazy" width="auto" className="img-fluid" src={userdata.profilePic} alt="..."/>
									</div>
									<div className="col-md-8">
										<div className="card-body">
											<h5 className="card-title">{userdata.firstname} {userdata.lastname}</h5>
											<p className="card-text"><small className="text-muted">{userdata.about}</small></p>
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
export default Blog