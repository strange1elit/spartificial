import React from 'react'
import {NavLink} from 'react-router-dom'
import './Navbar.css'
import logo from '../../assets/images/hero.jpeg'
const NavbarComp=()=>{

	var current=localStorage.getItem('userdetails')
	current=JSON.parse(current)

	var preScrollPos=window.pageYOffset;
	window.onscroll=()=>{
		var currentScrollPos=window.pageYOffset;
		if(preScrollPos>currentScrollPos){
			document.getElementById("navbar").style.top="0"
		}else{
			document.getElementById("navbar").style.top="-57px"
		}
		if(currentScrollPos===0){
			document.getElementById("navbar").style.top="0px"
		}
		preScrollPos=currentScrollPos
	}

	const openNav=()=>{
		//console.log("clicked")
		var x=document.getElementById("navbar")
		if(x.className==="topnav"){
			x.className+=" responsive"
		}else{
			x.className="topnav"
		}
	}
	const closeNav=()=>{
		var x=document.getElementById("navbar")
		if(x.className==="topnav responsive"){
			x.className="topnav"
		}
	}
	return (
		<header>
			<div className="topnav" id="navbar">
					<span id="title"><img src={logo} alt="logo"/>partificial</span>
					{current?(<NavLink to="/dash" onClick={closeNav}>Dashboard</NavLink>):(<></>)}
					<NavLink to="/home" onClick={closeNav}>Home</NavLink>
					<NavLink to="/about" onClick={closeNav}>About</NavLink>
					<NavLink to="/projects" onClick={closeNav}>Projects</NavLink>
					<NavLink to="/blogs" onClick={closeNav}>Blogs</NavLink>
					<NavLink to="/getInvolved" onClick={closeNav}>Get Involved</NavLink>
					{current?(<></>):(<NavLink to="/user/login" onClick={closeNav}>LogIn</NavLink>)}

					<span className="icon" onClick={openNav}><i className="fa fa-bars"></i></span>
					<span className="icon-close" onClick={closeNav}><i className="fa fa-times"></i></span>
			</div>

		</header>
	)
}

export default NavbarComp;