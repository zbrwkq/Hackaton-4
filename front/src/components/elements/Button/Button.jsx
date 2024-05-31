import * as React from 'react';

import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import '../../../App.css';

export default function Button({colorText,backgroundColorButton,text,visibility,onClick,value}) {
    
    
    return (
        <div>
        {
            text != null ?
                <button onClick={onClick} value={value} className='buttonComponent' style={{backgroundColor:backgroundColorButton, padding:3, paddingRight:20, paddingLeft:20, borderRadius:20, color: colorText, fontSize:20, fontWeight:'bold', boxShadow: "3px 3px 3px #E4E4E6", border:'0.5px solid',visibility:'visible',}}>{text}</button>
            :
            <Box sx={{ display: 'flex' }}>
                <CircularProgress />
            </Box>
        }
        </div>
        
    );
}
  