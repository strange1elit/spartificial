import React from 'react'
import {NavLink} from 'react-router-dom'
import './Navbar.css'
import logo from '../../assets/images/hero.jpeg'
import Payment from '../payments/Payment'
import {setLoading, userLogout} from '../../redux/actions/user'
import {useSelector,useDispatch} from 'react-redux'
const NavbarComp=()=>{
	const dispatch=useDispatch();
	const current=useSelector(state=>state.users.current)
	var preScrollPos=window.pageYOffset;
	window.onscroll=()=>{
		var currentScrollPos=window.pageYOffset;
		if(preScrollPos>currentScrollPos){
			document.getElementById("navbar").style.top="0"
		}else{
			document.getElementById("navbar").style.top="-57px"
		}
		if(currentScrollPos===0){
			document.getElementById("navbar").style.top="40px"
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
	const logout=()=>{
		dispatch(setLoading())
		dispatch(userLogout())
	}
	return (
		<header>
			<div className="user">
				{current?(<button onClick={()=>logout()} style={{color:'white',backgroundColor:'violet'}}>Logout</button>):(<NavLink to="/user/login">LogIn</NavLink>)}
				<Payment/>
			</div>
			<div className="topnav" id="navbar">
					<span id="title"><img src={logo} alt="logo"/>partificial</span>
					<NavLink to="/dash" onClick={closeNav}>Dashboard</NavLink>
					<NavLink to="/home" onClick={closeNav}>Home</NavLink>
					<NavLink to="/about" onClick={closeNav}>About</NavLink>
					<NavLink to="/research" onClick={closeNav}>Research</NavLink>
					<NavLink to="/projects" onClick={closeNav}>Projects</NavLink>
					<NavLink to="/blogs" onClick={closeNav}>Blogs</NavLink>
					<NavLink to="/contact" onClick={closeNav}>Get Involved</NavLink>
					<span className="icon" onClick={openNav}><i className="fa fa-bars"></i></span>
			</div>
		</header>
	)
}

export default NavbarComp;