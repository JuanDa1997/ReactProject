import React, { Component } from 'react';
import logo from '../../asset/images/logo.png';
import menu from '../../asset/images/menu.png';
import exit from '../../asset/images/cancel.png';




class Header extends Component {
    render() {

        return(
           
            <header className="Header">
                <nav className="menu-principal">
                    <button className="open-menu" aria-label="abrir menú">
                        <img src={menu} alt="abrir menú" />
                    </button>
                    <ul className="Menu">
                        <li><a href="">Home</a></li>
                        <li><a href="">About Us</a></li>
                        <li><a href="">Contacts</a></li>
                    </ul>
                </nav>
                <nav className="menu-secundario">
                    <ul className = "Menu-Hamburguesa">
                        <button className="close-menu" aria-label="abrir menú">
                            <img src={exit} alt="cerrar menú" />
                        </button>
                        <li><a href="">Home</a></li>
                        <li><a href="">About Us</a></li>
                        <li><a href="">Contacts</a></li>
                    </ul>
                </nav>
                
                <div class="container-logo">
                    <img src={logo} className="logo-game" alt="logo" />
                </div>

            </header>
        );
    }
}

export default Header;  