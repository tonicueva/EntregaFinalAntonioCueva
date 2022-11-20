import React from 'react';
import {Link} from 'react-router-dom' 
import Botones from '../layouts/botones'
const Navbar = () => {
    return (
        <>
          <nav className="miNav navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
  <Link className="navbar-brand vbNav" to="/" >VB</Link>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <Botones/>
    </div>
  </div>
</nav>  
        </>
    );
}

export default Navbar;
