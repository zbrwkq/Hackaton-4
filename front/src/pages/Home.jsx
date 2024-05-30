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

import Graph from '../components/Graph/GraphMedals.jsx';

import '../App.css';
import API_URL from '../config.js';

import CircularProgress from '@mui/material/CircularProgress';


export default function Home() {
  const [tickPlacement, setTickPlacement] = React.useState('middle');
  const [tickLabelPlacement, setTickLabelPlacement] = React.useState('middle');
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    axios.get(`${API_URL}`)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const dataset = data.map(item => ({
    name: item.athlete_full_name,
    medals: item.athlete_medals,
    birthYear: item.athlete_year_birth,
    firstGame: item.first_game,
    participations: item.games_participations,
    link: item.athlete_url,
  }));

  console.log(dataset);


  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '80%' , flexDirection:'column', backgroundColor:'#E4E4E4', marginTop:'1%',marginBottom:'1%', borderRadius:'10px'}}>
      

      { 
        dataset ?
        <div>
          <Graph dataKeyY={'participations'} labelY={'Games Participations'} dataKeyX={'name'} labelX={'Participant'} dataset={dataset} />

          <Graph dataKeyY={'participations'} labelY={'Games Participations'} dataKeyX={'name'} labelX={'Participant'} dataset={dataset} />
          
          <Graph dataKeyY={'participations'} labelY={'Games Participations'} dataKeyX={'name'} labelX={'Participant'} dataset={dataset} />
        </div>
        :
        <Box sx={{ display: 'flex' }}>
          <CircularProgress />
        </Box>
      }
    </div>
  );
}
