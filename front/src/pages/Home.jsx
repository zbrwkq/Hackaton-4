import * as React from 'react';
import GraphMedals from '../components/Graph/GraphMedals.jsx';
import '../App.css';

export default function Home() {
  return (
    <div className="centered-container">
      <div className="inner-container">
        <img src="image/800px-Logo_JO_d'été_-_Paris_2024.svg.png"/>
        <h1 style={{fontFamily:'N27-Regular', marginTop:60}}><b>Liste des compétiteurs</b></h1>
        <GraphMedals />
      </div>
    </div>
  );
}
