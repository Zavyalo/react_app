import { BtnSet } from "../../components/btnSet/BtnSet";
import {Header} from "../../components/header/Header";

export function PageSelectSet(){
    const cards = require("../../data.json");
    const sets = cards.reduce((acc, item)=>{   // выбирает неповторяющиеся setname 
        if(acc.map[item.setName])
        return acc;
        acc.map[item.setName] = true;
        acc.sets.push(item.setName);
        return acc;
    },
    {
        map:{},
        sets:[]
    }
    ).sets.map((item, index)=>(
        <BtnSet key={index} name={item} />
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