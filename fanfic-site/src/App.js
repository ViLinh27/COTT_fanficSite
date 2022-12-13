
import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="Title">
        <h1>Class of the Titans - The Ghost Queen</h1>
        <h2>Original show by Studio B</h2>
        <h3>Fanfiction by Linh Nguyen</h3>
      </div>

      <div className="Navbar">
          <h4>Home</h4>
          <h4>Characters</h4>
          <h4>Mythical</h4>
          <h4>Locations</h4>
          <h4>Chapters</h4> 
      </div>
      
      <div className="Content">
        <div className="Welcome-square">
          <h4>Welcome to the Ghost Queen website</h4>
          <h5>
            This site is dedicated to a story based in the universe
            of Class of the Titans. Some of the charcters are my
            own. The plot of The Ghost Queen is my own, but 
            many other characters are from Studio B. This is a fan
            fiction after all.

          </h5>

        </div>

        <div className="sec-header">
          <h4>Characters</h4>
        </div>

        <div className="Char-square">
          <div className="character-prev">
            <img src="../assets/images/Pomelia001.jpg" alt="Pomelia Fuentes" className="img-char"/>
            <div class="overlay">
              <div class="overlay-text">
                <h3>Pomelia Fuentes</h3>
              </div>
            </div>
          </div>

          <div className="character-prev">
            <img src="../assets/images/Enrico001.jpg" alt="Enrico Valentino" className="img-char"/>
            <div class="overlay">
              <div class="overlay-text">
                <h3>Enrico Valentino</h3>
              </div>
            </div>
          </div>

          <div className="character-prev">
            <img src="../assets/images/Orfeo001.jpg" alt="Orfeo Valentino" className="img-char"/>
            <div class="overlay">
              <div class="overlay-text">
                <h3>Orfeo Valentino</h3>
              </div>
            </div>
          </div>

          <div className="character-prev">
            <img src="../assets/images/Hailey001.jpg" alt="Hailey MacAllister" className="img-char"/>
            <div class="overlay">
              <div class="overlay-text">
                <h3>Hailey MacAllister</h3>
              </div>
            </div>
          </div>

          <div className="character-prev">
            <img src="../assets/images/Hannah001.jpg" alt="Hannah MacAllister" className="img-char"/>
            <div class="overlay">
              <div class="overlay-text">
                <h3>Hannah MacAllister</h3>
              </div>
            </div>
          </div>

          <div className="character-prev">
            <img src="../assets/images/Akira001.jpg" alt="Akira Yamaguchi" className="img-char"/>
            <div class="overlay">
              <div class="overlay-text">
                <h3>Akira Yamaguchi</h3>
              </div>
            </div>
          </div>

          <div className="character-prev">
            <img src="../assets/images/Aurelie001.jpg" alt="Aurelie Saint-Germain" className="img-char"/>
            <div class="overlay">
              <div class="overlay-text">
                <h3>Aurelie Saint-Germain</h3>
              </div>
            </div>
          </div>

          <div className="character-prev">
            <img src="" alt="Komos" className="img-char"/>
            <div class="overlay">
              <div class="overlay-text">
                <h3>Komos</h3>
              </div>
            </div>
          </div>

          <div className="character-prev">
            <img src="" alt="Erato" className="img-char"/>
            <div class="overlay">
              <div class="overlay-text">
                <h3>Erato</h3>
              </div>
            </div>
          </div>
            
        </div>
        {/* end of char square */}

        <div className="sec-header" id="siteGlance">
          <h4>Site at a Glance</h4>
        </div>
        <div className="Site-at-a-glance">
          <ol>
            <li>
              <h5>Characters</h5>
              <ol className="ol-2">
                <li>
                  <p><a href="">The New Underlings</a></p>
                  <ol className="ol-3">
                    <li><p><a href="">Pomelia Fuentes</a></p></li>
                    <li><p><a href="">Enrico Valentino</a></p></li>
                    <li><p><a href="">Orfeo Valentino</a></p></li>
                    <li><p><a href="">Hailey MacAllister</a></p></li>
                    <li><p><a href="">Hannah MacAllister</a></p></li>
                    <li><p><a href="">Akira Yamaguchi</a></p></li>
                    <li><p><a href="">Aurelie Saint-Germain</a></p></li>
                  </ol>
                </li>
                <li><p><a href="">Komos</a></p></li>
                <li><p><a href="">Erato</a></p></li>
                <li><p><a href="">The Fuentes family</a></p></li>
                <li><p><a href="">The Valentino</a></p></li>
                <li><p><a href="">Professor Yamaguchi</a></p></li>
              </ol>
            </li>
            <li>
              <h5>Mythical</h5>
              <ol>
                <li><p><a href="">Atropos</a></p></li>
                <li><p><a href="">Melinoe</a></p></li>
                <li><p><a href="">Rhea</a></p></li>
              </ol>
            </li>
            <li>
              <h5>Locations</h5>
              <ol>
                <li><p><a href="">The Ariti Dormitories</a></p></li>
                <li><p><a href="">Romulus High</a></p></li>
                <li><p><a href="">Faunus</a></p></li>
              </ol>
            </li>
            <li>
              <h5>Chapters</h5>
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
      </div>

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

    </div>
  );
}

export default App;
