import React, { Component } from 'react';

const NavBar = props => {
    //console.log("NavBar - Rendered");
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <span className="navbar-brand mb-0 h1">{props.pageName}</span>
        </nav>
      </div>
    );
  };

export default NavBar;