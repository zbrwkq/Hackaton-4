import React from 'react';
import GraphCountryHistoricalMedals from '../../components/Graph/GraphCountryHistoricalMedals.jsx';
import '../../App.css';

export default function MedalCountry() {
  return (
    <div className="centered-container">
      <div className="inner-container">
        <h1 style={{fontWeight:'bold'}}>Visualisation</h1>
        <GraphCountryHistoricalMedals />
      </div>
    </div>
  );
}
