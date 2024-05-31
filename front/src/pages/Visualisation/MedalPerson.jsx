import React, {useState, useEffect} from 'react';
import axios from 'axios';

import TableDataMedal from '../../components/table/TableDataMedal';

import '../../App.css';

import CircularProgress from '@mui/material/CircularProgress';


export default function MedalPerson() {


  return (
    <div className="centered-container">
      <div className="inner-container">
          <h1 style={{fontWeight:'bold'}}>Visualisation</h1>
          
          <TableDataMedal/>

        </div>
      
    </div>
  );
}
