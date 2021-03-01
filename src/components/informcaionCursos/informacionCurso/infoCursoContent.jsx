import BtnAddCart from '../../boton/btnCart/index.js';
import ContadorComponent from '../../boton/contador/index.jsx';
import {useState, useContext} from 'react';
import {CartContext} from '../../../context/cartContext';
import {Link} from 'react-router-dom';

function InfoCursoContent({informacion}) {
    const [count, setCount] = useState(1);
    if(Object.keys(informacion).length === 0) return null;

    const context = useContext(CartContext)

    const {isInCart} = context;
    
    
    return (
        <article className="curso grid">
            <div className="columnas-4">
                <img src={require(`../../../img/${informacion.img}`).default} alt="imagen curso" />
            </div>
            <div className="columnas-8">
                <h4 className="no-margin">{informacion.name}</h4>
                <p className="no-margin">Fecha: <span>20 Agosto de 2020</span></p>
                <p className="no-margin">Cupo: <span>{informacion.cupo}</span></p>
                <p className="no-margin">Precio: <span>{informacion.price}</span></p>

                <p className="descripcion">{informacion.description}</p>


            <div className="botones-cards">
                <ContadorComponent count={count} setCount={setCount} cupo={informacion.cupo}/>
                {isInCart(informacion) ? (<Link to="/cart" className="btn btn-primario">Finalizar Compra</Link>) : (<BtnAddCart count={count} id={informacion.id}/>)}
            </div>
            </div>
            
        </article>
    )
}

export default InfoCursoContent