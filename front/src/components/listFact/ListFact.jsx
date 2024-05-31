import * as React from 'react';

import '../../App.css';
import './ListFact.css';

export default function ListFact({GDP_per_capita_2020_Dollars_Int_Dollars_Nominal,GDP_per_capita_2020_Dollars_Int_Dollars_Rank3,GDP_per_capita_2020_Dollars_Int_Dollars_PPP,GDP_per_capita_2020_Dollars_Int_Dollars_Rank4,GDP_Growth_2020,GDP_Growth_Rank5}) {
    

    return (
        
        <div className='ListFact'>
            <div className='paragraph' style={{alignItems:'center'}}>

                <p>PIB par habitant en dollars (int. dollars) nominal : </p><p><b>{GDP_per_capita_2020_Dollars_Int_Dollars_Nominal}</b></p>
                <p>Rang du PIB par habitant en dollars (int. dollars) : </p><p><b>{GDP_per_capita_2020_Dollars_Int_Dollars_Rank3}</b></p>
                <p>PIB par habitant en dollars (int. dollars) PPP : </p><p><b>{GDP_per_capita_2020_Dollars_Int_Dollars_PPP}</b></p>
                <p>Rang du PIB par habitant en dollars (int. dollars) : </p><p><b>{GDP_per_capita_2020_Dollars_Int_Dollars_Rank4}</b></p>
                <p>Croissance du PIB en 2020 : </p><p><b>{GDP_Growth_2020}</b></p>


            </div>
            
        </div>
    );
  }
  