import React from 'react';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Knowledges from './pages/Knowledges';
import Portfolio from './pages/Portfolio';
import NotFound from './pages/NotFound';
import Cursus from './pages/Cursus';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/competences" element={<Knowledges/>} />
          <Route path="/portfolio" element={<Portfolio/>} />
          <Route path='/cursus' element={<Cursus/>} />
          <Route path='/*' element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
