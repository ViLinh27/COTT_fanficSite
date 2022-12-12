
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

        <div className="Char-square">
          <div className="char-header">Characters</div>
          <div className="character-prev">Pomelia Fuentes</div>
          <div className="character-prev">Enrico Valentino</div>
          <div className="character-prev">Orfeo Valentino</div>
          
          <div className="character-prev">Hailey MacAllister</div>
          <div className="character-prev">Hannah MacAllister</div>
          <div className="character-prev">Akira Yamaguchi</div>
          
          <div className="character-prev">Aurelie Saint-Germain</div>
          <div className="character-prev">Komos</div>
          <div className="character-prev">Erato</div>
        </div>

        <div className="Site-at-a-glance">
          
        </div>
      </div>

      <div className="Footer">
        <div className="see-more-proj">
            See more of my projects
            Github
            Codepen
            Deviantart
        </div>
        
        <div className="support-me">
          Support Me!
          Ko-fi
          Redbubble
        </div>
      </div>
      
    </div>
  );
}

export default App;
