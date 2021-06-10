import React, { Component } from 'react';
import val from '../../asset/images/val2.gif';
import juan from '../../asset/images/juan.gif';
import al from '../../asset/images/al.gif';

class Footer extends Component {
    render(){
        return(
            <footer id="footer">
                <div class="container-contact">
                    <div class="Devs">
                        <div class="V">
                            <img src={val} alt="loading..." />
                            <div class="info">
                                <h1>Valentina V.</h1>
                                <p>Video Game Developer</p>
                                <p>Character Design</p>
                            </div>
                        </div>
                        <div class="J">
                            <img src={juan} alt="loading..." />
                            <div class="info">
                                <h1>Juan David R.</h1>
                                <p>Video Game Developer</p>
                                <p>Game Scene Design</p>
                            </div>
                        </div>
                        <div class="A">
                            <img src={al} alt="loading..." />
                            <div class="info">
                                <h1>Juan Alzate.</h1>
                                <p>Video Game Developer</p>
                                <p>AI Game programmer</p>
                            </div>
                        </div>
                    </div>
                    <div class="info">
                        
                        <nav>
                            <ul>
                                <li><h1>CONTACT US</h1></li>
                                <li><a href="#">Mail</a></li>
                                <li><a href="#">Phone</a></li>
                                <li><a href="#">Instagram</a></li>
                                <li><a href="#">Youtube</a></li>
                                <li><a href="#">Artstation</a></li>
                            </ul>
                        </nav>

                        <nav>
                            <ul>
                                <li><h1>Special Thanks</h1></li>
                                <li><a href="#">Unity</a></li>
                                <li><a href="#">React</a></li>
                                <li><a href="#">Kelly Marín</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div class="linea">
                    <div class="line"></div>
                    <h1>Copyright © 2021 Nocturnal Games Inc. Todos los derechos reservados.</h1>
                </div>
            </footer>
        );
    }
}

export default Footer;