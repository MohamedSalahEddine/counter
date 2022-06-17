import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";
class NavBar extends Component {
    state = {  } 
    render() { 
        return (
            <nav className="navbar navbar-light navbar bg-light">
                <a className='navbar-brand' href='#'>
                    {this.props.count}
                </a>
            </nav>
        );
    }
}
 
export default NavBar;