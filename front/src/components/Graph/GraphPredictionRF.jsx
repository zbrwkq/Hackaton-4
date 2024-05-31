import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';
import CircularProgress from '@mui/material/CircularProgress';

export default function GraphPrediction() {
  const [predictions] = React.useState([
    { "country_name": "France", "gold": 10, "silver": 12, "bronze": 9 },
    { "country_name": "USA", "gold": 35, "silver": 32, "bronze": 30 },
    { "country_name": "China", "gold": 40, "silver": 30, "bronze": 20 }
  ]);

  const chartSetting = {
    xAxis: [
      {
        label: 'Médailles',
      },
    ],
    height: 600,
    width: 1500,
  };

  return (
    <div style={{ margin: '50px', width: '90%', backgroundColor: '#D9D9D9', padding: '70px', borderRadius: '10px' }}>
      {predictions.length > 0 ? (
        <>
          <h1><b>Régression ramdom forest</b></h1>
          <p>Prédiction des médailles de la France, Chine, Etats-Unis</p>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <BarChart
              dataset={predictions}
              yAxis={[{ scaleType: 'band', dataKey: 'country_name' }]}
              series={[
                { dataKey: 'bronze', label: 'bronze' },
                { dataKey: 'silver', label: 'silver' },
                { dataKey: 'gold', label: 'gold' }
              ]}
              layout="horizontal"
              {...chartSetting}
              tooltip
            />
          </div>
        </>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
}
