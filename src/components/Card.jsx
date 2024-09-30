import { useState } from "react";

export function Card () {
    const [checkCard, setCheckCard] = useState(false);      
    function handleClick(){
        setCheckCard(!checkCard);
    }
    let className = `card ${checkCard ? 'card-check' : ''}`;  // it true - card-check, else - ' '

    return(
        <div className= {className} onClick={handleClick}>Карточка 1</div>
    );
}