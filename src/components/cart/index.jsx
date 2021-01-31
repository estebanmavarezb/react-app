import React,{useState} from 'react'
import './cart.css'


function CartWidget(){
  const [open, setOpen] = useState(false);

  const openCart = () => {
      setOpen(!open)
  }

    return (
        <div className="carrito">
          <a onClick={openCart}>carrito</a>

          <div className={open ? 'contenedor-carrito active-cart' : 'contenedor-carrito'}>
             <h1 className="text-cart">Tu Carrito</h1>
          </div>
        </div>
        
        
        
    );
  }

export default CartWidget