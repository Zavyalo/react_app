import "./BtnSet.css";
import { Link } from "react-router-dom";

export function BtnSet({name, id}){
    return (
        <li className="list-set_item">
            <Link className="list-set_btn" to={`/set/${id}`} state={{set: name}}>
            {name}
            </Link>
        </li>
    )
}