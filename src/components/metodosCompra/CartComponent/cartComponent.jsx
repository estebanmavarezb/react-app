import BtnForm from "../../boton/btnform/btnform";
import CartContent from "./cartContent/carContent";
import {useContext} from 'react';
import {CartContext} from '../../../context/cartContext'


function CartComponent() {
    const context = useContext(CartContext);
    const {cart} = context;

    function sumaTotal() {
        const total = cart.reduce((sumatotal, producto) => sumatotal += (producto.price * producto.cantidad), 0).toFixed(2)
        return total
    }

    function sumaItem() {
        const total = cart.reduce((sumatotal, producto) => sumatotal + producto.cantidad, 0)
        return total
    }


    return (
        cart.length === 0 ? (<div className="text-center"><p>El Carrito esta vacion</p></div>) : (
            <div className="cart-container contenedor">
            <h2 className="text-center">Tus Compras</h2>
            <div className="contenedor-productos">
                <div className="informacion-factura">
                    <p>Nombre</p>
                    <p>Fecha de Inicio</p>
                    <p>Precio del Curso</p>
                    <p>Eliminar producto</p>
                </div>
                <div className="info-productos">
                    {cart.map(producto => (
                        <CartContent key={producto.id} producto={producto}/>
                    ))}
                    <div className="total-item">
                        <p>Total de cursos:</p>
                        <span>{sumaItem()}</span>
                    </div>
                    <div className="total-price">
                        <p>Total a pagar:</p>
                        <span>${sumaTotal()}</span>
                    </div>
                </div>
            </div>
            <BtnForm />
        </div>
        )
        
    )
}

export default CartComponent