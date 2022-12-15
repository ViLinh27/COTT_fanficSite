import '../../../App.scss';
import React from 'react';
import Intro from './IntroSquare.js';

function Content(){
    return(
        <>
          <div className="Content">
            <Intro/>

            <div className="char_main">
              {/* The Ariti Dormitories */}
              <div className="char_main-prev">
                <img src="" alt="Ariti Dorms" className="char_main-prev-img"/>
                <p>The Ariti Dormitories</p>
                <div className="overlay">
                  <div className="overlay-text">
                    <p>The Ariti Dormitories</p>
                  </div>
                </div>
              </div>
              {/* Romulus High */}
              <div className="char_main-prev">
                <img src="" alt="Romulus High" className="char_main-prev-img"/>
                <p>Romulus Highschool</p>
                <div className="overlay">
                  <div className="overlay-text">
                    <p>Romulus Highschool</p>
                  </div>
                </div>
              </div>
              {/* Faunus */}
              <div className="char_main-prev">
                <img src="" alt="Faunus" className="char_main-prev-img"/>
                <p>Faunus</p>
                <div className="overlay">
                  <div className="overlay-text">
                    <p>Faunus</p>
                  </div>
                </div>
              </div>
            </div>
           
          </div>
        </>
    );
}
export default Content;