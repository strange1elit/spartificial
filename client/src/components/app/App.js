import { Switch, Route, Redirect } from 'react-router-dom';
import Header from '../home/Navbar'
import Home from '../home/Home'
import Login from '../login/Login'
import About from '../about/About'
import Research from '../research/Research'
import Projects from '../projects/Projects'
import Blogs from '../blogs/Blogs'
import Contact from '../contact/Contact'
import Footer from '../footer/Footer'
import './App.css';
import Signup from '../login/Signup';
import Blog from '../blogs/Blog'


function App() {
  return (
    <div className="app">
      <Header/>
      <Switch>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/user/login" component={Login}/>
        <Route exact path="/user/signup" component={Signup}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/research" component={Research}/>
        <Route exact path="/projects" component={Projects}/>
        <Route exact path="/blogs" component={Blogs}/>
        <Route exact path="/blogs/:blog_id" component={Blog}/>
        <Route exact path="/contact" component={Contact}/>
        <Redirect to="/home"/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
