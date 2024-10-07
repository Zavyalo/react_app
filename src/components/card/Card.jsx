import './Card.css';

import { useState } from "react";     // компонент карточка

export function Card ({front, back}) {
    const [checkCard, setCheckCard] = useState(false);      
    const handleClick = () => {
        setCheckCard(!checkCard);  // меняет значение карточки false меняется на true
    }
    let className = `card ${checkCard ? 'card-check' : ''}`;  // it true - card-check, else - ' '

    return(
        <div className= {className} onClick={handleClick} data-back={back}>
            {front}
        </div>
    );
}