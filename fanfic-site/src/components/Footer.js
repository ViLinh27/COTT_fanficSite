import '../App.scss';
import React from 'react';

function Footer(){
    return(
        <div className="Footer">
        <div className="see-more-proj">
            <h4>See more of my projects</h4>
            <ul>
              <li><h5><a href="">Github</a></h5></li>
              <li><h5><a href="">Codepen</a></h5></li>
              <li><h5><a href="">Deviantart</a></h5></li>
            </ul>
        </div>
        
        <div className="support-me">
          <h4>Support Me!</h4>
            <ul>
              <li><h5><a href="">Ko-fi</a></h5></li>
              <li><h5><a href="">Redbubble</a></h5></li>
            </ul>
        </div>
      </div>
    );
}

export default Footer;