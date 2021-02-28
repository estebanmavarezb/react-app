import '../btninfo/btninfo.css'
import {useContext} from 'react';
import {CartContext} from '../../../context/cartContext';

function BtnAddCart({count, id}) {

    const context = useContext(CartContext);
    const {addCart} = context;

    const agregarCart = (cantidad, id) =>{
        addCart(cantidad, id)
    }

    return(
        <button href="" className="btn btn-primario" onClick={() => agregarCart(count, id)}>Agregar Carrito</button>
    )
}

export default BtnAddCart