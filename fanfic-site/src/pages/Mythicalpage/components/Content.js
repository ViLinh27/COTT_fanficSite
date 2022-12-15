import '../../../App.scss';
import React from 'react';
import Intro from './IntroSquare';
function Content(){
    return(
        <>
          <div className="Content">
            <Intro/>
            
            <div className="char_main">
              {/* Atropos */}
              <div className="char_main-prev">
                <img src="" alt="Atropos" className="char_main-prev-img"/>
                <p>Atropos</p>
                <div className="overlay">
                  <div className="overlay-text">
                    <p>Atropos</p>
                  </div>
                </div>
              </div>
              {/* Melinoe */}
              <div className="char_main-prev">
                <img src="" alt="Melinoe" className="char_main-prev-img"/>
                <p>Melinoe</p>
                <div className="overlay">
                  <div className="overlay-text">
                    <p>Melinoe</p>
                  </div>
                </div>
              </div>
              {/* Rhea */}
              <div className="char_main-prev">
                <img src="" alt="Rhea" className="char_main-prev-img"/>
                <p>Rhea</p>
                <div className="overlay">
                  <div className="overlay-text">
                    <p>Rhea</p>
                  </div>
                </div>
              </div>
            </div>
           
          </div>
        </>
    );
}
export default Content;