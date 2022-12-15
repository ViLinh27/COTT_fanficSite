import '../App.scss';
import React from 'react';

function Footer(){
    return(
        <div className="Footer">
        <div className="see-more-proj">
            <h4>See more of my projects</h4>
            <ul>
              <li><h5><a href="https://github.com/ViLinh27">Github</a></h5></li>
              <li><h5><a href="https://codepen.io/vilinh27">Codepen</a></h5></li>
              <li><h5><a href="https://www.deviantart.com/tibiathedog">Deviantart</a></h5></li>
            </ul>
        </div>
        
        <div className="support-me">
          <h4>Support Me!</h4>
            <ul>
              <li><h5><a href="https://ko-fi.com/linhistibia">Ko-fi</a></h5></li>
              <li><h5><a href="https://www.redbubble.com/people/tibia-the-dog/shop">Redbubble</a></h5></li>
            </ul>
        </div>
      </div>
    );
}

export default Footer;