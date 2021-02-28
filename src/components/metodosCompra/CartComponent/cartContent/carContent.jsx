import {CartContext} from '../../../../context/cartContext'
import {useContext} from 'react'

function CartContent({producto}) {
    const context = useContext(CartContext);
    const {deleteItems} = context;

    return(
        <div className="productos">
            <div className="img-producto">
                <img src="" alt="imagen del curso" />
            </div>
            <div className="info-producto">
                <p className="nombre">{producto.name}</p>
                <p className="fecha">{producto.cantidad}</p>
                <p className="precio">${producto.price}</p>
            </div>
            <button href="" className="btn-cart btn  btn-primario" onClick={()=> deleteItems(producto.id)}>x</button>
        </div>
    )
}

export default CartContent
