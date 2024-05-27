import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Fact from './pages/Fact';
import Data from './pages/Data';
import Analyse from './pages/Analyse';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fact" element={<Fact />} />
          <Route path="/data" element={<Data />} />
          <Route path="/analyse" element={<Analyse />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
