
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

        <div className="sec-header">
          <h4>Site at a Glance</h4>
        </div>
        <div className="Site-at-a-glance">
          <ol>
            <li>
              <h5>Characters</h5>
              <ol className="ol-2">
                <li>
                  <p>The New Underlings</p>
                  <ol className="ol-3">
                    <li><p>Pomelia Fuentes</p></li>
                    <li><p>Enrico Valentino</p></li>
                    <li><p>Orfeo Valentino</p></li>
                  </ol>
                </li>
                <li><p>Komos</p></li>
                <li><p>Erato</p></li>
                <li><p>The Fuentes family</p></li>
                <li><p>The Valentino</p></li>
                <li><p>Professor Yamaguchi</p></li>
              </ol>
            </li>
            <li>
              <h5>Mythical</h5>
              <ol>
                <li><p>Atropos</p></li>
                <li><p>Melinoe</p></li>
                <li><p>Rhea</p></li>
              </ol>
            </li>
            <li>
              <h5>Locations</h5>
              <ol>
                <li><p>The Ariti Dormitories</p></li>
                <li><p>Romulus High</p></li>
                <li><p>Faunus</p></li>
              </ol>
            </li>
            <li>
              <h5>Chapters</h5>
              <ol>
                <li><p>Cronus has new underlings</p></li>
                <li><p>Cronus’s wife comes into play</p></li>
                <li><p>What of the Prophesy?</p></li>
                <li><p>Exchange Students</p></li>
                <li><p>Pomelia Fuentes</p></li>
                <li><p>The New Restaurant</p></li>
                <li><p>Herry’s headspace</p></li>
                <li><p>The Artefacts</p></li>
                <li><p>Trouble in Paradise for the chaos couple</p></li>
                <li><p>Chemistry</p></li>
                <li><p>The Full Moon</p></li>
                <li><p>Europe’s network of magic users</p></li>
              </ol>
            </li>
          </ol>
        </div>
      </div>

      <div className="Footer">
        <div className="see-more-proj">
            <h4>See more of my projects</h4>
            <ul>
              <li><h5>Github</h5></li>
              <li><h5>Codepen</h5></li>
              <li><h5>Deviantart</h5></li>
            </ul>
        </div>
        
        <div className="support-me">
          <h4>Support Me!</h4>
            <ul>
              <li><h5>Ko-fi</h5></li>
              <li><h5>Redbubble</h5></li>
            </ul>
        </div>
      </div>

    </div>
  );
}

export default App;
