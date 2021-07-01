import React,{useEffect} from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from '../home/Navbar'
import Home from '../home/Home'
import Login from '../login/Login'
import About from '../about/About'
import Projects from '../projects/Projects'
import Blogs from '../blogs/Blogs'
import getInvolved from '../getInvolved/getInvolved'
import Footer from '../footer/Footer'
import './App.css';
import Signup from '../login/Signup';
import Teams from '../teams/Teams'
import Blog from '../blogs/Blog'
import Dash from '../dash/Dash'
import {useDispatch, useSelector} from 'react-redux'
import {getUser} from '../../redux/actions/user'
import {getBlogs} from '../../redux/actions/blog'
import {getTeams} from '../../redux/actions/teams'
function App() {

  // var userdetails=localStorage.getItem('userdetails');
  // userdetails=JSON.parse(userdetails);

  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(getUser())
    dispatch(getBlogs())
    dispatch(getTeams())
  },[dispatch])

  const users=useSelector((state)=>state.users)
  const blogs=useSelector((state)=>state.blogs)
  console.log(users)
  console.log(blogs)
  return (
    <div className="app">
      <Header/>
      <Switch>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/dash" component={Dash}/>        
        <Route exact path="/about" component={About}/>
        <Route exact path="/projects" component={Projects}/>
        <Route exact path="/blogs" component={()=><Blogs blogs={blogs.blogs}/>}/>
        <Route exact path="/blogs/:blog_id" component={Blog}/>
        <Route exact path="/getInvolved" component={getInvolved}/>
        <Route exact path="/teams" component={Teams}/>
        <Route exact path="/user/login" component={Login}/>
        <Route exact path="/user/signup" component={Signup}/>
        <Redirect to="/home"/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
