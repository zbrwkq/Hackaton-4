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
          question: "Combien de JO la France à organisé ?",
          answer: `La France a organisé 6 JO : 3 d’hiver et 3 d’été (en comptant celui de 2024)`
        },
        {
          question: "Où se situe les premiers jeux olympiques d'hiver ?",
          answer: "Les JO d’hiver sont nés à Chamonix(France) en 1924"
        },
        {
          question: "Quels sports ne fait plus partie des jeux olympiques ?",
          answer: "Les sports suivants ne font (malheureusement) plus partie des J.O : la natation synchronisée en solo, le tir à la corde, la corde à grimper, la montgolfière, le duel au pistolet, le vélo tandem, la course d’obstacles à la nage et le plongeon à distance. Par chance, le tir au pigeon n’a été mis en place qu’une seule fois pendant les Jeux Olympiques de Paris de 1900 ?"
        },
        {
          question: "Quel est la périodicité des jeux olympiques  ?",
          answer: "De 1924 à 1992, les JO d’hiver et d’été avaient lieu au cours de la même année. Désormais, ils sont organisés selon des cycles distincts avec une alternance de 2 ans"
        },

      ];
  return (
    <div className="centered-container">
      <div className="inner-container">
        <h1 className="text-2xl font-bold">Faq</h1>
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
