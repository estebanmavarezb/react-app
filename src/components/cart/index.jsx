import React,{useState, useContext} from 'react';
import { FaShoppingCart } from "react-icons/fa";
import BtnDireccion from '../boton/btnDireccion/btnDireccion';
import {CartContext} from '../../context/cartContext'
import './cart.css';


function CartWidget(){
  const [open, setOpen] = useState(false);
  const context = useContext(CartContext);
  const {cart} = context;



  const openCart = () => {
      setOpen(!open)
      
  }

    return (



              <div className="carrito">
              <FaShoppingCart className="cart" onMouseEnter={openCart}/> <span>{cart.length}</span>
    
              <div className={open ? 'contenedor-carrito active-cart' : 'contenedor-carrito'} onMouseLeave={openCart}>
                 <h1 className="text-cart text-center">Tu Carrito</h1>
                  <div className="productos-carrito">
                    {cart.length === 0 ? (<div id="texto-view" className="texto-carrito"><p>El Carrito esta vacio</p></div>) : (
                      cart.map(producto => (
                          <div className="producto-carrito">
                            <p className="producto">{producto.name}</p>
                            <p className="catidad">{producto.cantidad}</p>
                            <p className="precio">{producto.price}</p>
                         </div>
                        ))
                      )
                    }
                  </div>
                  <div className="btn-carrito">
                  <BtnDireccion />
                  </div>
              </div>
            </div>
    );
  }

export default CartWidget

