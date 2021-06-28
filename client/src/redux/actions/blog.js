const url='http://localhost:3000/blogs';

export const setLoading=()=>async(dispatch)=>{
  dispatch({type:'LOADING'})
}

export const getBlogs=()=>async(dispatch)=>{
  return fetch(url).then(response=>{
    if(response.ok) return response
    else{
      var error=""
      response.json(err=>{
        error=new Error(err.messsage)
        dispatch({type:'BLOG_FAILED',payload:error})
      })
      .catch(err=>dispatch({type:'BLOG_FAILED',payload:error}))
    }
  })
  .then(response=>{
    return response.json()
  }).then(blogs=>{
    //console.log(blogs)
    dispatch({type:'GET_BLOGS',payload:blogs})
  },err=>console.log(err))
  .catch(error=>dispatch({type:'BLOG_FAILED',payload:error}))
}

export const createBlog=(blogData)=>async(dispatch)=>{
  var userdetails=localStorage.getItem('userdetails');
  userdetails=JSON.parse(userdetails);
  //console.log(userdetails)
  
  if(userdetails){
    const bearer=`Bearer ${userdetails.token}`

    return fetch(url,{
      method:"POST",
      body:JSON.stringify(blogData),
      headers:{
        'Authorization':bearer,
        'Content-Type':'application/json'
      },
      credentials:'same-origin'
    })
    .then(response=>{
      if(response.ok) return response
      else{
        var error=""
        response.json(err=>{
          error=new Error(err.messsage)
          dispatch({type:'BLOG_FAILED',payload:error})
        })
        .catch(err=>dispatch({type:'BLOG_FAILED',payload:error}))
      }
    })
    .then(response=>{
      return response.json()
    })
    .then(blog=>{
      console.log(blog)
      dispatch({type:'CREATE_BLOG',payload:blog})
      dispatch(getBlogs());
    })
  }else{
    var error=new Error('Login/Signup to proceed!');
    //error.response=response;
    dispatch({type:'BLOG_FAILED',payload:error})
  }
}

export const createComment=(commentData,blog_id)=>async(dispatch)=>{
  var userdetails=localStorage.getItem('userdetails');
  userdetails=JSON.parse(userdetails);
  //console.log(userdetails)
  
  if(userdetails){
    const bearer=`Bearer ${userdetails.token}`

    return fetch(`${url}/${blog_id}/comments`,{
      method:"POST",
      body:JSON.stringify(commentData),
      headers:{
        'Authorization':bearer,
        'Content-Type':'application/json'
      },
      credentials:'same-origin'
    })
    .then(response=>{
      console.log(response)
      if(response.ok) return response
      else{
        var error=""
        response.json(err=>{
          error=new Error(err.messsage)
          dispatch({type:'BLOG_FAILED',payload:error})
        })
        .catch(err=>dispatch({type:'BLOG_FAILED',payload:error}))
      }
    })
    .then(response=>{
      return response.json()
    })
    .then(blog=>{
      console.log(blog)
      dispatch({type:'CREATE_BLOG',payload:blog})
      dispatch(getBlogs());
    })
  }else{
    var error=new Error('Login/Signup to proceed!');
    //error.response=response;
    dispatch({type:'BLOG_FAILED',payload:error})
  }
}