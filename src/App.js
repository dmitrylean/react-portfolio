import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import NavBar from './components/NavBar';

// Pages
import Home from "./pages/Home";
import Works from './pages/Works';
import Service from './pages/Service';
import Contact from './pages/Contact';

import './App.css';

function App() {
  useEffect(() => {
      document.title = 'Dmitry Lean | Home';
  }, []);
  
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/works" element={<Works />} />
        <Route path="/service" element={<Service />} />
         <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;