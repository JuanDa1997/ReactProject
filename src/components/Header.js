import React, { Component } from 'react';
import logo from '../../asset/images/logo.png';


class Header extends Component {
    render() {

        return(
           
            <div className="Header">
                <img src={logo} className="logo-game" alt="logo" />
                <nav>
                   <a href="">Home</a>
                   <a href="">About Us</a>
                   <a href="">Contacts</a>
                </nav>
            </div>
        );
    }
}

export default Header;  