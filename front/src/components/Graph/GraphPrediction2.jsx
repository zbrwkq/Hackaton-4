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

export default function GraphMedals() {
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
        label: 'Gold',
        dataKey: 'Gold' 
      },
    ],
    series: [{ dataKey: 'Gold', label: 'Gold' }],
    height: 600,
    width:1500
  }

  React.useEffect(() => {
    axios.get(`${API_URL + '/countries'}`)
      .then(response => {
        setApiDataCountryHistoricalMedals(response.data);
        console.log('response ', response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  

  return (
    <div style={{ margin: '50px', width: '90%', backgroundColor: '#D9D9D9', padding: '70px', borderRadius: '10px' }}>
      {apiDataCountryHistoricalMedals.length > 0 ? (
        <>
          <div style={{ display: 'flex', justifyContent: 'space-between', }}>
            <BarChart
              // xAxis={[
              //   { dataKey: 'Nation', tickPlacement, tickLabelPlacement, label: 'Nation' },
              // ]}

              dataset={apiDataCountryHistoricalMedals.slice(0, 10)}
              yAxis={[{ scaleType: 'band', dataKey: 'Nation' }]}
              series={[{ dataKey: 'seoul', label: 'Seoul rainfall' }]}
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
