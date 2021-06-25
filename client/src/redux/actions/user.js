const url =process.env.NODE_ENV==='production'?('server_url'):('http://localhost:3000/users');
export const setLoading=()=>async(dispatch)=>{
  dispatch({type:'USER_LOADING'})
}

export const userRegister=(formData)=>async(dispatch)=>{
  ////console.log(formData)
  const body=JSON.stringify(formData)
  ////console.log(body)
  return fetch(url+'/signup',{
    method:"POST",
    body:body,
    headers:{
      'Content-Type':'application/json'
    }
  })
  .then(response=>{
    //response.json().then(body=>{console.log(body.message)})
    if(response.ok) return response
    else{
      var error=''
      response.json().then(body=> {
        error =new Error (body.message)
        error.response=response;
        dispatch({type:'ANY_ERROR',payload:error})
      })
    }
  },error=>{throw error})
  .then(response=>response.json())
  .then(response=>{
    if(response.success){
      //setCredentials to Local Storage
      //console.log(response);
      localStorage.setItem('userdetails',JSON.stringify(response))
      dispatch({type:'SIGNUP',payload:response})
      window.location.href="/dash"

      //alert(response.status)
    }
  })
  .catch(error=>dispatch({type:'ANY_ERROR',payload:error}))
}
export const userLogin=(formData)=>async(dispatch)=>{
  //console.log(formData)
  //console.log(body)
  return fetch(url+'/login',{
    method:"POST",
    body:JSON.stringify({username:formData.username,password:formData.password}),
    headers:{
      'Content-Type':'application/json'
    }
  })
  .then(response=>{
    if(response.ok) return response
    else{
      var error=''
      response.json().then(body=> {
        error =new Error (body.message)
        error.response=response;
        dispatch({type:'ANY_ERROR',payload:error})
      })
    }
  },error=>{throw error})
  .then(response=>response.json())
  .then(response=>{
    if(response.success){
      //setCredentials to Local Storage
      console.log(response);
      localStorage.setItem('userdetails',JSON.stringify(response))
      dispatch({type:'LOGIN',payload:response.user})
      //alert(response.status)
      window.location.href="/dash"
    }
  })
  .catch(error=>dispatch({type:'ANY_ERROR',payload:error}))
}
export const userLogout=()=>async(dispatch)=>{
  return fetch(url+'/logout')
  .then(response=>{
    //console.log(response)
    if(response.ok) return response
    else{
      var error =new Error ('Error '+response.status+': '+response.statusText)
      error.response=response;
      ////console.log(error)
      dispatch({type:'ANY_ERROR',payload:error})
      throw error;
    }
  },error=>{throw error})
  .then(response=>{
    localStorage.removeItem('userdetails')
    window.location.href="/home"
    dispatch({type:'LOGOUT'})
  })
  .catch(error=>dispatch({type:'ANY_ERROR',payload:error}))
}

export const changeUserPassword=(changeData)=>async(dispatch)=>{
  var userdetails=localStorage.getItem('userdetails');
  userdetails=JSON.parse(userdetails);

  const bearer=`Bearer ${userdetails.token}`

  return fetch(`${url}/changepassword`,{
    method:"POST",
    body:JSON.stringify(changeData),
    headers:{
      'Content-Type':'application/json',
      'Authorization':bearer
    },
    credentials:"same-origin"
  })
  .then(response=>{
    //console.log(response)
    if(response.ok) return response
    else{
      var error=''
      response.json().then(body=> {
        //console.log(body)
        error =new Error (body.message)
        error.response=response;
        dispatch({type:'ANY_ERROR',payload:error})
      })
    }
  },error=>{throw error})
  .then(response=>{
    return response.json()
  })
  .then((response)=>{
    if(response.success){
      //setCredentials to Local Storage
      //console.log(response);
      // localStorage.setItem('userdetails',JSON.stringify(response))
      dispatch({type:'CHANGE_PASSWORD',payload:response})
      // //alert(response.status)
      // window.location.href="/dash"
    }
  })
  .catch(error=>dispatch({type:'ANY_ERROR',payload:error}))
}

export const userProfileUpdate=(formData)=>async(dispatch)=>{
  var userdetails=localStorage.getItem('userdetails');
  userdetails=JSON.parse(userdetails);

  const bearer=`Bearer ${userdetails.token}`

  //console.log(formData)
  return fetch(`${url}/${userdetails.user._id}`,{
    method:"PUT",
    body:JSON.stringify(formData),
    headers:{
      'Content-Type':'application/json',
      'Authorization':bearer
    },
    credentials:"same-origin"
  })
  .then(response=>{
    //console.log(response)
    if(response.ok) return response
    else{
      var error =new Error ('Error '+response.status+': '+response.statusText)
      error.response=response;
      ////console.log(error)
      dispatch({type:'ANY_ERROR',payload:error})
      throw error;
    }
  },error=>{throw error})
  .then(response=>{
    return response.json()
  })
  .then((response)=>{
    if(response.success){
      //setCredentials to Local Storage
      console.log(response);
      localStorage.setItem('userdetails',JSON.stringify(response))
      dispatch({type:'LOGIN',payload:response.user})
      //alert(response.status)
      window.location.href="/dash"
    }
  })
  .catch(error=>dispatch({type:'ANY_ERROR',payload:error}))
}

