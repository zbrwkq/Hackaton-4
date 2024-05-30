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


import '../../App.css';

export default function Graph({dataKeyY,dataKeyX,labelX,labelY,dataset}) {
    //,url
    const [tickPlacement, setTickPlacement] = React.useState('middle');
    const [tickLabelPlacement, setTickLabelPlacement] = React.useState('middle');
    const [data, setData] = React.useState([]);

    console.log(dataset);
  
    const chartSetting = {
      yAxis: [
        {
          label: labelY,
        },
      ],
      series: [{ dataKey: dataKeyY, label: labelY }],
      height: 300,
      sx: {
        [`& .${axisClasses.directionY} .${axisClasses.label}`]: {
          transform: 'translateX(-10px)',
        },
      },
    };
    
  
    return (
        
        <div style={{margin:'50px', width: '95%', backgroundColor:'#D9D9D9', padding:'70px', borderRadius:'10px'}}>
          
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
                { scaleType: 'band', dataKey: dataKeyX, tickPlacement, tickLabelPlacement, label:labelX },
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
    );
  }
  