import React from 'react'
import {Link} from 'react-router-dom'
import './Footer.css'

const Footer=()=>{
	return (
		<footer>
			<div className="footer">
        <div className="container">
          <div className="row justify-content-center">             
            <div className="col-11 offset-1 col-sm-6 links">
              <h5>Important Links</h5>
							<ul className="list-unstyled">
								<li><Link to="/home">Home</Link></li>
								<li><Link to="/about">About</Link></li>
								<li><Link to="/research">Research</Link></li>
								<li><Link to="/projects">Projects</Link></li>
								<li><Link to="/blogs">Blogs</Link></li>
								<li><Link to="/contact">Contact</Link></li>
							</ul>
						</div>
						<div className="col-11 col-sm-5 align-self-center">
							<div className="text-center">
								<a className="social-icon" href="http://google.com/+"><i className="fa fa-google"></i></a>
								<a className="social-icon" href="http://www.instagram.com/"><i className="fa fa-instagram"></i></a>
								<a className="social-icon" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>
								<a className="social-icon" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>
								<a className="social-icon" href="mailto:"><i className="fa fa-envelope-o"></i></a>
							</div>
						</div>
					</div>
					<div className="row justify-content-center">             
						<div className="col-auto copyright align-self-center">
							<p>© Copyright 2021 Spartificial</p>
						</div>
					</div>
        </div>
      </div>		
		</footer>
	)
}

export default Footer;