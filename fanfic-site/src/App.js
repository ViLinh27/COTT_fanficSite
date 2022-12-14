
import './App.scss';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Layout from './components/Layout.js';

import HomePage from './pages/Homepage/HomePage.js';
import Chapters from './pages/Chapterspage/Chapterspage.js';
import Characters from './pages/Characterspage/Characterspage.js';
import Locations from './pages/Locationspage/Locationspage.js';
import Mythical from './pages/Mythicalpage/Mythicalpage.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout/>}>
              <Route index element={<HomePage/>}/>
              <Route path="pages/Characters" element={<Characters/>}/>
              <Route path="pages/Mythical" element={<Mythical/>}/>
              <Route path="pages/Locations" element={<Locations/>}/>
              <Route path="pages/Chapters" element={<Chapters/>}/>
            </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
