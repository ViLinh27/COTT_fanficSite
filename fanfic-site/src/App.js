
import './App.scss';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Layout from './components/Layout.js';

import HomePage from './pages/Homepage/HomePage.js';
import Chapters from './pages/Chapterspage/Chapterspage.js';
import Characters from './pages/Characterspage/Characterspage.js';
import Locations from './pages/Locationspage/Locationspage.js';
import Mythical from './pages/Mythicalpage/Mythicalpage.js';

import Pomelia from './pages/Characterspage/components/characters/Pomelia.js';
import Enrico from './pages/Characterspage/components/characters/Enrico.js';
import Orfeo from './pages/Characterspage/components/characters/Orfeo.js';
import Hailey from './pages/Characterspage/components/characters/Hailey.js';
import Hannah from './pages/Characterspage/components/characters/Hannah.js';
import Akira from './pages/Characterspage/components/characters/Akira.js';
import Aurelie from './pages/Characterspage/components/characters/Aurelie.js';
import Komos from './pages/Characterspage/components/characters/Komos.js';
import Erato from './pages/Characterspage/components/characters/Erato.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout/>}>
              {/*navbar */}
              <Route index element={<HomePage/>}/>
              <Route path="pages/Characters" element={<Characters/>}/>
              <Route path="pages/Mythical" element={<Mythical/>}/>
              <Route path="pages/Locations" element={<Locations/>}/>
              <Route path="pages/Chapters" element={<Chapters/>}/>

              {/*characters */}
              <Route path="characters/Pomelia" element={<Pomelia/>}/>
              <Route path="characters/Enrico" element={<Enrico/>}/>
              <Route path="characters/Orfeo" element={<Orfeo/>}/>
              <Route path="characters/Hailey" element={<Hailey/>}/>
              <Route path="characters/Hannah" element={<Hannah/>}/>
              <Route path="characters/Akira" element={<Akira/>}/>
              <Route path="characters/Aurelie" element={<Aurelie/>}/>
              <Route path="characters/Komos" element={<Komos/>}/>
              <Route path="characters/Erato" element={<Erato/>}/>
            
            </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
