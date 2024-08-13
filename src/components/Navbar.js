import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (






   <nav class="navbar navbar-expand-lg  mynavbg " style={{backgroundColor:'#fcd469'}}>
  <div class="container-fluid" style={{marginTop:'5em'}}>
    <a class="navbar-brand logotxt" href="#"><span>BRAND</span>MARK</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Tools</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#">Support</a>
        </li>

        <li class="nav-item">
          <a class="nav-link " id="inlog" aria-disabled="true">Login</a>
        </li>

        
      </ul>
      
    </div>
  </div>
</nav>
  
  );
};

export default Navbar;
