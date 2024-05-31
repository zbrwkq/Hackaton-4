import React, {useState} from 'react';
import YearsButton from '../components/YearsButton';
import ListFact from '../components/listFact/ListFact';

const Fact = () => {
   
   const [ pays , setPays  ] = useState('France'); 

   return (
      <div className="centered-container" style={{display: 'flex', flexDirection:'column' , justifyContent: 'start', alignItems:'center'}}>
      
         <YearsButton/>
         <div className="inner-container" >
         {/* <div style={{ display: 'flex', width: '80%' , flexDirection:'column', backgroundColor:'#E4E4E4', marginTop:'1%',marginBottom:'1%', borderRadius:'10px'}}> */}
            <h1 style={{color: '#4A484B', fontSize:35, fontWeight: 'bold', alignSelf:'center'}}>{pays}</h1>

            {/* liste des facts */}
            {/* <div style={{backgroundColor:'#D9D9D9'}}>
               
               
            </div> */}
            <ListFact 
               Country_Economy	= {"Country_Economy"}
               GDP_per_capita_2020_Dollars_Int_Dollars_Nominal	= {"GDP_per_capita_2020_Dollars_Int_Dollars_Nominal"}
               GDP_per_capita_2020_Dollars_Int_Dollars_Rank3	= {"GDP_per_capita_2020_Dollars_Int_Dollars_Rank3"}
               GDP_per_capita_2020_Dollars_Int_Dollars_PPP	= {"GDP_per_capita_2020_Dollars_Int_Dollars_PPP"}
               GDP_per_capita_2020_Dollars_Int_Dollars_Rank4	= {"GDP_per_capita_2020_Dollars_Int_Dollars_Rank4"}
               GDP_Growth_2020	= {"GDP_Growth_2020"}
               GDP_Growth_Rank5 = {"GDP_Growth_Rank5"}
            />


         </div>
      </div>
   )
   }

export default Fact