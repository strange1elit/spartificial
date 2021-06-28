import React, { useState } from 'react'
import Toaster from '../loader/Toast'
import { useSelector, useDispatch } from 'react-redux'
import {setLoading,createComment} from '../../redux/actions/blog'
const Blog=({match})=>{
  const dispatch=useDispatch()
  //console.log(match.params.blog_id)
  var parameters=match.params.blog_id.split("+")
  var id=parameters[1]
  //console.log(data.image)
  const [commentData,setCommentData]=useState({comment:'',rating:'4'})

  const errmess=useSelector(state=>state.blogs.errmess)
  const blogs=useSelector(state=>state.blogs.blogs)
  const blog=blogs.filter((ablog)=>ablog._id===id)[0]
  //console.log(blog)

  const handleChange=(e)=>{
    setCommentData({...commentData,[e.target.name]:e.target.value})
  }
  const handleComment=(e)=>{
    e.preventDefault()
    console.log(commentData, blog._id)
    dispatch(setLoading());
    dispatch(createComment(commentData,blog._id))
  }
  return(blog?
    <div className="body" id="blog">
      {errmess?<Toaster message={errmess.message}/>:<></>}
      <div className="container">
      <div className="row">
          <div className="col-12">
            <h1>{blog.title}</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-10 text-center offset-1">
            <img loading="lazy" className="img-fluid" src={blog.image} alt={`${blog.category}. Failed to load.`}/>
          </div>
        </div>
        <div className="row">
          <div className="col-10 text-center offset-1">
            <p>{blog.description}</p>
          </div>
        </div>
        <div className="text-left">
          <h4>Comments:</h4>
        </div>
        <div className="text-right" style={{textAlign:'left'}}>
          <form onSubmit={handleComment} className="create-blog-form">
            <input required type="text" name="comment" placeholder="Your comment" value={commentData.comment} onChange={handleChange}/>
            <label>Rating:</label>
            <select required placeholder="rating" name="rating" value={commentData.rating} onChange={handleChange}>
              <option value="5">5</option>
              <option value="4">4</option>
              <option value="3">3</option>
              <option value="2">2</option>
              <option value="1">1</option>
            </select>
            <div style={{textAlign:'right',padding:'8px',marginBottom:'18px',borderBottom:'1px solid green'}}>
              <button type="submit" className="btn btn-sm btn-primary">Comment</button>
            </div>
          </form>
        </div>
        {blog.comments.length>0?blog.comments.map(comment=>{
          return(
            <div className="row" id="comments" key={comment._id}>
              <div className="col-12">
                <h6>{comment.author}</h6>
                <p>{comment.comment}</p>
                <p>Rating: {comment.rating}</p>
              </div>
            </div>
          )
        }):<></>}

        <div className="row" id="author">
          <div className="col-12">
          <div className="card mb-3" key={blog._id}>
								<div className="row g-0">
									<div className="col-md-4 text-center">
										<img loading="lazy" width="auto" className="img-fluid" src={blog.profilePic} alt="..."/>
									</div>
									<div className="col-md-8">
										<div className="card-body">
											<h5 className="card-title">{blog.author}</h5>
											<p className="card-text"><small className="text-muted">{blog.about}</small></p>
										</div>
									</div>
								</div>
							</div>
          </div>
        </div>
      </div>
    </div>:<div className="body" id="blog">
      <h3>Not Found</h3>
    </div>
  )
}
export default Blog