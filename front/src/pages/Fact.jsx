import React, {useState} from 'react';
import YearsButton from '../components/YearsButton';
import ListFact from '../components/listFact/ListFact';

const Fact = () => {
   
   const [ nomCompetition , setNomCompetition  ] = useState('Tokyo - 2020');

   return (
      <div style={{width:'100%', display: 'flex', flexDirection: 'column', alignItems: 'center',}}>
         <YearsButton/>
         <div style={{ display: 'flex', width: '80%' , flexDirection:'column', backgroundColor:'#E4E4E4', marginTop:'1%',marginBottom:'1%', borderRadius:'10px'}}>
            <h1 style={{color: '#4A484B', fontSize:35, fontWeight: 'bold', margin:30}}>{nomCompetition}</h1>

            {/* liste des facts */}
            {/* <div style={{backgroundColor:'#D9D9D9'}}>
               
               
            </div> */}
            <ListFact/>


         </div>
      </div>
   )
   }

export default Fact