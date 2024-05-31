import React, { useState } from 'react';
import axios from 'axios';

const MedalPredictor = () => {
  const [predictions, setPredictions] = useState(null);
  const [error, setError] = useState(null);

  const handlePredict = () => {
    const data = {
      game_year: [2024],
      game_location: ['France'],
      country_name: ['France']
    };

    axios.post('http://localhost:5000/predict_medals', data)
      .then(response => {
        setPredictions(response.data.predictions);
      })
      .catch(error => {
        setError('Error predicting medals: ' + error.message);
      });
  };

  return (
    <div>
      <h1>Medal Predictor</h1>
      <button onClick={handlePredict}>Predict Medals</button>
      {error && <p>{error}</p>}
      {predictions && (
        <div>
          <h2>Predicted Medals</h2>
          <p>{`Bronze: ${predictions[0]}, Gold: ${predictions[1]}, Silver: ${predictions[2]}`}</p>
        </div>
      )}
    </div>
  );
};

export default MedalPredictor;