import React,{useState} from 'react'
import './Login.css'
const Login=()=>{
  const [forget,setForget]=useState(false)
  const [loginData,setLoginData]=useState({email:'',password:''})
  const [forgetData,setForgetData]=useState({email:''})

  const logIn=(e)=>{
    e.preventDefault();
    //console.log(loginData)
    window.confirm("Do you want to login?\n"+JSON.stringify(loginData))
    setLoginData({email:'',password:''})
  }
  const forGet=(e)=>{
    e.preventDefault()
    window.confirm("Do you want to forget password?\n"+JSON.stringify(forgetData))
    setForgetData({email:''})
  }
  const handleChangeLogin=(e)=>{
    setLoginData({...loginData,[e.target.name]:e.target.value})
  }
  const handleChangeForget=(e)=>{
    setForgetData({...forgetData,[e.target.name]:e.target.value})
  }

  if(!forget){
    return(
      <div  className="body" id="login">
        <div className="login">
          <div className="login-header">
          <div className="animate">
          <h1>Log In</h1>
            <div className="container">
              <form onSubmit={logIn}>
                <div className="row">
                  <div className="col-12">
                    <input autoComplete="off" autoCapitalize="off" spellCheck="false" required type="email" name="email" placeholder="Email Address" value={loginData.email} onChange={handleChangeLogin}/>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <input autoComplete="off" autoCapitalize="off" minLength="8" spellCheck="false" required type="password" name="password" placeholder="Password" value={loginData.password} onChange={handleChangeLogin}/>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <button className="login-btn" type="submit">Login</button>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <span onClick={()=>setForget(true)}>Forgotten Password?</span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <h6>New to Saprtificial? <sign onClick={()=>{window.location.href="/user/signup"}}>Sign Up </sign> here</h6>
                  </div>
                </div>
              </form>
            </div>
            </div>
          </div>
        </div>
      </div>
    )
  }else{
    return(
      <div  className="body" id="login">
        <div className="login">
          <div className="login-header">
          <div className="animate">
          <h1>Log In</h1>
            <div className="container">
              <form onSubmit={forGet}>
                <div className="row">
                  <div className="col-12">
                    <input autoComplete="off" autoCapitalize="off" spellCheck="false" required type="email" name="email" placeholder="Email Address" value={forgetData.email} onChange={handleChangeForget}/>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <button className="login-btn" type="submit">Forget</button>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <h6>New to Saprtificial? <sign onClick={()=>{window.location.href="/user/signup"}}>Sign Up </sign> here</h6>
                  </div>
                </div>
              </form>
            </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login



