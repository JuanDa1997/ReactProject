import React, { Component } from 'react';
import logo from '../../asset/images/logo.png';
import menu from '../../asset/images/menu.png';
import exit from '../../asset/images/cancel.png';




class Header extends Component {

    constructor(props) {
        super(props);
        // Crea una referencia para guardar el elemento textInput del DOM
        
        this.handleClick = this.handleClick.bind(this);
        this.state ={
            display: 'block'
        }
    }
   
    handleClick(){
    
        document.getElementById('menu-secundario').style.display = 'block'

    }
    
    render() {
        return(
           
            <header id="Header">
                <nav id="menu-principal">
                    <button id="open-menu" aria-label="abrir menú" onClick={this.handleClick.bind(this)}>
                        <img src={menu} alt="abrir menú" />
                    </button>
                    <ul id="Menu">
                        <li><a href="#Header">Inicio</a></li>
                        <li><a href="#About Us">Nosotros</a></li>
                        <li><a href="#footer">Contactos</a></li>
                        <li><a href="https://github.com/valviveros/San-Hogwarts/tree/juan">Github</a></li>  
                        <li><a href="https://we.tl/t-RWZHbqq2Un">Descargas</a></li>  
                    </ul>
                </nav>
                <nav id="menu-secundario">
                    <ul id = "Menu-Hamburguesa">
                        <button id="close-menu" aria-label="abrir menú" >
                            <img src={exit} alt="cerrar menú" />
                        </button>
                        <li><a href="">Home</a></li>
                        <li><a href="">About Us</a></li>
                        <li><a href="">Contacts</a></li>
                    </ul>
                </nav>
                
                <div id="container-logo">
                    <img src={logo} id="logo-game" alt="logo" />
                </div>

            </header>
        );
    }
}



export default Header;  