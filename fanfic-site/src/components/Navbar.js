import '../App.scss';
import React from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';

function Navbar(){{/**need to fiture out router */}
    return(
      <div className="Navbar">
          <Link to="/">
            <h4>Home</h4>
          </Link>

          <Link to="/pages/Characters">
            <h4>Characters</h4>
          </Link>

          <Link to="/pages/Mythical">
            <h4>Mythical</h4>
          </Link>

          <Link to="/pages/Locations">
            <h4>Locations</h4>
          </Link>

          <Link to="/pages/Chapters">
            <h4>Chapters</h4>
          </Link>
        </div>
    );
}
export default Navbar;