import * as React from 'react';
import GraphPredictionDL from '../components/Graph/GraphPredictionDL.jsx';
import GraphPredictionRF from '../components/Graph/GraphPredictionRF.jsx';
import '../App.css';

export default function Home() {
  return (
    <div className="centered-container">
      <div className="inner-container">
        <h1 style={{fontFamily:'N27-Regular', marginTop:60}}><b>Predictions</b></h1>
        <GraphPredictionDL />
        <GraphPredictionRF />
      </div>
    </div>
  );
}
