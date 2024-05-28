import * as React from 'react';
import Stack from '@mui/material/Stack';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


import '../App.css';

function TickParamsSelector({
  tickPlacement,
  tickLabelPlacement,
  setTickPlacement,
  setTickLabelPlacement,
}) {
  return (
    <Stack direction="column" justifyContent="space-between" sx={{ width: '100%' }}>
      <FormControl>
        <FormLabel id="tick-placement-radio-buttons-group-label">
          tickPlacement
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="tick-placement-radio-buttons-group-label"
          name="tick-placement"
          value={tickPlacement}
          onChange={(event) => setTickPlacement(event.target.value)}
        >
          <FormControlLabel value="start" control={<Radio />} label="start" />
          <FormControlLabel value="end" control={<Radio />} label="end" />
          <FormControlLabel value="middle" control={<Radio />} label="middle" />
          <FormControlLabel
            value="extremities"
            control={<Radio />}
            label="extremities"
          />
        </RadioGroup>
      </FormControl>
      <FormControl>
        <FormLabel id="label-placement-radio-buttons-group-label">
          tickLabelPlacement
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="label-placement-radio-buttons-group-label"
          name="label-placement"
          value={tickLabelPlacement}
          onChange={(event) => setTickLabelPlacement(event.target.value)}
        >
          <FormControlLabel value="tick" control={<Radio />} label="tick" />
          <FormControlLabel value="middle" control={<Radio />} label="middle" />
        </RadioGroup>
      </FormControl>
    </Stack>
  );
}


const dataset = [
  {
    london: 59,
    paris: 57,
    newYork: 86,
    seoul: 21,
    month: 'Jan',
  },
  {
    london: 50,
    paris: 52,
    newYork: 78,
    seoul: 28,
    month: 'Fev',
  },
  {
    london: 47,
    paris: 53,
    newYork: 106,
    seoul: 41,
    month: 'Mar',
  },
  {
    london: 54,
    paris: 56,
    newYork: 92,
    seoul: 73,
    month: 'Apr',
  },
  {
    london: 57,
    paris: 69,
    newYork: 92,
    seoul: 99,
    month: 'May',
  },
  {
    london: 60,
    paris: 63,
    newYork: 103,
    seoul: 144,
    month: 'June',
  },
  {
    london: 59,
    paris: 60,
    newYork: 105,
    seoul: 319,
    month: 'July',
  },
  {
    london: 65,
    paris: 60,
    newYork: 106,
    seoul: 249,
    month: 'Aug',
  },
  {
    london: 51,
    paris: 51,
    newYork: 95,
    seoul: 131,
    month: 'Sept',
  },
  {
    london: 60,
    paris: 65,
    newYork: 97,
    seoul: 55,
    month: 'Oct',
  },
  {
    london: 67,
    paris: 64,
    newYork: 76,
    seoul: 48,
    month: 'Nov',
  },
  {
    london: 61,
    paris: 70,
    newYork: 103,
    seoul: 25,
    month: 'Dec',
  },
];

const valueFormatter = (value) => `${value}mm`;

const chartSetting = {
  yAxis: [
    {
      label: 'rainfall (mm)',
    },
  ],
  series: [{ dataKey: 'seoul', label: 'Seoul rainfall', valueFormatter }],
  height: 300,
  sx: {
    [`& .${axisClasses.directionY} .${axisClasses.label}`]: {
      transform: 'translateX(-10px)',
    },
  },
};

export default function Home() {
  const [tickPlacement, setTickPlacement] = React.useState('middle');
  const [tickLabelPlacement, setTickLabelPlacement] = React.useState('middle');

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '80%' , flexDirection:'column', backgroundColor:'#E4E4E4', marginTop:'1%',marginBottom:'1%', borderRadius:'10px'}}>
      <div style={{margin:'50px', width: '95%', backgroundColor:'#D9D9D9', padding:'70px', borderRadius:'10px'}}>
        
        {/* <TickParamsSelector
          tickPlacement={tickPlacement}
          tickLabelPlacement={tickLabelPlacement}
          setTickPlacement={setTickPlacement}
          setTickLabelPlacement={setTickLabelPlacement}
        /> */}
        <div style={{display:'flex', justifyContent:'space-between', gap: "200px"}}>
          <h3 style={{fontSize:20, fontWeight:'bold'}}>
            Nombre d’élément
          </h3>
          <h3 style={{fontSize:20, fontWeight:'bold'}}>
            Total
          </h3>
        </div>
        <BarChart
          dataset={dataset}
          xAxis={[
            { scaleType: 'band', dataKey: 'month', tickPlacement, tickLabelPlacement },
          ]}
          {...chartSetting}
        />
        <div style={{display:'flex', justifyContent:'flex-end', gap: "200px", marginTop: 40}}>
          <Box sx={{ minWidth: 180 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Valeurs</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={'Médailles'}
                label="Age"
                // onChange={handleChange}
              >
                <MenuItem value={'Médailles'}><b>Médailles</b></MenuItem>
                <MenuItem value={'Points'}><b>Points</b></MenuItem>
                <MenuItem value={"Médailles d'or"}><b>Médailles d'or</b></MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Box sx={{ minWidth: 180 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Pays</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={'France'}
                label="Age"
                // onChange={handleChange}
              >
                <MenuItem value={'France'}><b>France</b></MenuItem>
                <MenuItem value={'Etats unis'}><b>Etats unis</b></MenuItem>
                <MenuItem value={'Argentine'}><b>Argentine</b></MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ minWidth: 140 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Année</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={'2024'}
                label="Age"
                // onChange={handleChange}
              >
                <MenuItem value={'2024'}><b>2024</b></MenuItem>
                <MenuItem value={'2020'}><b>2020</b></MenuItem>
                <MenuItem value={'2016'}><b>2016</b></MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
      </div>
    </div>
  );
}