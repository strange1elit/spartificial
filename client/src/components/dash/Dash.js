import React from 'react'
import './Dash.css'
const Dash=()=>{
  return(
    <div className="body" id="dash">
      <div className="container">
        <div className="row">
          <div className="col-sm-7">
            <div className="heading">
              <h1>My Dashboard</h1>
              <p>Welcome {"Aalok Kumar"}, ready for your new project? </p>
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
                    <img alt="..." className="img-fluid" src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png"/>
                    <h2>Aalok Kumar</h2>
                  </div>
                  <div className="basic-info">
                    <h5>About</h5>
                    <p>I'm 3rd year Electrical Engineering student at NIT Hamirpur. I'm a MERN Stack Developer with 2 years of experience.</p>
                    <h5>Email</h5>
                    <p><a href="mailto:aaloksah766626@gmail.com">aaloksah766626@gmail.com</a></p>
                    <h5>Phone</h5>
                    <p><a href="tel:+919504496801">+91 950-4496-801</a></p>
                    <h5>Education</h5>
                    <p>National Institute of Technology, Hamirpur</p>
                    <h5>Address</h5>
                    <p>Vaishali, Bihar, India 844118</p>
                  </div>
                </div>
                <div className="tab-pane" id="projects" role="tabpanel" aria-labelledby="projects-tab">
                  <div className="card bg-dark text-white">
                    <img className="card-img" src="https://www.the-diy-life.com/wp-content/uploads/2020/07/Robot-Car-Top.jpg" alt="..."/>
                    <div className="card-img-overlay">
                      <h5 className="card-title">Obstacle Avoiding Car</h5>
                      <p className="card-text">This car intelligently selects a path where there in no obstacle. If it detects an obstacle in front then it stops.</p>
                      <p className="card-text">Last updated 3 mins ago</p>
                    </div>
                  </div>
                  <div className="card bg-dark text-white">
                    <img className="card-img" src="https://i.ytimg.com/vi/5y6rhwr5Y8c/maxresdefault.jpg" alt="..."/>
                    <div className="card-img-overlay">
                      <h5 className="card-title">Lyra Home Assistant</h5>
                      <p className="card-text">Lyra Home Assistant is wifi controlled home automation system. Using this I can switch on/off my home appliances.</p>
                      <p className="card-text">Last updated 3 mins ago</p>
                    </div>
                  </div>
                  <div className="card bg-dark text-white">
                    <img className="card-img" src="https://fruitgrowersnews.com/wp-content/uploads/2019/08/Drone.jpg" alt="..."/>
                    <div className="card-img-overlay">
                      <h5 className="card-title">Gesture Controlled Drone</h5>
                      <p className="card-text">Gesture controlled drone is under development. I'm using quadcopter model with 2200kv bldc motors.</p>
                      <p className="card-text">Last updated 3 mins ago</p>
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="purchases" role="tabpanel" aria-labelledby="purchases-tab">
                  <div className="">
                    <ul className="list-unstyled">
                      <li>Arduino Uno</li>
                      <li>Nodemcu</li>
                      <li>Motor Driver Shield</li>
                      <li>MPU6050 triaxis sensor</li>
                    </ul>
                  </div>
                </div>
                <div className="tab-pane" id="settings" role="tabpanel" aria-labelledby="settings-tab">
                  <h3>Settings</h3>
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
    </div>
  )
}

export default Dash
