import * as React from 'react';
import GraphCountryHistoricalMedals from '../components/Graph/GraphCountryHistoricalMedals.jsx';
import '../App.css';

import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

export default function Home() {
    const faqs = [
        {
          question: "Qu'est-ce que React ?",
          answer: "React est une bibliothèque JavaScript utilisée pour construire des interfaces utilisateur."
        },
        {
          question: "Quels sont les avantages de React ?",
          answer: "React offre une performance élevée, un code réutilisable et une approche déclarative pour la construction d'interfaces utilisateur."
        },
        {
          question: "Comment installer React ?",
          answer: "Vous pouvez installer React en utilisant npm ou yarn. Exécutez la commande 'npm install react' ou 'yarn add react' dans votre terminal."
        }
      ];
  return (
    <div className="centered-container">
      <div className="inner-container">
        <h1 className="text-2xl font-bold">Frequently asked questions</h1>
        <div style={{display:'flex',flexDirection:'column',alignItems:'center', width:'100%', gap:30, marginTop:40}}>
            {
                faqs.map((faq,index) =>{
                    return(
                        <Accordion style={{width:'40%'}}>

                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                            >
                            <p style={{fontWeight:'bold'}}>{faq.question}</p>
                            </AccordionSummary>
                            <AccordionDetails>
                            {faq.answer}
                            </AccordionDetails>
                    
                        </Accordion>
                    )
                })
            }
        </div>
        
      </div>
    </div>
  );
}
