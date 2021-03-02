import '../btninfo/btninfo.css'
import {useContext} from 'react';
import {CartContext} from '../../../context/cartContext';
import { Link } from 'react-router-dom';

function BtnAddCart({count, id}) {

    const context = useContext(CartContext);
    const {addCart} = context;

    const agregarCart = (cantidad, id) =>{
        addCart(cantidad, id)
    }

    return(
        <Link className="btn btn-primario" onClick={() => agregarCart(count, id)}>Agregar Carrito</Link>
    )
}

export default BtnAddCart