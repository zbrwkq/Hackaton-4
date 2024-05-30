import * as React from 'react';

import Button from './elements/Button/Button';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

import '../App.css';

export default function YearsButton() {
    

    return (
        
        <div style={{margin:'50px', width: '95%', display: 'flex', alignItems:'center', gap:40,justifyContent: 'center',}}>
          {/* faire une boucle map */}
            <IoIosArrowBack size={20}/>
            <Button colorText="#4A484B" backgroundColorButton="#E4E4E6" text="2024"/>
            <Button colorText="#FFFFFF" backgroundColorButton="#4A484B" text="2020"/>
            <Button colorText="#FFFFFF" backgroundColorButton="#0075AD" text="2016"/>
            <Button colorText="#FFFFFF" backgroundColorButton="#CCB294" text="2012"/>
            <Button colorText="#FFFFFF" backgroundColorButton="#CE6279" text="2008"/>
            <IoIosArrowForward size={20}/>
        </div>
    );
  }
  