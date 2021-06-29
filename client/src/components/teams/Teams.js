import React from "react";
import './Teams.css'
const Teams=()=>{
  const teams=[
    {
      "name":"Aalok Kumar",
      "about":"HackerRank certified for ReactJs. 2+ years of experience in MERN development. B.Tech from NIT Hamirpur",
      "designation":"MERN Stack Developer",
      "image":"https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png"
    },
    {
      "name":"Aalok Kumar",
      "about":"HackerRank certified for ReactJs. 2+ years of experience in MERN development. B.Tech from NIT Hamirpur",
      "designation":"MERN Stack Developer",
      "image":"https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png"
    },
    {
      "name":"Aalok Kumar",
      "about":"HackerRank certified for ReactJs. 2+ years of experience in MERN development. B.Tech from NIT Hamirpur",
      "designation":"MERN Stack Developer",
      "image":"https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png"
    },
    {
      "name":"Aalok Kumar",
      "about":"HackerRank certified for ReactJs. 2+ years of experience in MERN development. B.Tech from NIT Hamirpur",
      "designation":"MERN Stack Developer",
      "image":"https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png"
    },
    {
      "name":"Aalok Kumar",
      "about":"HackerRank certified for ReactJs. 2+ years of experience in MERN development. B.Tech from NIT Hamirpur",
      "designation":"MERN Stack Developer",
      "image":"https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png"
    },
    {
      "name":"Aalok Kumar",
      "about":"HackerRank certified for ReactJs. 2+ years of experience in MERN development. B.Tech from NIT Hamirpur",
      "designation":"MERN Stack Developer",
      "image":"https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png"
    },
    {
      "name":"Aalok Kumar",
      "about":"HackerRank certified for ReactJs. 2+ years of experience in MERN development. B.Tech from NIT Hamirpur",
      "designation":"MERN Stack Developer",
      "image":"https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png"
    }
  ]
  return(
    <div id="teams">
			<div className="hero">
				<div className="title">
					<h4>Our Teams</h4>
					<h1>Teams is a collaboration<br/> platform that unifies chat, <br/>voice, video and file sharing.</h1>
				</div>
      </div>
      <div className="container">
        <div className="row" style={{padding:'40px 0 0 0'}}>
					<div className="col-12 text-center">
						<div className="teams-heading">
							<h2>Mentors/Instructors</h2>
						</div>
					</div>
				</div>
				<div className="row">
					{teams?(
						teams.map((val,idx)=>{
							return(
								<div className=" col-sm-4 col-md-3 col-12  card-group text-center" key={idx}>
									<div class="card text-center">
                    <div className="card-inner">
                      <div class="card-body">
                        <div className="card-front">
                          <img src={val.image} class="img-fluid" alt="..."/>
                          <h5 class="card-title">{val.name}</h5>
                          <h6>{val.designation}</h6>
                        </div>
                        <div className="card-back">
                          <p className="card-text">{val.about}</p>
                          <a href="mailto:aaloksah766626@gmail.com"><span className="fa fa-envelope"></span></a>
                          <a href="tel:9504496801" ><span className="fa fa-phone"></span></a>
                          <a href="https://www.facebook.com" rel="noopener noreferrer"><span className="fa fa-facebook"></span></a>
                          <a href="https://www.instagram.com" rel="noopener noreferrer"><span className="fa fa-instagram"></span></a>
                        </div>
                      </div>
                    </div>
									</div>					
								</div>
							)
						})
					):(<></>)}
				</div>
      </div>
    </div>
  )
}
export default Teams