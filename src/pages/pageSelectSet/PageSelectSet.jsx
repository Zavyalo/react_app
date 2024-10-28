import { BtnSet } from "../../components/btnSet/BtnSet";
import {Header} from "../../components/header/Header";
import "./pageSelectSet.css";

export function PageSelectSet(){
    const cards = require("../../data.json");   // берем массив объектов
    const sets = cards.reduce((acc, item)=>{   // перебирает все карточки и выбирает неповторяющиеся setname 
        if(acc.map[item.setName])
        return acc;
        acc.map[item.setName] = true;
        acc.sets.push(item.setName);
        return acc;
    },
    {
        map:{}, // добавляет неповторяющиеся имена наборов
        sets:[]
    }
    ).sets.map((item, index)=>(
        <BtnSet key={index} name={item} id={index} />   // создает набор кнопок
    ));

    return (
        <div>
            <Header />
            <h2>Наборы (сеты) карточек</h2>
            <ul className="set-list">
                {sets}
            </ul>
        </div>
    )
}