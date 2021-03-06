import {Link} from 'react-router-dom'
import BtnInfoCurso from "../boton/btninfo/index";
import ContadorComponent from "../boton/contador/index.jsx";
import {useState} from 'react';
import BtnAddCart from "../boton/btnCart/index.js";
import {useContext} from 'react';
import {CartContext} from '../../context/cartContext'

function ItemCourseComponent({prod}) {
    const [count, setCount] = useState(1);
    const context = useContext(CartContext)
     console.log(prod.id)
    const {isInCart} = context;
    return (
        <li className="curso">
            <h4 className="no-margin">{prod.name}</h4>
            <p className="no-margin">Precio: <span>${prod.price}</span></p>
            <p className="no-margin">Cupo: <span>{prod.cupo}</span></p>
            <ContadorComponent count={count} setCount={setCount} cupo={prod.cupo}/>
            <li className="botones">
                {isInCart(prod) ? (<Link to="/cart" className="btn btn-primario">Finalizar Compra</Link>) : (<BtnAddCart count={count} id={prod.id}/>)}
                
                <BtnInfoCurso id={prod.id}/>
            </li>
        </li>
    )
    
}

export default ItemCourseComponent