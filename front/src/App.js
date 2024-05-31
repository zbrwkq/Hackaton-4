import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Fact from './pages/Fact';
import Data from './pages/Data';
import Analyse from './pages/Analyse';
import Visualisation from './pages/Visualisation';
import MedalCountry from './pages/Visualisation/MedalCountry';
import MedalPerson from './pages/Visualisation/MedalPerson';
import Questions from './pages/Questions';
import Test from './pages/Test';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Header/>
        <div className="content">
          <Routes >
            <Route path="/" element={<Home />} style={{display:'flex', justifyContent:'center', }} />
            <Route path="/fact" element={<Fact />} style={{display:'flex', justifyContent:'center', }} />
            <Route path="/visualisation" element={<Visualisation />} style={{display:'flex', justifyContent:'center', }} />
            <Route path="/visualisation/medalCountry" element={<MedalCountry />} style={{display:'flex', justifyContent:'center', }} />
            <Route path="/visualisation/medalPerson" element={<MedalPerson />} style={{display:'flex', justifyContent:'center', }} />
            <Route path="/data" element={<Data />} style={{display:'flex', justifyContent:'center', }} />
            <Route path="/analyse" element={<Analyse />} style={{display:'flex', justifyContent:'center', }} />
            <Route path="/questions" element={<Questions />} style={{display:'flex', justifyContent:'center', }} />
            <Route path="/test" element={<Test />} style={{display:'flex', justifyContent:'center', }} />
          </Routes>
        </div>
        <Footer/>
        
      </div>
    </Router>
  );
};

export default App;