import * as React from 'react';
import Stack from '@mui/material/Stack';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';
import axios from 'axios';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

import CircularProgress from '@mui/material/CircularProgress';

import API_URL from '../../config.js';
import '../../App.css';

export default function GraphPrediction() {
  const [tickPlacement, setTickPlacement] = React.useState('middle');
  const [tickLabelPlacement, setTickLabelPlacement] = React.useState('middle');
  const [apiDataCountryHistoricalMedals, setApiDataCountryHistoricalMedals] = React.useState([]);
  const [selectedCondition, setSelectedCondition] = React.useState('Medals');

  // const chartSetting = {
  //   yAxis: [
  //     {
  //       scaleType: 'band',
  //       label: selectedCondition,
  //     },
  //   ],
  //   series: [{ dataKey: selectedCondition, label: selectedCondition }],
  //   height: 300,
  //   sx: {
  //     [`& .${axisClasses.directionY} .${axisClasses.label}`]: {
  //       transform: 'translateX(-10px)',
  //     },
  //   },
  // };

  const chartSetting = {
    xAxis: [
      {
        label: 'Prédiction',
      },
    ],
    height: 600,
    width:1500,
    
    
  }

  const [predictions] = React.useState([{"country_name": "France","prediction": 29.083396911621094},{"country_name": "USA","prediction": 96.91452026367188},{"country_name": "China","prediction": 89.28961944580078}])
  

  return (
    <div style={{ margin: '50px', width: '90%', backgroundColor: '#D9D9D9', padding: '70px', borderRadius: '10px' }}>
      {predictions.length > 0 ? (
        <>
          <h1><b>Deep learning (réseaux de neurone)</b></h1>
          <p>Prédiction du pourcentage de chance de gagné les Jeux Olympiques</p>
          <div style={{ display: 'flex', justifyContent: 'space-between', }}>
            <BarChart
              // xAxis={[
              //   { dataKey: 'Nation', tickPlacement, tickLabelPlacement, label: 'Nation' },
              // ]}

              dataset={predictions}
              yAxis={[{ scaleType: 'band', dataKey: 'country_name' }]}
              series= {[{ dataKey: 'prediction', label: 'prediction' }]}
              layout="horizontal"
              {...chartSetting}
            />
          </div>
          
        </>
      ) : (
        <Box sx={{ display: 'flex' }}>
          <CircularProgress />
        </Box>
      )}
    </div>
  );
}
