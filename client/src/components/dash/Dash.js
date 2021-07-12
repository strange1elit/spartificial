import React, { useState } from 'react'
import './Dash.css'
import FileBase from 'react-file-base64';
import {NavLink} from 'react-router-dom'
import moment from 'moment'
import {setLoading, userLogout, userProfileUpdate, changeUserPassword} from '../../redux/actions/user'
import {useDispatch, useSelector} from 'react-redux'
import Loader from '../loader/Loading'
import Toaster from '../loader/Toast';
const Dash=()=>{
  const dispatch=useDispatch();

  const users=useSelector((state)=>state.users)
  var current=null
  if(users.current) current=users.current
  //console.log(current)
  const [showToast,setShowToast]=useState(false)
  //var userdetails=localStorage.getItem('userdetails');

  const isLoading=useSelector((state)=>state.users.isLoading)
  const errmess=useSelector((state)=>state.users.errmess)
  const message=useSelector((state)=>state.users.message)
  
  const [formData,setFormData]=useState({firstname:'',lastname:'',phone:'',gender:'',dob:'',about:'',education:'', address:'',img:''})

  const [changeData,setChangeData]=useState({currentpassword:'',newpassword:'',confirmpassword:''})


  const logout=()=>{
		dispatch(setLoading())
		dispatch(userLogout())
	}

  //console.log(userdetails)
  const handleChange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }
  const handlePasswordChange=(e)=>{
    setChangeData({...changeData,[e.target.name]:e.target.value})
  }
  const saveProfile=(e)=>{
    e.preventDefault()
    //console.log(formData)
    dispatch(setLoading())
    dispatch(userProfileUpdate(formData,current._id))

    setFormData({firstname:'',lastname:'',phone:'',gender:'',dob:'',about:'',education:'', address:'',img:''})
  }
  const changePassword=(e)=>{
    setShowToast(true)

    e.preventDefault();
    if(changeData.newpassword===changeData.confirmpassword){
      setShowToast(false)
      console.log(changeData)
      dispatch(setLoading())
      dispatch(changeUserPassword(changeData))
      setChangeData({currentpassword:'',newpassword:'',confirmpassword:''})
    }else{
      setTimeout(()=>{
        setShowToast(false)
        setChangeData({currentpassword:'',newpassword:'',confirmpassword:''})
      },3000)
    }
  }


  return(current?
    <div className="body" id="dash">
      <div className="container">
        <div className="row">
          <div className="col-sm-7">
            <div className="heading">
              <h1>My Dashboard</h1>
              <p>Welcome {current.personal.firstname}, ready for your new project? </p>
            </div>
            <div className="dash-tab">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button className="nav-link active" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="true">Profile</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="projects-tab" data-bs-toggle="tab" data-bs-target="#projects" type="button" role="tab" aria-controls="projects" aria-selected="false">Projects</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="purchases-tab" data-bs-toggle="tab" data-bs-target="#purchases" type="button" role="tab" aria-controls="purchases" aria-selected="false">Purchases</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="settings-tab" data-bs-toggle="tab" data-bs-target="#settings" type="button" role="tab" aria-controls="settings" aria-selected="false">Settings</button>
                </li>
              </ul>

              <div className="tab-content">
                <div className="tab-pane active" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                  <div className="profile-img">
                    <img alt="..." className="img-fluid" src={current.personal.img}/>
                    <h2>{current.personal.firstname} {current.personal.lastname}</h2>
                  </div>
                  <div className="basic-info">
                    <h5>About</h5>
                    <p>{current.personal.about}</p>
                    <h5>Email</h5>
                    <p><a href={`mailto:${current.personal.email}`}>{current.personal.email}</a></p>
                    <h5>Phone</h5>
                    <p><a href={`tel:${current.personal.phone}`}>{current.personal.phone}</a></p>
                    <h5>Education</h5>
                    <p>{current.personal.education}</p>
                    <h5>Address</h5>
                    <p>{current.personal.address}</p>
                  </div>
                  <div className="logout">
                    <button type="button" onClick={()=>logout()}>Logout</button>
                  </div>
                </div>
                <div className="tab-pane" id="projects" role="tabpanel" aria-labelledby="projects-tab">
                  <div style={{textAlign:'right',padding:'5px'}}>
                    <button className="btn btn-sm btn-success"><strong>Create new Project</strong></button>
                  </div>
                  <div>
                    <h5><strong>Enrolled Projects</strong></h5>
                  </div>
                  {current?current.payments.map((val,idx)=>{
                    return(
                      <div className="card bg-dark text-white" key={idx}>
                        <div className="card-body">
                          <h5 className="card-title">{val.title}</h5>
                          <p className="card-text">{val.description}</p>
                          <small className="card-text">{moment(val.createdAt).fromNow()}</small>
                          <br/>
                          <NavLink to={`/projects/${val.project_id}`} className="btn btn-primary">More Info...</NavLink>
                        </div>
                      </div>
                    )
                  }):'No projects found'}
                </div>
                <div className="tab-pane" id="purchases" role="tabpanel" aria-labelledby="purchases-tab">
                  <div className="table-responsive p-2">
                    <table className="table table-hover table-sm text-center table-bordered">
                      <thead>
                        <tr>
                          <th>S.No.</th>
                          <th>PaymentId</th>
                          <th>Title</th>
                          <th>Txn Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        {current.payments.map((val,idx)=>{
                          return <tr key={idx}>
                            <td>{idx+1}.</td>
                            <td>{val.payment_id}</td>
                            <td>{val.title}</td>
                            <td>{moment(val.createdAt).format('MMMM Do YYYY, h:mm a')}</td>
                          </tr>
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="tab-pane" id="settings" role="tabpanel" aria-labelledby="settings-tab">
                  {isLoading?(<Loader/>):(
                    <div className="profile-form">
                    <h5 className="text-left">Edit Profile</h5>
                    <form onSubmit={saveProfile}>
                      <FileBase type="file" multiple={false} onDone={({ base64 }) => setFormData({ ...formData, img: base64 })} />                      
                      <input name="firstname" type="name" placeholder="First Name" value={formData.firstname} onChange={handleChange}></input>
                      <input name="lastname" type="name" placeholder="Last Name" value={formData.lastname} onChange={handleChange}></input>
                      <input name="phone" type="tel" placeholder="Phone" value={formData.phone} onChange={handleChange}></input>
                      <input name="address" type="textarea" placeholder="Address" value={formData.address} onChange={handleChange}></input>
                      <input name="dob" type="date" placeholder="Date of Birth" value={formData.dob} onChange={handleChange}></input>
                      <input name="gender" type="text" placeholder="Male/Female" value={formData.gender} onChange={handleChange}></input>
                      <input name="education" type="text" placeholder="College" value={formData.education} onChange={handleChange}></input>
                      <input name="about" type="textarea" placeholder="About" value={formData.about} onChange={handleChange}></input>
                      <div className="text-center">
                        <button type="submit">Save</button>
                      </div>
                    </form>
                  </div>                  
                  )}
                  {isLoading?(<Loader/>):(
                  <div className="change-form">
                    <h5 className="text-left">Change Password</h5>
                    <form onSubmit={changePassword}>
                      <input minLength="8" required name="currentpassword" type="password" placeholder="Current Password" value={changeData.currentpassword} onChange={handlePasswordChange}></input>
                      <input minLength="8" required name="newpassword" type="password" placeholder="New Password" value={changeData.newpassword} onChange={handlePasswordChange}></input>
                      <input minLength="8" required name="confirmpassword" type="password" placeholder="Confirm Password" value={changeData.confirmpassword} onChange={handlePasswordChange}></input>                      
                      <div className="text-center">
                        <button type="submit">Save</button>
                      </div>
                    </form>
                    {showToast?(<Toaster message="Password does not match." style={{width:'100%',marginTop:'9px'}}/>):(<></>)}

                    {errmess?(<Toaster message={errmess.message} style={{width:'100%',marginTop:'9px'}}/>):(<></>)}
                    {message?(<Toaster message={message.message} style={{width:'100%',marginTop:'9px'}}/>):(<></>)}
                  </div>                  
                  )}
                </div>
              </div>            
            </div>
          </div>
          <div className="col-sm-5">
            <div className="heading">
              <h1>Statements</h1>
            </div>
            <div className="goal">
              <h5>Goals</h5>
              <div className="progress">
                <div className="progress-bar" role="progressbar" style={{width: "57%"}} aria-valuenow="57" aria-valuemin="0" aria-valuemax="100">57%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>:<div style={{height:'80vh'}}></div>
  )
}

export default Dash
