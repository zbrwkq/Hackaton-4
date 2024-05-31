import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, CircularProgress, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import API_URL from '../../config.js';

const TableDataCountryHistoricalMedals = () => {
  const [countryHistoricalMedals, setCountryHistoricalMedals] = useState([]);
  const [filteredMedals, setFilteredMedals] = useState([]);
  const [page, setPage] = useState(1);
  const [perPage] = useState(20); // Number of items per page
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedSeason, setSelectedSeason] = useState('');
  const [seasons, setSeasons] = useState([]);

  useEffect(() => {
    fetchCountryHistoricalMedals();
  }, []);

  useEffect(() => {
    filterMedals();
  }, [selectedSeason, page]);

  const fetchCountryHistoricalMedals = () => {
    setLoading(true);
    axios.get(`${API_URL}/countries`)
      .then(response => {
        const data = response.data;
        setCountryHistoricalMedals(data);
        setFilteredMedals(data);
        setSeasons([...new Set(data.map(medal => medal.Season))]);
        setLoading(false);
      })
      .catch(error => {
        setError('Error fetching data: ' + error.message);
        setLoading(false);
      });
  };

  const handleNextPage = () => {
    if (page * perPage < filteredMedals.length) {
      setPage(prevPage => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(prevPage => prevPage - 1);
    }
  };

  const handleSeasonChange = (event) => {
    setSelectedSeason(event.target.value);
    setPage(1); // Reset to the first page on filter change
  };

  const filterMedals = () => {
    const filtered = selectedSeason ? countryHistoricalMedals.filter(medal => medal.Season === selectedSeason) : countryHistoricalMedals;
    setFilteredMedals(filtered);
  };

  const paginatedData = filteredMedals.slice((page - 1) * perPage, page * perPage);

  return (
    <div>
      <h1>Médaille par pays/compétition</h1>
      {error && <p>{error}</p>}
      <FormControl variant="outlined" fullWidth margin="normal">
        <InputLabel id="season-select-label">Season</InputLabel>
        <Select
          labelId="season-select-label"
          value={selectedSeason}
          onChange={handleSeasonChange}
          label="Season"
        >
          <MenuItem value="">
            <em>All</em>
          </MenuItem>
          {seasons.map((season, index) => (
            <MenuItem key={index} value={season}>{season}</MenuItem>
          ))}
        </Select>
      </FormControl>
      {loading ? (
        <CircularProgress />
      ) : (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><b>Year</b></TableCell>
                <TableCell><b>Season</b></TableCell>
                <TableCell><b>Nation</b></TableCell>
                <TableCell><b>Gold</b></TableCell>
                <TableCell><b>Silver</b></TableCell>
                <TableCell><b>Bronze</b></TableCell>
                <TableCell><b>Medals</b></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedData.map((countryHistoricalMedal, index) => (
                <TableRow key={index}>
                  <TableCell>{countryHistoricalMedal.Year}</TableCell>
                  <TableCell>{countryHistoricalMedal.Season}</TableCell>
                  <TableCell>{countryHistoricalMedal.Nation}</TableCell>
                  <TableCell>{countryHistoricalMedal.Gold}</TableCell>
                  <TableCell>{countryHistoricalMedal.Silver}</TableCell>
                  <TableCell>{countryHistoricalMedal.Bronze}</TableCell>
                  <TableCell>{countryHistoricalMedal.Medals}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      <div>
        <Button onClick={handlePreviousPage} disabled={page === 1}>Previous</Button>
        <Button onClick={handleNextPage} disabled={page * perPage >= filteredMedals.length}>Next</Button>
      </div>
    </div>
  );
};

export default TableDataCountryHistoricalMedals;
