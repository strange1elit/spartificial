import React from 'react'

import './Home.css'

const Home=()=>{
  return(
    <div className="home" id="home">
      <div className="hero-image">
        <h1>Spartificial</h1>
      </div>
      <div className="body" id="home-div">
        <div className="content">
          <h1>Space</h1>
        </div>
        <div className="content">
          <h1>AI</h1>
        </div>
        <div className="content">
          <h1>Research</h1>
        </div>
      </div>
    </div>
  )
}

export default Home