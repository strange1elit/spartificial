import React,{useState} from 'react'
import './Login.css'
const Signup=()=>{

  const [signUpData,setsignUpdata]=useState({email:'',firstname:'',lastname:'',password:''})

  const signUp=(e)=>{
    e.preventDefault();
    //console.log(loginData)
    window.confirm("Do you want to signup?\n"+JSON.stringify(signUpData))
    setsignUpdata({email:'',firstname:'',lastname:'',password:''})
  }
  const handleChangeSign=(e)=>{
    setsignUpdata({...signUpData,[e.target.name]:e.target.value})
  }
  return(
    <div  className="body" id="login">
      <div className="login">
        <div className="login-header">
        <div className="animate">
          <h1>Sign Up</h1>
          <div className="container">
            <form onSubmit={signUp}>
              <div className="row">
                <div className="col-12">
                  <input autoComplete="off" autoCapitalize="off" spellCheck="false" required type="email" name="email" placeholder="Email Address" value={signUpData.email} onChange={handleChangeSign}/>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <input autoComplete="on" autoCapitalize="on" spellCheck="false" required type="name" name="firstname" placeholder="First Name" value={signUpData.firstname} onChange={handleChangeSign}/>
                </div>
                <div className="col-6">
                  <input autoComplete="on" autoCapitalize="on" spellCheck="false" required type="name" name="lastname" placeholder="Last Name" value={signUpData.lastname} onChange={handleChangeSign}/>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <input autoComplete="off" autoCapitalize="off" minLength="8" spellCheck="false" required type="password" name="password" placeholder="Password" value={signUpData.password} onChange={handleChangeSign}/>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <button className="login-btn" type="submit">Sign Up</button>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <h6>Already registered? <sign onClick={()=>{window.location.href="/user/login"}}>Log In </sign> here</h6>
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

export default Signup



















