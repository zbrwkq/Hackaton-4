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

export default function GraphCountryHistoricalMedals() {
  const [tickPlacement, setTickPlacement] = React.useState('middle');
  const [tickLabelPlacement, setTickLabelPlacement] = React.useState('middle');
  const [data, setData] = React.useState([]);

  const [conditions, setConditions] = React.useState(["Gold", "Silver", "Bronze", "Medals"]);
  const [years, setYears] = React.useState([]);
  const [nations, setNations] = React.useState([]);
  const [numbersMax] = React.useState([5,10,25,35]);
  const [apiDataCountryHistoricalMedals, setApiDataCountryHistoricalMedals] = React.useState([]);

  const [selectedCondition, setSelectedCondition] = React.useState('Medals');
  const [selectedYear, setSelectedYear] = React.useState('ALL');
  const [selectedNation, setSelectedNation] = React.useState('ALL');
  const [selectedNumberMax, setSelectedNumberMax] = React.useState(5);

  // État pour suivre l'ordre de tri
  const [sortOrder, setSortOrder] = React.useState('asc');

  const chartSetting = {
    yAxis: [
      {
        label: selectedCondition,
      },
    ],
    series: [{ dataKey: selectedCondition, label: selectedCondition }],
    height: 300,
    sx: {
      [`& .${axisClasses.directionY} .${axisClasses.label}`]: {
        transform: 'translateX(-10px)',
      },
    },
  };

  React.useEffect(() => {
    axios.get(`${API_URL + '/countries'}`)
      .then(response => {
        setApiDataCountryHistoricalMedals(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  React.useEffect(() => {
    if (apiDataCountryHistoricalMedals.length > 0) {
      const dataSetCountryHistoricalMedals = apiDataCountryHistoricalMedals.map(item => ({
        id: item.id,
        Year: item.Year,
        Season: item.Season,
        Nation: item.Nation,
        Gold: item.Gold,
        Silver: item.Silver,
        Bronze: item.Bronze,
        Medals: item.Medals
      }));

      // Extract unique years
      const uniqueYears = [...new Set(dataSetCountryHistoricalMedals.map(item => item.Year))].sort((a, b) => b - a);

      // Extract unique nations
      const uniqueNations = [...new Set(dataSetCountryHistoricalMedals.map(item => item.Nation))].sort();

      setData(dataSetCountryHistoricalMedals);
      setYears(uniqueYears);
      setNations(uniqueNations);
    }
  }, [apiDataCountryHistoricalMedals]);

  const handleConditionChange = (event) => {
    setSelectedCondition(event.target.value);
  };

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  const handleNationChange = (event) => {
    setSelectedNation(event.target.value);
  };

  // Fonction pour trier les données par ordre croissant
  const sortedData = data.sort((a, b) => {
    if (a[selectedCondition] < b[selectedCondition]) {
      return sortOrder === 'asc' ? -1 : 1;
    }
    if (a[selectedCondition] > b[selectedCondition]) {
      return sortOrder === 'asc' ? 1 : -1;
    }
    return 0;
  });

  // Fonction pour inverser l'ordre de tri
  const toggleSortOrder = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  // Utilisez cette fonction pour calculer le nombre cumulé des médailles lorsque l'année est définie sur "All"
  const filteredData = sortedData.filter(item => 
    ((selectedYear === 'ALL' && selectedNation !== 'ALL') ? 
      (item.Nation === selectedNation && item.Year !== years[0]) : 
      (selectedYear === 'ALL' || item.Year === selectedYear)) &&
    (selectedNation === 'ALL' || item.Nation === selectedNation)
  );


  const handleNbMaxChange = (value) => {
    setSelectedNumberMax(value);
  }

  const getCumulativeMedals = (data, selectedCondition, selectedNation, selectedYear) => {
    let cumulativeMedals = 0;
    data.forEach(item => {
      if ((selectedNation === 'ALL' || item.Nation === selectedNation) && item.Year < selectedYear) {
        cumulativeMedals += item[selectedCondition];
      }
    });
    return cumulativeMedals;
  };

  const cumulativeMedals = getCumulativeMedals(sortedData, selectedCondition, selectedNation, years[0]);

  const chartData = (selectedYear === 'ALL') ? 
  [{ Nation: 'Cumulative', [selectedCondition]: cumulativeMedals }] : 
  filteredData.slice(0, selectedNumberMax);


  return (
    <div style={{ margin: '50px', width: '80%', backgroundColor: '#D9D9D9', padding: '70px', borderRadius: '10px' }}>
      {data.length > 0 ? (
        <>
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: "200px" }}>
            <h3 style={{ fontSize: 20, fontWeight: 'bold' }}>
              Nombre d’élément
            </h3>
            <h3 style={{ fontSize: 20, fontWeight: 'bold' }}>
              Total
            </h3>
          </div>
          <BarChart
            dataset={chartData}
            xAxis={[
              { scaleType: 'band', dataKey: 'Nation', tickPlacement, tickLabelPlacement, label: 'Nation' },
            ]}
            {...chartSetting}
          />
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: "200px", marginTop: 40 }}>
            {/* Bouton pour inverser l'ordre de tri */}
            
            <Box sx={{ minWidth: 180 }}>
              <FormControl fullWidth>
                <InputLabel id="condition-select-label">Valeurs</InputLabel>
                <Select
                  labelId="condition-select-label"
                  id="condition-select"
                  value={selectedCondition}
                  label="Valeurs"
                  onChange={handleConditionChange}
                >
                  {conditions.map((condition, index) => (
                    <MenuItem key={index} value={condition}><b>{condition}</b></MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>

            <Box sx={{ minWidth: 180 }}>
              <FormControl fullWidth>
                <InputLabel id="nation-select-label">Pays</InputLabel>
                <Select
                  labelId="nation-select-label"
                  id="nation-select"
                  value={selectedNation}
                  label="Pays"
                  onChange={handleNationChange}
                >
                  <MenuItem value={'ALL'}><b>{'ALL'}</b></MenuItem>
                  {nations.map((nation, index) => (
                    <MenuItem key={index} value={nation}><b>{nation}</b></MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ minWidth: 140 }}>
              <FormControl fullWidth>
                <InputLabel id="year-select-label">Année</InputLabel>
                <Select
                  labelId="year-select-label"
                  id="year-select"
                  value={selectedYear}
                  label="Année"
                  onChange={handleYearChange}
                >
                  <MenuItem value={'ALL'}><b>{'ALL'}</b></MenuItem>
                  {years.map((year, index) => (
                    <MenuItem key={index} value={year}><b>{year}</b></MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: "200px", marginTop: 40 }}>
            <Button variant="outlined" onClick={toggleSortOrder}>
              {`Tri ${sortOrder === 'asc' ? 'croissant' : 'décroissant'}`}
            </Button>
            <Box sx={{ minWidth: 140 }}>
              <FormControl fullWidth>
                <InputLabel id="limite-select-label">Limite</InputLabel>
                <Select
                  labelId="limite-select-label"
                  id="limite-select"
                  value={selectedNumberMax}
                  label="Année"
                  onChange={(e) => handleNbMaxChange(e.target.value)}
                >
                  {numbersMax.map((number, index) => (
                    <MenuItem key={index} value={number}><b>{number}</b></MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </div>
        </>
      ) : (
        <Box sx={{ display: 'flex', justifyContent:'center', }}>
          <CircularProgress />
        </Box>
      )}
    </div>
  );
}
