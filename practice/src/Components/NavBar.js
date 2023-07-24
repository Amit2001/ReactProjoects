import My_Photo from "../Images/My_Photo.jpeg"
import "./NavBar.css"
import React from 'react'
function Nav(){
 return(
    <nav className="navbar navbar-expand-lg bg-body-dark ">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">My Site</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse m-2" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">About Me</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Contact Me</a>
        </li>
      </ul>

      <a className="nav-link active m-2" href="/">Amit Sharma</a> 
      <span className="navbar-text">
        <img src={My_Photo} alt='Amit'/>
      </span>
    </div>
  </div>
</nav>
);
}

export default Nav;