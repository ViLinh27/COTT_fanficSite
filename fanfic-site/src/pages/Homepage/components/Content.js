import '../../../App.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


import Welcome from './WelcomeSquare.js';
import CharacterSquare from './CharacterSquare.js';
import SiteGlance from './SiteAtAGlance.js';

function Content(){
    return(
        <>
          <div className="Content">
        
            <Welcome/>

            <CharacterSquare/>

            <SiteGlance/>
            
      </div>
        </>
    );
}
export default Content;