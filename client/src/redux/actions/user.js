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
    if(response.ok) return response
    else{
      var error =new Error ('Error '+response.status+': '+response.statusText)
      error.response=response;
      dispatch({type:'ANY_ERROR',payload:error})
      throw error;
    }
  },error=>{throw error})
  .then(response=>response.json())
  .then(response=>{
    if(response.success){
      //setCredentials to Local Storage
      //console.log(response);
      dispatch({type:'SIGNUP',payload:response})
      alert(response.status)
      //window.location.href="/home"
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
      var error =new Error ('Error '+response.status+': '+response.statusText)
      error.response=response;
      dispatch({type:'ANY_ERROR',payload:error})
      throw error;
    }
  },error=>{throw error})
  .then(response=>response.json())
  .then(response=>{
    if(response.success){
      //setCredentials to Local Storage
      //console.log(response);
      dispatch({type:'LOGIN',payload:response})
      alert(response.status)
      //window.location.href="/home"
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
    window.location.href="/home"
    dispatch({type:'LOGOUT'})
  })
  .catch(error=>dispatch({type:'ANY_ERROR',payload:error}))
}

export const getUser=()=>async(dispatch)=>{
  return fetch(url+'/').then((response)=>{
    if(response.ok){
      return response
    }else{
      var error=new Error('Error: '+response.status+': '+response.statusText);
      error.response=response;
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
  .then((users)=>{
    dispatch({type:'GET_USERS_LIST',payload:users})
  })
  .catch((error)=>dispatch({type:'ANY_ERROR',payload:error}));
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