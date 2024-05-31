import * as React from 'react';

import '../../App.css';
import './ListFact.css';

export default function ListFact({pays,Country_Economy,GDP_per_capita_2020_Dollars_Int_Dollars_Nominal,GDP_per_capita_2020_Dollars_Int_Dollars_Rank3,GDP_per_capita_2020_Dollars_Int_Dollars_PPP,GDP_per_capita_2020_Dollars_Int_Dollars_Rank4,GDP_Growth_2020,GDP_Growth_Rank5}) {
    

    return (
        
        <div className='ListFact'>
            <div className='paragraph' style={{alignItems:'center'}}>

                <p>{Country_Economy}:</p>
                <p>{GDP_per_capita_2020_Dollars_Int_Dollars_Nominal}:</p>
                <p>{GDP_per_capita_2020_Dollars_Int_Dollars_Rank3}:</p>
                <p>{GDP_per_capita_2020_Dollars_Int_Dollars_PPP}:</p>
                <p>{GDP_per_capita_2020_Dollars_Int_Dollars_Rank4}:</p>
                <p>{GDP_Growth_2020}:</p>
                <p>{GDP_Growth_Rank5}:</p>
            </div>
            
        </div>
    );
  }
  