export const getUser=()=>async(dispatch)=>{
  var userdetails=localStorage.getItem('userdetails');
  userdetails=JSON.parse(userdetails);
  //console.log(userdetails)
  
  if(userdetails){
    const bearer=`Bearer ${userdetails.token}`
  //console.log(bearer)
  return fetch(url+'/',{
    method: "GET",
    headers: {
      'Authorization': bearer
    },
    credentials: "same-origin"
  }).then((response)=>{
    if(response.ok){
      return response
    }else{
      var error=new Error('Error: '+response.status+': '+response.statusText);
      error.response=response;
      if(response.status===401){
        dispatch(userLogout())
      }
      dispatch({type:'ANY_ERROR',payload:error})
      throw error;
    }
  },error=>{
    var errmess=new Error(error.message)
    throw errmess;
  })
  .then((response)=>{
    return response.json()
  })
  .then((user)=>{
    //console.log(localStorage.getItem('token'))
    dispatch({type:'GET_USERS_LIST',payload:user})
  })
  .catch((error)=>dispatch({type:'ANY_ERROR',payload:error}));
  }else{
    var error=new Error('Login/Signup to proceed!');
    //error.response=response;
    dispatch({type:'ANY_ERROR',payload:error})
  }
}

export const sendOtp=(phone)=>async(dispatch)=>{
  return fetch(url+'/phone/sendotp',{
    method:"POST",
    body:JSON.stringify({phone:phone}),
    headers:{
      'Content-Type':'application/json',
    }
  })
  .then(response=>{
    if(response.ok) return response;
    else{
      var error=null
      if(response.status===401){
          error = new Error(' ' + response.status + ': ' + response.statusText+'\nOnly admin allowed to do this operation.');
          error.response = response;
          dispatch({type:'ANY_ERROR',payload:error})
          //console.log(error)
          //localStorage.removeItem('token')
          throw error;    
      }else{
          error = new Error(' ' + response.status + ': ' + response.statusText+'\nMissing field value or Phone already exists!');
          error.response = response;
          dispatch({type:'ANY_ERROR',payload:error})
          ////console.log(error)
          throw error;    
      }
    }
  },error=>{throw error})
  .then((response)=>{return response.json()})
  .then((success)=>{
    dispatch({type:'SEND_OTP',payload:success})
  })
  .catch((error)=>dispatch({type:'ANY_ERROR',payload:error}))
}
export const verifyOtp=(phone,otp)=>async(dispatch)=>{
  return fetch(url+'/phone/validateotp',{
    method:"POST",
    body:JSON.stringify({phone:phone,otp:otp}),
    headers:{
      'Content-Type':'application/json'
    }
  })
  .then(response=>{
    if(response.ok) return response;
    else{
      var error=null
      if(response.status===401){
          error = new Error(' ' + response.status + ': ' + response.statusText+'\nOnly admin allowed to do this operation.');
          error.response = response;
          dispatch({type:'ANY_ERROR',payload:error})
          //console.log(error)
          //localStorage.removeItem('token')
          throw error;    
      }else{
          error = new Error(' ' + response.status + ': ' + response.statusText+'\nMissing field value or Phone already exists!');
          error.response = response;
          dispatch({type:'ANY_ERROR',payload:error})
          ////console.log(error)
          throw error;    
      }
    }
  },error=>{throw error})
  .then((response)=>{return response.json()})
  .then((user)=>{
    dispatch({type:'VERIFY_OTP',payload:user})
    alert(user.status)

  })
  .catch((error)=>dispatch({type:'ANY_ERROR',payload:error}))
}

// export const googleLogin=()=>async(dispatch)=>{
//   return fetch(url+'/google')
//   .then(response=>{
//     if(response.ok) return response;
//     else{
//       var error=null
//       if(response.status===401){
//           error = new Error(' ' + response.status + ': ' + response.statusText+'\nOnly admin allowed to do this operation.');
//           error.response = response;
//           //console.log(error)
//           //localStorage.removeItem('token')
//           throw error;    
//       }else{
//           error = new Error(' ' + response.status + ': ' + response.statusText+'\nMissing field value or Phone already exists!');
//           error.response = response;
//           ////console.log(error)
//           throw error;    
//       }
//     }
//   },error=>//console.log(error))
//   .then((response)=>{return response.json()})
//   .then((user)=>{
//     //console.log(user)
//   })
//   .catch((error)=>//console.log(error))
// }