import * as React from 'react';
import GraphCountryHistoricalMedals from '../components/Graph/GraphCountryHistoricalMedals.jsx';
import '../App.css';

export default function Home() {
  return (
    <div className="centered-container">
      <div className="inner-container">
        <GraphCountryHistoricalMedals />
      </div>
    </div>
  );
}
