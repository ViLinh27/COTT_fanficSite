import '../../../App.scss';
import React from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';

function SiteAtAGlance(){
    return(
        <>
            <div className="sec-header" id="siteGlance">
          <h4>Site at a Glance</h4>
        </div>
        <div className="Site-at-a-glance">
          <ol>
            <li>
              <h5><a href="">Characters</a></h5>
              <ol className="ol-2">
                <li>
                  <p><Link to="">The New Underlings</Link></p>
                  <ol className="ol-3">
                    <li><p><Link to="/characters/Pomelia">Pomelia Fuentes</Link></p></li>
                    <li><p><Link to="/characters/Enrico">Enrico Valentino</Link></p></li>
                    <li><p><Link to="/characters/Orfeo">Orfeo Valentino</Link></p></li>
                    <li><p><Link to="/characters/Hailey">Hailey MacAllister</Link></p></li>
                    <li><p><Link to="/characters/Hannah">Hannah MacAllister</Link></p></li>
                    <li><p><Link to="/characters/Akira">Akira Yamaguchi</Link></p></li>
                    <li><p><Link to="/characters/Aurelie">Aurelie Saint-Germain</Link></p></li>
                  </ol>
                </li>
                <li><p><Link to="/characters/Komos">Komos</Link></p></li>
                <li><p><Link to="/characters/Erato">Erato</Link></p></li>
                <li><p><Link to="">The Fuentes family</Link></p></li>
                <li><p><Link to="">The Valentino family</Link></p></li>
                <li><p><Link to="">Professor Yamaguchi</Link></p></li>
              </ol>
            </li>
            <li>
              <h5><a href="">Mythical</a></h5>
              <ol>
                <li><p><a href="">Atropos</a></p></li>
                <li><p><a href="">Melinoe</a></p></li>
                <li><p><a href="">Rhea</a></p></li>
              </ol>
            </li>
            <li>
              <h5><a href="">Locations</a></h5>
              <ol>
                <li><p><a href="">The Ariti Dormitories</a></p></li>
                <li><p><a href="">Romulus High</a></p></li>
                <li><p><a href="">Faunus</a></p></li>
              </ol>
            </li>
            <li>
              <h5><a href="">Chapters</a></h5>
              <ol>
                <li><p><a href="">Cronus has new underlings</a></p></li>
                <li><p><a href="">Cronus’s wife comes into play</a></p></li>
                <li><p><a href="">What of the Prophesy?</a></p></li>
                <li><p><a href="">Exchange Students</a></p></li>
                <li><p><a href="">Pomelia Fuentes</a></p></li>
                <li><p><a href="">The New Restaurant</a></p></li>
                <li><p><a href="">Herry’s headspace</a></p></li>
                <li><p><a href="">The Artefacts</a></p></li>
                <li><p><a href="">Trouble in Paradise for the chaos couple</a></p></li>
                <li><p><a href="">Chemistry</a></p></li>
                <li><p><a href="">The Full Moon</a></p></li>
                <li><p><a href="">Europe’s network of magic users</a></p></li>
              </ol>
            </li>
          </ol>
        </div>
        </>
    );
}
export default SiteAtAGlance;