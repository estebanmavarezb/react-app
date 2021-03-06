import {CartContext} from '../../../../context/cartContext'
import {useContext} from 'react'

function FacturacionContent() {
    const context = useContext(CartContext);
    const {deleteItems, cart} = context;

    return(
        cart.map(producto =>{
            const image = require(`../../../../img/${producto.image}`).default
            return(
                <div className="productos">
                <div className="img-producto">
                    <img src={image} alt="imagen del curso" />
                </div>
                <div className="info-producto">
                    <p className="nombre">{producto.name}</p>
                    <p className="fecha">05/10/2021</p>
                    <p className="precio">${producto.price * producto.cantidad}</p>
                </div>
            </div>
            )
        })
    )
}

export default FacturacionContent

// import firebase from 'firebase/app';
// import "@firebase/firestore";

// const app = firebase.initializeApp({
//     apiKey: "AIzaSyBjRcR6kuPbCBCh6Pl9rj0153bYNyKOD-M",
//     authDomain: "coderhousehola.firebaseapp.com",
//     projectId: "coderhousehola",
//     storageBucket: "coderhousehola.appspot.com",
//     messagingSenderId: "1071185290203",
//     appId: "1:1071185290203:web:30fd8adbfc8c9b99afbdfe"
// });
