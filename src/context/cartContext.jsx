import React, {createContext, useState} from 'react';
import fileProduct from '../jsonDB/producto-curso.json'

export const CartContext = createContext();

function CartContextProvider({children}) {
    const [cart, setCart] = useState([]);

    function addCart(cantidad, id) {
        const producto = fileProduct.find(prod => prod.id === id)

        console.log(producto)

        if(isInCart(producto)) {
            cart[cart.indexOf(producto)].cantidad += cantidad;
            setCart(cart)
            alert('se agregaron mas productos')
            

        } else {
            producto.cantidad = cantidad;
            setCart([...cart, producto])
            alert('producto agregado')
        }
    }

    function deleteItems(id) {
        const newCart = cart.filter(prod => prod.id !== id)
        setCart(newCart)
    }

    function deleteCart() {
       setCart([])
    }

    function isInCart(producto) {
        if(cart.includes(producto)) {
            return true
        }else {
            return false
        }
    }

    return(
        <CartContext.Provider value={{cart, addCart, deleteItems, deleteCart, isInCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider