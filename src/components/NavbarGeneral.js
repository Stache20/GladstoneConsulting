import React from 'react'
import $ from 'jquery'


function Navbar() {

  
  

    return (

        <nav class="navbar fixed-top navbar-expand-lg navbar-light navColour navColour boxShadow">
        
        <a class="navbar-brand" href="#"><i class="fa-solid fa-handshake-angle"></i>Gladstone Consulting</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ">
            <li class="nav-item ">
              <a class="nav-link" href="/" >Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/services" >Services</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/contact">Contact</a>
            </li>
            
          </ul>
        </div>
        <div class="collapse navbar-collapse " id="navbarNav">
        <ul class="navbar-nav ml-auto">
        <a class="nav-link" target="_blank" href="https://www.linkedin.com/in/marni-gladstone-m-a-spec-ed-aba-bcba-9a60a3178/"><i class="fa-brands fa-linkedin"></i> <span class="sr-only">(current)</span></a>
        </ul>
        </div>
      </nav>
    )

} ;



export default Navbar