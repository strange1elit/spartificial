import React from 'react'
import './Header.css'
import logo from '../../assets/images/hero.jpeg'
const Header=()=>{

	var preScrollPos=window.pageYOffset;
	window.onscroll=()=>{
		var currentScrollPos=window.pageYOffset;
		if(preScrollPos>currentScrollPos){
			document.getElementById("navbar").style.top="0"
		}else{
			document.getElementById("navbar").style.top="-57px"
		}
		if(currentScrollPos===0){
			document.getElementById("navbar").style.top="47px"
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
	return (
		<header>
			<div className="topnav" id="navbar">
					<a href="/" id="title"><img src={logo} alt="logo"/>Spartificial</a>
					<a href="#home" className="active">Home</a>
					<a href="#about">About</a>
					<a href="#research">Research</a>
					<a href="#projects">Projects</a>
					<a href="#blogs">Blogs</a>
					<a href="#contact">Contact</a>
					<a href="javascript:void(0)" className="icon" onClick={openNav}><i className="fa fa-bars"></i></a>
			</div>
			<div className="hero-text">
				<h1>Spartificial</h1>
			</div>
		</header>
	)
}

export default Header;