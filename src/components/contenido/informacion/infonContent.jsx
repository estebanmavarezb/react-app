import BtnAddCart from '../../boton/btnCart/index.js';
import ContadorComponent from '../../boton/contador/index.jsx';
import {useState, useContext, useEffect} from 'react';
import {CartContext} from '../../../context/cartContext';
import {Link} from 'react-router-dom';


function AboutInfoContent({info}) {
    const context = useContext(CartContext);
    const {isInCart} = context;
    const [count, setCount] = useState(1);

    const image = info.image ? require(`../../../img/${info?.image}`).default : ''

    console.log(info)
    return (
        info.categoria === 'blog' ? (
            <div>
            <h2 className="text-center">{info.name}</h2>
            <div className="grid">
                <div className="columnas-6">
                    <img src={image} alt="" />
                </div>
                <div className="columnas-6 al-center">
                    <p>{info.description}</p>
                </div>
            </div>
        </div>
        ) : (
            <article className="curso grid">
            <div className="columnas-4">
                <img src={image} alt="imagen curso" />
            </div>
            <div className="columnas-8">
                <h4 className="no-margin">{info?.name}</h4>
                <p className="no-margin">Fecha: <span>20 Agosto de 2020</span></p>
                <p className="no-margin">Cupo: <span>{info?.cupo}</span></p>
                <p className="no-margin">Precio: <span>{info?.price}</span></p>

                <p className="descripcion">{info?.description}</p>


            <div className="botones-cards">
                <ContadorComponent count={count} setCount={setCount} cupo={info?.cupo}/>
                {isInCart(info) ? (<Link to="/cart" className="btn btn-primario">Finalizar Compra</Link>) : (<BtnAddCart count={count} id={info?.id}/>)}
            </div>
            </div>
            
        </article>
        )
        

    )
}

export default AboutInfoContent