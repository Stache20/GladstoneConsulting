import React from 'react'

function Footer() {


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
    <div class="container">
    <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
      <p class="col-md-4 mb-0 text-muted">Created and © 2022 CodePretzel </p>
  
      <a href="/" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
        <svg class="bi me-2" width="40" height="32"><use href="#bootstrap"></use></svg>
      </a>
  
      <ul class="hideMobile nav col-md-4 justify-content-end">
        <li class="nav-item"><a href="/Home" onClick={smoothScrollHome} class="nav-link px-2 text-muted">Home</a></li>
        <li class="nav-item"><a href="/Service" onClick={smoothScrollServices} class="nav-link px-2 text-muted">Services</a></li>
        <li class="nav-item"><a href="/Contact" onClick={smoothScrollContact} class="nav-link px-2 text-muted">Contact</a></li>
      </ul>
    </footer>
  </div>

    
)}
export default Footer