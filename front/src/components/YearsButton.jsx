import React, { useState } from 'react';
import Button from './elements/Button/Button';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import '../App.css';

export default function YearsButton() {
    const colors = [
        { colorText:'#4A484B', backgroundColorButton:'#E4E4E6' },
        { colorText:'#FFFFFF', backgroundColorButton:'#4A484B' },
        { colorText:'#FFFFFF', backgroundColorButton:'#0075AD' },
        { colorText:'#FFFFFF', backgroundColorButton:'#CCB294' },
        { colorText:'#FFFFFF', backgroundColorButton:'#CE6279' },
    ];

    const countries= [
        "France", "Inde", "Japon", "Brésil", "Australie", 
        "Canada", "Nigéria", "Russie", "Argentine", "Suède"
    ];

    const [startIndex, setStartIndex] = useState(0);

    const handleNext = () => {
        if (startIndex + 1 <= countries.length - 5) {
            setStartIndex(startIndex + 1);
        }
    };

    const handlePrev = () => {
        if (startIndex - 1 >= 0) {
            setStartIndex(startIndex - 1);
        }
    };

    return (
        <div style={{ margin:'50px auto', width: '95%', position: 'relative' }}>
            <IoIosArrowBack size={20} onClick={handlePrev} style={{ visibility: startIndex === 0 ? 'hidden' : 'visible', position: 'absolute', top: '50%', left: '35%', transform: 'translateY(-50%)',cursor: 'pointer' }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: 40, justifyContent: 'center'}}>
                {countries.slice(startIndex, startIndex + 5).map((country, index) => (
                    <Button 
                        key={startIndex + index} // Utilisez l'index global
                        colorText={colors[(startIndex + index) % colors.length].colorText} // Accédez aux couleurs en fonction de l'index global
                        backgroundColorButton={colors[(startIndex + index) % colors.length].backgroundColorButton} // Accédez aux couleurs en fonction de l'index global
                        text={country}
                        style={{ visibility: index < 5 ? 'visible' : 'hidden', transition: 'opacity 0.5s', opacity: index < 5 ? 1 : 0 }} // Appliquez un style différent en fonction de la visibilité
                    />
                ))}
            </div>
            <IoIosArrowForward size={20} onClick={handleNext} style={{ visibility: startIndex + 5 >= countries.length ? 'hidden' : 'visible', position: 'absolute', top: '50%', right: '35%', transform: 'translateY(-50%)', cursor: 'pointer' }} />
        </div>
    );
}
