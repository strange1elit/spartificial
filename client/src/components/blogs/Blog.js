import React from 'react'
import {blogsdata} from './blogsdata'

const Blog=({match})=>{
  //console.log(blogsdata[match.params.blog_id])
  return(
    <div className="body blog">
      <p>Blog Id: {match.params.blog_id}</p>
      <p>To be completed after having database schema.</p>
      <h1>{blogsdata[match.params.blog_id].title}</h1>
      <h4>By: {blogsdata[match.params.blog_id].author}</h4>
      <h4>{blogsdata[match.params.blog_id].caption}</h4>
      <h6>Reviews</h6>
      <h6>Comments</h6>
      <h6>Likes</h6>
    </div>
  )
}
export default Blog