import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, CircularProgress } from '@mui/material';
import API_URL from '../../config.js';

const TableData = () => {
  const [medals, setMedals] = useState([]);
  const [page, setPage] = useState(1);
  const [perPage] = useState(20); // Nombre d'éléments par page
  const [error, setError] = useState(null);
 
  useEffect(() => {
    fetchMedals(page);
  }, [page]);
 
  const fetchMedals = (page) => {
    axios.get(`${API_URL}/medals?page=${page}&per_page=${perPage}`)
      .then(response => {
        setMedals(response.data);
        console.log(response.data);
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

  console.log();
 
  return (
    <div>
      <h1>Medals List</h1>
      {error && <p>{error}</p>}
      {medals.length>0 ? (

        <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              
              {/* <TableCell>Numéro</TableCell> */}
              <TableCell><b>Nom</b></TableCell>
              <TableCell><b>Pays</b></TableCell>
              <TableCell><b>Discipline</b></TableCell>
              <TableCell><b>Genre de l'évèvement</b></TableCell>
              <TableCell><b>Evènement</b></TableCell>
              <TableCell><b>Médaille obtenue</b></TableCell>
              {/* <TableCell><b>participant_title</b></TableCell> */}
              <TableCell><b>Individuel/Equipe</b></TableCell>
              <TableCell><b>Jeux olympiques</b></TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {medals.map((medal, index) => (
              <TableRow key={index}>
                {/* <TableCell>{medal.id}</TableCell> */}
                <TableCell><a href={medal.athlete_url}>{medal.athlete_full_name}</a></TableCell>
                <TableCell>{medal.country_name}</TableCell>
                <TableCell>{medal.discipline_title}</TableCell>
                <TableCell>{medal.event_gender}</TableCell>
                <TableCell>{medal.event_title}</TableCell>
                <TableCell>{medal.medal_type}</TableCell>
                {/* <TableCell>{medal.participant_title}</TableCell> */}
                <TableCell>{medal.participant_type}</TableCell>
                <TableCell>{medal.slug_game}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        </TableContainer>
        
      ) : (
        <CircularProgress />
      )}
      <div>
        <Button onClick={handlePreviousPage} disabled={page === 1}>Previous</Button>
        <Button onClick={handleNextPage}>Next</Button>
      </div>
    </div>
  );
};
 
export default TableData;
