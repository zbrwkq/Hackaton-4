import React, { useState } from 'react';
import YearsButton from '../components/YearsButton';
import ListFact from '../components/listFact/ListFact';
import gdpData from './gdp_data.json';  // Renommé ici

const Fact = () => {

   const [selectedIdCountry,setSelectedIdCountry] = useState(1);

   const countries = gdpData.map((data, index) => ({ id: index, name: data.Country_Economy }));

   return (
      <div className="centered-container" style={{display: 'flex', flexDirection:'column' , justifyContent: 'start', alignItems:'center'}}>
      
         <YearsButton 
            setSelectedIdCountry = {setSelectedIdCountry}
            countries = {countries}
         />
         <div className="inner-container" >
         {/* <div style={{ display: 'flex', width: '80%' , flexDirection:'column', backgroundColor:'#E4E4E4', marginTop:'1%',marginBottom:'1%', borderRadius:'10px'}}> */}
            <h1 style={{color: '#4A484B', fontSize:35, fontWeight: 'bold', alignSelf:'center'}}>{gdpData[selectedIdCountry].Country_Economy}</h1>

            <ListFact
               Country_Economy	= {gdpData[selectedIdCountry].Country_Economy}
               GDP_per_capita_2020_Dollars_Int_Dollars_Nominal	= {gdpData[selectedIdCountry].GDP_per_capita_2020_Dollars_Int_Dollars_Nominal}
               GDP_per_capita_2020_Dollars_Int_Dollars_Rank3	= {gdpData[selectedIdCountry].GDP_per_capita_2020_Dollars_Int_Dollars_Rank3}
               GDP_per_capita_2020_Dollars_Int_Dollars_PPP	= {gdpData[selectedIdCountry].GDP_per_capita_2020_Dollars_Int_Dollars_PPP}
               GDP_per_capita_2020_Dollars_Int_Dollars_Rank4	= {gdpData[selectedIdCountry].GDP_per_capita_2020_Dollars_Int_Dollars_Rank4}
               GDP_Growth_2020	= {gdpData[selectedIdCountry].GDP_Growth_2020}
               GDP_Growth_Rank5 = {gdpData[selectedIdCountry].GDP_Growth_Rank5}
            />
            


         </div>
      </div>
   )
}

export default Fact

