import { Link } from 'react-router-dom'
import {useContext} from 'react';
import {CartContext} from '../../../context/cartContext';

function BtnVaciar() {
    const context = useContext(CartContext);
    const {deleteCart} = context;

    function vaciarCart() {
        deleteCart([])
    }


    return (
        <Link className="btn btn-primario" onClick={() => vaciarCart()}>Vaciar Carrito</Link>
    )
}

export default BtnVaciar