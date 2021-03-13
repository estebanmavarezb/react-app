import React, {createContext, useState} from 'react';
import fileProduct from '../jsonDB/producto-curso.json'
import { getFirestore } from '../firebase/index';

export const CartContext = createContext();

function CartContextProvider({children}) {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

    async function addCart(cantidad, id) {

        const db = getFirestore();
        const itemCollection = db.collection('productos');
        const getItem = await itemCollection.doc(id).get();
        const producto =  {...getItem.data(), id: getItem.id}


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
        const test = cart.find(prod => prod.id === producto.id )

        if(test) {
            return true
        }else {
            return false
        }
    }

    return(
        <CartContext.Provider value={{cart, addCart, deleteItems, deleteCart, isInCart, setTotal, total, setCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider