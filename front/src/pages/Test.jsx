import React from 'react';

// Définir les couleurs
const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#33FFF5'];

const App = () => {
  // Vos données JSON
  const data = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
    { id: 4, name: 'Item 4' },
    { id: 5, name: 'Item 5' },
    { id: 6, name: 'Item 6' },
    { id: 7, name: 'Item 7' },
    { id: 8, name: 'Item 8' },
    { id: 9, name: 'Item 9' },
    { id: 10, name: 'Item 10' },
    { id: 11, name: 'Item 11' },
    { id: 12, name: 'Item 12' },
    { id: 13, name: 'Item 13' },
    { id: 14, name: 'Item 14' },
    { id: 15, name: 'Item 15' },
    { id: 16, name: 'Item 16' },
    { id: 17, name: 'Item 17' },
    { id: 18, name: 'Item 18' },
    { id: 19, name: 'Item 19' },
    { id: 20, name: 'Item 20' }
  ];

  // Ajouter les couleurs aux données
  const dataWithColors = data.map((item, index) => ({
    ...item,
    color: colors[index % colors.length] // Utiliser l'opérateur modulo pour les couleurs cycliques
  }));

  return (
    <div>
      {dataWithColors.map(item => (
        <div key={item.id} style={{ backgroundColor: item.color, padding: '10px', margin: '5px' }}>
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default App;
