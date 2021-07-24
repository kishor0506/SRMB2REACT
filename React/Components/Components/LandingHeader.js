import React from 'react'
import { Link } from 'react-router-dom'

export default function LandingHeader() {
    return (
        <header id="header" className="fixed-top">
          <div className="container d-flex">
      
            <div className="logo mr-auto">
              <h1 className="text-light"><a href=""><span>STUDENT FORM</span></a></h1>
             
            </div>
      
            <nav className="nav-menu d-none d-lg-block">
              <ul>
                <li><Link to="/">Register </Link></li>
             
                
               
                <li>
                  <Link to="/viewStudent">Student details</Link>
                  </li>
      
              </ul>
            </nav>
      
            {/* <div className="header-social-links">
              
              <a href="#" className="facebook"><i className="icofont-facebook"></i></a>
              <a href="#" className="instagram"><i className="icofont-instagram"></i></a>
              <a href="#" className="linkedin"><i className="icofont-linkedin"></i></a>
            </div> */}
      
          </div>
        </header>  
    )
}
