import React from 'react'



function Navbar() {

  function smoothScrollServices(e) {
    
      let services = document.getElementById("Service");
      e.preventDefault();  // Stop Page Reloading
      services && services.scrollIntoView({behavior:'smooth'});
  }

  function smoothScrollHome(e) {
    let home = document.getElementById('Home');
    e.preventDefault();
    home && home.scrollIntoView({behavior:'smooth'});
  
  }

  function smoothScrollContact(e) {
    let home = document.getElementById('Contact');
    e.preventDefault();
    home && home.scrollIntoView({behavior:'smooth'});
  
  }

  window.addEventListener("scroll", function() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
      document.getElementById("Navbar").style.boxShadow = "0px 4px 7px -2px rgb(190 190 190 / 30%";
    } else {
      document.getElementById("Navbar").style.boxShadow = "none";
    }
  });



    return (

        <nav id='Navbar' class="navbar navShadow fixed-top navbar-expand-lg navbar-light navColour navColour boxShadow">
        <div class='container-fluid'>
        <a class="navbar-brand " href="/"><i class="fa-solid fa-handshake-angle"></i>Gladstone Consulting</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
       
        <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav" aria-expanded='true'>
          <ul class="navbar-nav ">

            <li class="nav-item ">
              <a class="nav-link" href="/" onClick={smoothScrollHome} >Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/services" onClick={smoothScrollServices }
>Services</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/contact" onClick={smoothScrollContact} >Contact</a>
            </li>
            
          </ul>
        </div>
        <div class="collapse navbar-collapse ">
        <ul class="navbar-nav ml-auto">
        <a class="nav-link" target="_blank" href="https://www.linkedin.com/in/marni-gladstone-m-a-spec-ed-aba-bcba-9a60a3178/"><i class="fa-brands fa-linkedin"></i> <span class="sr-only">(current)</span></a>
        </ul>
        </div>
        </div>

      </nav>
    )

} ;



export default Navbar