import React,{useState} from 'react';
import { FaShoppingCart } from "react-icons/fa";
import './cart.css';


function CartWidget(){
  const [open, setOpen] = useState(false);

  const openCart = () => {
      setOpen(!open)
      
  }

    return (
        <div className="carrito">
          <FaShoppingCart className="cart" onMouseEnter={openCart}/>

          <div className={open ? 'contenedor-carrito active-cart' : 'contenedor-carrito'} onMouseLeave={openCart}>
             <h1 className="text-cart text-center">Tu Carrito</h1>
          </div>
        </div>
        
        
        
    );
  }

export default CartWidget