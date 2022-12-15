import '../../../App.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router,Link} from 'react-router-dom';

function CharacterSquare(){
    return(
        <>
            <div className="sec-header">
                <h4>Characters</h4>
            </div>

            <div className="Char-square">

                <div className="character-prev">
                    <Link to="/characters/Pomelia">
                        <img src="../assets/images/Pomelia001.jpg" alt="Pomelia Fuentes" className="img-char"/>
                        <div className="overlay">
                        <div className="overlay-text">
                            <h3>Pomelia Fuentes</h3>
                        </div>
                        </div>
                    </Link>
                </div>

                <div className="character-prev">
                    <Link to="/characters/Enrico">
                        <img src="../assets/images/Enrico001.jpg" alt="Enrico Valentino" className="img-char"/>
                        <div className="overlay">
                        <div className="overlay-text">
                            <h3>Enrico Valentino</h3>
                        </div>
                        </div>
                    </Link>
                </div>

                <div className="character-prev">
                    <Link to="/characters/Orfeo">
                        <img src="../assets/images/Orfeo001.jpg" alt="Orfeo Valentino" className="img-char"/>
                        <div className="overlay">
                        <div className="overlay-text">
                            <h3>Orfeo Valentino</h3>
                        </div>
                        </div>
                    </Link>
                </div>

                <div className="character-prev">
                    <Link to="/characters/Hailey">
                        <img src="../assets/images/Hailey001.jpg" alt="Hailey MacAllister" className="img-char"/>
                        <div className="overlay">
                        <div className="overlay-text">
                            <h3>Hailey MacAllister</h3>
                        </div>
                        </div>
                    </Link>
                </div>

                <div className="character-prev">
                    <Link to="/characters/Hannah">
                        <img src="../assets/images/Hannah001.jpg" alt="Hannah MacAllister" className="img-char"/>
                        <div className="overlay">
                        <div className="overlay-text">
                            <h3>Hannah MacAllister</h3>
                        </div>
                        </div>
                        </Link>
                </div>

                <div className="character-prev">
                    <Link to="/characters/Akira">
                        <img src="../assets/images/Akira001.jpg" alt="Akira Yamaguchi" className="img-char"/>
                        <div className="overlay">
                        <div className="overlay-text">
                            <h3>Akira Yamaguchi</h3>
                        </div>
                        </div>
                    </Link>
                </div>

                <div className="character-prev">
                    <Link to="/characters/Aurelie">
                        <img src="../assets/images/Aurelie001.jpg" alt="Aurelie Saint-Germain" className="img-char"/>
                        <div className="overlay">
                        <div className="overlay-text">
                            <h3>Aurelie Saint-Germain</h3>
                        </div>
                        </div>
                    </Link>
                </div>

                <div className="character-prev">
                    <Link to="/characters/Komos">
                        <img src="" alt="Komos" className="img-char"/>
                        <div className="overlay">
                        <div className="overlay-text">
                            <h3>Komos</h3>
                        </div>
                        </div>
                    </Link>
                </div>

                <div className="character-prev">
                    <Link to="/characters/Erato">
                        <img src="" alt="Erato" className="img-char"/>
                        <div className="overlay">
                        <div className="overlay-text">
                            <h3>Erato</h3>
                        </div>
                        </div>
                    </Link>
                </div>
                
            </div>
        </>
    );
}

export default CharacterSquare;