import BtnPagar from "../../boton/btnPagar/btnPagar.jsx";
import FacturacionContent from "./facturacionContent/facturacionContent.jsx";
import {CartContext} from '../../../context/cartContext'
import {useContext, useState} from 'react';
import {orderContext} from '../../../context/orderContext';
import { useHistory } from 'react-router-dom';

function FacturacionComponent() {
    const context = useContext(orderContext);
    const carritoContext = useContext(CartContext);
    const {cart, total, setCart, setTotal} = carritoContext;
    const {createOrder} = context;
    const history = useHistory();

    const crearOrden = () =>{

        createOrder(cart, total);
        

        setTimeout(()=> {
            setCart([]);
            setTotal(0);
            history.push('/');
        },3000);




    }

    return (
        <div className="cart-container contenedor">
            <h2 className="text-center">Facturacíon</h2>
            <div className="contenedor-productos">
                <div className="informacion-factura">
                    <p>Nombre</p>
                    <p>Fecha de Inicio</p>
                    <p>Precio del Curso</p>

                </div>
                <div className="info-productos">
                    <FacturacionContent />
                    <div className="total-item">
                        <p>Total de cursos:</p>
                        <span>{cart.length}</span>
                    </div>
                    <div className="total-price">
                        <p>Total a pagar:</p>
                        <span>${total}</span>
                    </div>
                </div>
            </div>
            <button className="btn btn-primario" onClick={() => crearOrden()}>pagar</button>
        </div>
    )
}

export default FacturacionComponent