import React from 'react';
import './App.css';
import Electronics from './pages/Electronics/Electronics';
import Jewelry from './pages/Jewelry/Jewelry';
import Men from './pages/Men/Men';
import Women from './pages/Women/Women';
import { Route, Routes } from 'react-router';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import Nav from './components/Nav/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <div className='routes' style={{minHeight: '100%'}}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/all-products' element={<Products />} />
          <Route path='/women' element={<Women />} />
          <Route path='/men' element={<Men />} />
          <Route path='/jewelry' element={<Jewelry />} />
          <Route path='/electronics' element={<Electronics />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;