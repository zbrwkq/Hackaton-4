import * as React from 'react';

import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import '../../../App.css';

export default function Button({colorText,backgroundColorButton,text}) {
    
    
    return (
        <div>
        {
            text != null ?
            <button className='buttonComponent' style={{backgroundColor:backgroundColorButton, padding:3, paddingRight:20, paddingLeft:20, borderRadius:20, color: colorText, fontSize:20, fontWeight:'bold', boxShadow: "3px 3px 3px #E4E4E6", border:'0.5px solid' }}>{text}</button>
            :
            <Box sx={{ display: 'flex' }}>
                <CircularProgress />
            </Box>
        }
        </div>
        
    );
}
  