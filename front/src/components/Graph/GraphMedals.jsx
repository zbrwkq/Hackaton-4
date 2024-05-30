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

import API_URL from '../../config.js';
import '../../App.css';


const MedalsList = () => {
  const [medals, setMedals] = useState([]);
  const [page, setPage] = useState(1);
  const [perPage] = useState(100);
  const [error, setError] = useState(null);
 
  useEffect(() => {
    fetchMedals(page);
  }, [page]);
 
  const fetchMedals = (page) => {
    axios.get(`http://localhost:5000/medals?page=${page}&per_page=${perPage}`)
      .then(response => {
        setMedals(response.data);
      })
      .catch(error => {
        setError('Error fetching data: ' + error.message);
      });
  };
 
  const handleNextPage = () => {
    setPage(prevPage => prevPage + 1);
  };
 
  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(prevPage => prevPage - 1);
    }
  };
 
  return (
    <div>
      <h1>Medals List</h1>
            {error && <p>{error}</p>}
      <table>
      <thead>
      <tr>
                  {/* Add your column headers here */}
      <th>ID</th>
      <th>Country</th>
      <th>Year</th>
      <th>Gold</th>
      <th>Silver</th>
      <th>Bronze</th>
                  {/* Add other headers as necessary */}
      </tr>
      </thead>
      <tbody>
                {medals.map((medal, index) => (
      <tr key={index}>
                    {/* Add your columns here */}
      <td>{medal.id}</td>
      <td>{medal.country}</td>
      <td>{medal.year}</td>
      <td>{medal.gold}</td>
      <td>{medal.silver}</td>
      <td>{medal.bronze}</td>
                    {/* Add other columns as necessary */}
      </tr>
                ))}
      </tbody>
      </table>
      <div>
      <button onClick={handlePreviousPage} disabled={page === 1}>Previous</button>
      <button onClick={handleNextPage}>Next</button>
      </div>
    </div>
  );
};

export default function GraphMedals() {
    //,url
    const [tickPlacement, setTickPlacement] = React.useState('middle');
    const [tickLabelPlacement, setTickLabelPlacement] = React.useState('middle');
    const [data, setData] = React.useState([]);

    const [apiDataMedals, setApiDataMedals] = React.useState([]);

    console.log(dataset);
  
    const chartSetting = {
      yAxis: [
        {
          label: 'labelY',
        },
      ],
      series: [{ dataKey: dataKeyY, label: 'labelY' }],
      height: 300,
      sx: {
        [`& .${axisClasses.directionY} .${axisClasses.label}`]: {
          transform: 'translateX(-10px)',
        },
      },
    };


    React.useEffect(() => {
      
      axios.get(`${API_URL}`)
        .then(response => {
          setApiDataMedals(response.data);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });


    }, []);
  
    const dataSetMedals = apiDataMedals.map(item => ({
      id:item.id,
      discipline_title:item.discipline_title,
      slug_game:item.slug_game,
      event_title:item.event_title,
      event_gender:item.event_gender,
      medal_type:item.medal_type,
      participant_type:item.participant_type,
      participant_title:item.participant_title,
      athlete_url:item.athlete_url,
      athlete_full_name:item.athlete_full_name,
      country_name:item.country_name,
      country_code:item.country_code,
      country_3_letter_code:item.country_3_letter_code
    }));
  
    
    
  
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
                dataset={dataSetMedals}
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
  