import React, {useState, useEffect} from 'react';
import axios from 'axios';

import TableData from '../components/table/TableData';
import Graph from '../components/Graph/GraphMedals.jsx';

import '../App.css';
import API_URL from '../config.js';

import CircularProgress from '@mui/material/CircularProgress';


export default function Visualisation() {


  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '80%' , flexDirection:'column', backgroundColor:'#E4E4E4', marginTop:'1%',marginBottom:'1%', borderRadius:'10px'}}>
      

      
        <div style={{display:'flex', alignItems:'center' , flexDirection:'column',gap:20,width:"80%", paddingTop:30,paddingBottom:30}}>
          <h1>Visualisation</h1>
          {/* <TableData/> */}
          
          <Graph/>
          

        </div>
        
        {/* <Box sx={{ display: 'flex' }}>
          <CircularProgress />
        </Box> */}
      
    </div>
  );
}
