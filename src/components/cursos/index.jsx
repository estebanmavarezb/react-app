import BtnAddCart from "../btncart";
import BtnInfoCurso from "../btnCusos/btnCrusos";
import ContadorComponent from "../contador";
import {useState} from 'react';

function ItemCourseComponent({prod}) {
    const [count, setCount] = useState(1);
    return (
        <li className="curso">
            <h4 className="no-margin">{prod.name}</h4>
            <p className="no-margin">Precio: <span>${prod.price}</span></p>
            <p className="no-margin">Cupo: <span>{prod.cupo}</span></p>
            <ContadorComponent count={count} setCount={setCount} cupo={prod.cupo}/>
            <li className="botones">
                <BtnAddCart count={count}/>
                <BtnInfoCurso id={prod.id}/>
            </li>
        </li>
    )
}

export default ItemCourseComponent