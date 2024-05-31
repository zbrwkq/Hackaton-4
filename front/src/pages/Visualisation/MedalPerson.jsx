import React, {useState, useEffect} from 'react';
import axios from 'axios';

import TableDataCountryHistoricalMedals from '../../components/table/TableDataCountryHistoricalMedals';

import '../../App.css';

import CircularProgress from '@mui/material/CircularProgress';


export default function MedalPerson() {


  return (
    <div className="centered-container">
      <div className="inner-container">
          <h1 style={{fontWeight:'bold'}}>Visualisation</h1>
          
          <TableDataCountryHistoricalMedals />

        </div>
      
    </div>
  );
}
