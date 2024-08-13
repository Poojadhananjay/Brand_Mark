import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
// src/index.js or src/index.tsx

import 'bootstrap/dist/css/bootstrap.min.css';

// import About from './pages/About';
// import Academics from './pages/Academics';
// import Admissions from './pages/Admissions';
// import Faculty from './pages/Faculty';
// import Students from './pages/Students';
// import Gallery from './pages/Gallery';
// import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
         <Route path="/"  element={<Home />} />
        
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
