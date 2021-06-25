import React, { useState } from 'react'

import './getInvolved.css'

const GetInvolved=()=>{
	const [isMobile,setIsMobile]=useState(false)
	window.addEventListener("resize", function() {
		if (window.innerWidth < 700) {
			setIsMobile(true)	
		}
		else setIsMobile(false)
	});
	return (
		<div className="getInvolved">
      <div className="hero">
				<div className="title">
					<h4>Get Involved</h4>
					<h1>Join our efforts<br/>to develop AI for the<br/>benefit of everyone.</h1>
				</div>
      </div>
			<div className="container-xl">
			<div className="row align-items-center">
					<div className="col-sm-6 align-self-start">
						<div className="image">
							<img className="img-fluid" alt="..." src="https://ai4good.org/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGYWk0Z29vZC5vcmclMkZ3cC1jb250ZW50JTJGdXBsb2FkcyUyRjIwMjAlMkYxMCUyRmdldGludm9sdmVkLWRvbmF0ZS0xMDI0eDU3Ni5qcGcmY2FjaGVNYXJrZXI9MTYxMDY0MTcwMS0xMDI1NTgmdG9rZW49ZGYyMjZmNzA5OGJiOTFkOQ.q.jpg"/>
						</div>
					</div>
					<div className="col-sm-6 align-self-center">
						<h3 id="heading">Donate to make an impact</h3>
						<div className="decription">
							<p>Your donation will help support new research and collaborative projects to meet the UN’s Sustainable Development Goals and helps solve issues that matter.</p>
						</div>
						<button className="support-button button"> 
							Support Us
						</button>
					</div>
				</div>
				<div className="row align-items-center">
					<div className="col-sm-6 align-self-start">
						<div className="image">
							<img className="img-fluid" alt="..." src="https://www.biocep.com/wp-content/uploads/2020/10/Partner-image.png"/>
						</div>
					</div>
					<div className={isMobile?("col-sm-6 align-self-center"):("col-sm-6 align-self-center order-first")}>
						<h3 id="heading">Partner with us on projects</h3>
						<div className="decription">
							<p>We are looking to team up with Corporates, Academic Institutions, Government Agencies, Nonprofits and others to collaborate with us on AI and Machine Learning Projects and Policy to make a meaningful, global impact.</p>
						</div>
						<button className="partner-button button"> 
							Let's Partner
						</button>
					</div>
				</div>
				<div className="row align-items-center">
					<div className="col-sm-6 align-self-start">
						<div className="image">
							<img className="img-fluid" alt="..." src="https://media.istockphoto.com/photos/woman-hands-holding-piece-of-cardboard-with-words-volunteers-needed-picture-id1087246444?k=6&m=1087246444&s=612x612&w=0&h=SyzlpfbbxuUnOhekEMOjif-uidZ3KEGWroWt4TCoXAY="/>
						</div>
					</div>
					<div className="col-sm-6 align-self-center">
						<h3 id="heading">Volunteer to lead the change</h3>
						<div className="decription">
							<p>Join a team of people driven to design, build and orchestrate innovative AI and Machine Learning research and projects that will shape the future of global policy.</p>
						</div>
						<button className="apply-button button"> 
							Apply now
						</button>
					</div>
				</div>
			</div>
					
		</div>
	)
}

export default GetInvolved;