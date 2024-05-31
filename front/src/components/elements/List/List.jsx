import * as React from 'react';

import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import '../../../App.css';

export default function Button({listValue,label}) {

    const [value, setValue] = useState(listValue[1]);
    
    return (

    <Box sx={{ minWidth: 140 }}>
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Année</InputLabel>
            <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={value}
            label={label}
            // onChange={handleChange}
            >
                {
                    listValue.map((element,index) => <MenuItem value={element} onChange={(e) => setValue(e.target.value)}><b>{element}</b></MenuItem>)
                }
            
            </Select>
        </FormControl>
    </Box>
    )
                
}