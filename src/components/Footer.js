import React from 'react'

function Footer() {

    return (<div class="container">
    <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
      <p class="col-md-4 mb-0 text-muted">Created and © 2022 CodePretzel </p>
  
      <a href="/" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
        <svg class="bi me-2" width="40" height="32"><use href="#bootstrap"></use></svg>
      </a>
  
      <ul class="nav col-md-4 justify-content-end">
        <li class="nav-item"><a href="/" class="nav-link px-2 text-muted">Home</a></li>
        <li class="nav-item"><a href="/services" class="nav-link px-2 text-muted">Services</a></li>
        <li class="nav-item"><a href="/contact" class="nav-link px-2 text-muted">Contact</a></li>
      </ul>
    </footer>
  </div>

    
)}
export default Footer