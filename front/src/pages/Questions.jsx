import * as React from 'react';
import GraphCountryHistoricalMedals from '../components/Graph/GraphCountryHistoricalMedals.jsx';
import '../App.css';

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
        <div style={{display:'flex', justifyContent:'center',flexDirection:'column',gap:70, width:'100%',alignItems:'center',marginTop:40}}>
        {faqs.map((faq, index) => (
            <div key={index} style={{display: 'flex', justifyContent:'space-between', flexDirection:'row', backgroundColor:'#D9D9D9', width:'75%',padding:100, borderRadius:10}}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
            </div>
        ))}
        </div>
        
      </div>
    </div>
  );
}
