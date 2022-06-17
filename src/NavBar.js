import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";


const NavBar = (props) => {
     
        return (
            <nav className="navbar navbar-light navbar bg-light">
                <a className='navbar-brand' href='#'>
                    NavBar{" "}<span className='badge badge-pill badge-secondary'>{props.count}</span>
                </a>
            </nav>
        );
    
}
 
export default NavBar;
