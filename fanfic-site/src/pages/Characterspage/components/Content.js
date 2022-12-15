import '../../../App.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router,Link} from 'react-router-dom';

import Intro from './IntroSquare.js';
function Content(){
    return(
        <>
          <div className="Content">
            <Intro/>

            {/**the new underlings */}
            <div class="sec-header">
              <h5>The New Underlings</h5>
            </div>

            <div className="char_main">
              {/*Pomelia */}
              <div className="char_main-prev">
                <Link to="/characters/Pomelia">
                  <img src="../../../assets/images/Pomelia001.jpg" alt="Pomelia" className="char_main-prev-img"/>
                  <p>Pomelia Fuentes</p>
                  <div className="overlay">
                    <div className="overlay-text">
                      <p>Pomelia Fuentes</p>
                    </div>
                  </div>
                </Link>
              </div>
              {/*Enrico */}
              <div className="char_main-prev">
                <Link to="/characters/Enrico">
                  <img src="../../../assets/images/Enrico001.jpg" alt="Enrico" className="char_main-prev-img"/>
                  <p>Enrico Valentino</p>
                  <div className="overlay">
                    <div className="overlay-text">
                      <p>Enrico Valentino</p>
                    </div>
                  </div>
                </Link>
              </div>
              {/*Orfeo */}
              <div className="char_main-prev">
                <Link to="/characters/Orfeo">
                  <img src="../../../assets/images/Orfeo001.jpg" alt="Orfeo" className="char_main-prev-img"/>
                  <p>Orfeo Valentino</p>
                  <div className="overlay">
                    <div className="overlay-text">
                      <p>Orfeo Valentino</p>
                    </div>
                  </div>
                </Link>
              </div>
              {/*Hailey */}
              <div className="char_main-prev">
                <Link to="/characters/Hailey">
                  <img src="../../../assets/images/Hailey001.jpg" alt="Hailey" className="char_main-prev-img"/>
                  <p>Hailey MacAllister</p>
                  <div className="overlay">
                    <div className="overlay-text">
                      <p>Hailey MacAllister</p>
                    </div>
                  </div>
                </Link>
              </div>
              {/*Hannah */}
              <div className="char_main-prev">
                <Link to="/characters/Hannah">
                  <img src="../../../assets/images/Hannah001.jpg" alt="Hannah" className="char_main-prev-img"/>
                  <p>Hannah MacAllister</p>
                  <div className="overlay">
                    <div className="overlay-text">
                      <p>Hannah MacAllister</p>
                    </div>
                  </div>
                </Link>
              </div>
              {/*Akira */}
              <div className="char_main-prev">
                <Link to="/characters/Akira">
                  <img src="../../../assets/images/Akira001.jpg" alt="Akira" className="char_main-prev-img"/>
                  <p>Akira Yamaguchi</p>
                  <div className="overlay">
                    <div className="overlay-text">
                      <p>Akira Yamaguchi</p>
                    </div>
                </div>
                </Link>
              </div>
              {/*aurelie */}
              <div className="char_main-prev">
                <Link to="/characters/Aurelie">
                  <img src="../../../assets/images/Aurelie001.jpg" alt="Aurelie" className="char_main-prev-img"/>
                  <p>Aurelie St-Germain</p>
                  <div className="overlay">
                    <div className="overlay-text">
                      <p>Aurelie St-Germain</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            <div class="sec-header">
              <h5>Others</h5>
            </div>
            
            <div className="char_main">
              {/**komos */}
              <div className="char_main-prev">
                <Link to="/characters/Komos">
                  <img src="" alt="Komos" className="char_main-prev-img"/>
                  <p>Komos</p>
                  <div className="overlay">
                    <div className="overlay-text">
                      <p>Komos</p>
                    </div>
                  </div>
                </Link>
              </div>
              {/**erato */}
              <div className="char_main-prev">
                <Link to="/characters/Erato">
                  <img src="" alt="Erato" className="char_main-prev-img"/>
                  <p>Erato</p>
                  <div className="overlay">
                    <div className="overlay-text">
                      <p>Erato</p>
                    </div>
                  </div>
                </Link>
              </div>
              {/**the fuentes */}
              <div className="char_main-prev">
                <img src="" alt="The Fuentes" className="char_main-prev-img"/>
                <p>The Fuentes Family</p>
                <div className="overlay">
                  <div className="overlay-text">
                    <p>The Fuentes Family</p>
                  </div>
                </div>
              </div>
              {/**the valentino */}
              <div className="char_main-prev">
                <img src="" alt="The Valentino" className="char_main-prev-img"/>
                <p>The Valentino Family</p>
                <div className="overlay">
                  <div className="overlay-text">
                    <p>The Valentino Family</p>
                  </div>
                </div>
              </div>
              {/**prof yamaguchi */}
              <div className="char_main-prev">
                <img src="" alt="Prof Yamaguchi" className="char_main-prev-img"/>
                <p>Professor Yamaguchi</p>
                <div className="overlay">
                  <div className="overlay-text">
                    <p>Professor Yamaguchi</p>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </>
    );
}
export default Content;