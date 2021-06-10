import React, { Component } from 'react';
import video from '../../asset/video/vid.gif';
import video2 from '../../asset/video/vid2.gif';
import clasificacion from '../../asset/images/ESRB.png';
import phone from '../../asset/images/ssf.png';
import character from '../../asset/images/personaje2.png';

class Body extends Component {
    render(){
        return(
            <div class="App">
                <div className="algo" id="About Us">
                    <div className="contenido">
                        <div className="inf">
                            <h1>San Hogwarts</h1>
                            <p>San Hogwarts es un RPG de aventura en 2D, en donde una joven se matricula en una prestigiosa escuela de
                                magia para ser la mejor bruja de todos los tiempos, sin embargo; para lograrlo deberá desarrollar las
                                diferentes habilidades que solo serán posibles de obtener si resuelve los diversos misterios que
                                envuelven la escuela, en donde deberá enfrentarse con criaturas místicas y por supuesto a sus compañeros
                                de clase para alcanzar su objetivo.</p>
                            <br />
                            <p>Dentro de los collectibles se encuentra una serie de gemas distribuidas por el mapa, que serán de
                                utilidad para comprar hechizos únicos en la tienda de la escuela, lo anterior será fundamental para el
                                desarrollo de habilidades necesarias en los enfrentamientos con enemigos muy fuertes.</p>
                            <br />
                            <p>
                                El juego concluye una vez se haya resuelto todos los misterios y todos los cursos se hayan completado de
                                manera satisfactoria.
                            </p>
                        </div>
    
                        <div className="imagen">
                            <img src={character} alt="logo-juego-celular" />
                        </div>
    
                    </div>
                    <div className="contenido">
                        <div className="inf">
                            <h1>Historia</h1>
                            <p>
                                La escuela preparatoria San Hogwarts es un lugar donde se forman los mejores estudiantes de artes
                                oscuras de la ciudad, entre ellos se encuentra la joven Neela o Neil en donde el jugador podrá elegir;
                                su aspirante a bruja favorita.
                            </p>
                            <br />
    
                            <p>
                                San Hogwarts cuenta con un mapa repleto de decenas de misterios sin resolver tales como: avistamientos
                                de ovnis, criaturas espeluznantes, hasta desapariciones de estudiantes; nuestra protagonista deberá
                                aventurarse en busca de la verdad; resolviendo todos y cada uno de estos para lograr adquirir destrezas,
                                habilidades y elementos indispensables como poderes y artilugios; para hacer de su estadía en la
                                preparatoria un poco más amena.
                            </p>
                            <br />
    
                            <p>
                                La escuela cuenta con tres cursos fundamentales: Pociones I, Enfrentamientos de magia aplicada y
                                Herbología. En donde deberán ir a los respectivos edificios distribuidos por el mapa para asistir a las
                                clases, que se notificarán al jugador a una hora específica.
                            </p>
    
                        </div>
    
                        <div className="imagen">
                            <img src={video2} alt="loading" />
                        </div>
    
                    </div>
    
                </div>
    
                <div className="slider">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,288L0,160L144,160L144,192L288,192L288,192L432,192L432,128L576,128L576,224L720,224L720,288L864,288L864,192L1008,192L1008,288L1152,288L1152,288L1296,288L1296,192L1440,192L1440,0L1296,0L1296,0L1152,0L1152,0L1008,0L1008,0L864,0L864,0L720,0L720,0L576,0L576,0L432,0L432,0L288,0L288,0L144,0L144,0L0,0L0,0Z"></path></svg>
                    <div className="inf">
                     <h1>¡Contenido apto para todo público!</h1>
                    </div>
                </div>
    
                <div className="gdd">
    
                    <div className="container">
                        <img src={video} alt="gif" />
    
                    </div>
    
                    <div className="imagen_rep">
                        <img src={clasificacion} alt="logo-clasificacion" />
                    </div>
    
                </div>
          
                
                <div id="App-body">
    
                    <div className="title">
    
                    <img src={character} alt="logo-juego-celular" />
    
                    </div>
    
                    <div className="contenedor-img">
                    <img src={phone} alt="logo-juego-celular" />
                    </div>
    
                </div>
            </div>

           
      
        );
    }
}

export default Body;