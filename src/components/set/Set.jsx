import './Set.css';
import {useState} from "react";    // компонент с карточками
import {Card} from "../card/Card";
import { useLocation } from "react-router-dom"

export function Set(){
    const location = useLocation();
    const {set} = location.state;
    const cards = require('../../data').filter((item)=>{     // подлючить данные с data.json (.. выйти в папку выше)
        return item.setName === set
    }); 

    const [step, setStep] =useState(0);  // номер карточки

    const handleNext = () => {
        if(step < cards.length - 1){
        setStep(step + 1)
        }
    }
    const handlePrev = () => {
        if(step > 0) {
        setStep(step - 1)
        }
    }

    return(
        <div>
            <h2>Название набора карточек</h2>
            <Card 
            key = {cards[step].id}   
            front = {cards[step].front}
            back = {cards[step].back}
            />
            <div className="control-panel">
                <button className = 'btn-control' onClick={handlePrev} disabled = { step == 0 ? true : false}> &lt; </button>  
                <p> {step + 1} / {cards.length} </p> 
                <button className = 'btn-control' onClick={handleNext} disabled = { step == cards.length - 1 ? true : false}> &gt; </button>  
            </div>
        </div>
    )
}