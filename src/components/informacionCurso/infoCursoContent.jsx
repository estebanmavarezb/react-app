import BtnAddCart from '../btncart';
import ContadorComponent from '../contador';
import {useState} from 'react';

function InfoCursoContent({informacion}) {
    const [count, setCount] = useState(1);
    if(Object.keys(informacion).length === 0) return null;
    
    return (
        <article className="curso grid">
            <div className="columnas-4">
                <img src={require(`../../img/${informacion.img}`).default} alt="imagen curso" />
            </div>
            <div className="columnas-8">
                <h4 className="no-margin">{informacion.name}</h4>
                <p className="no-margin">Fecha: <span>20 Agosto de 2020</span></p>
                <p className="no-margin">Cupo: <span>{informacion.cupo}</span></p>
                <p className="no-margin">Precio: <span>{informacion.price}</span></p>

                <p className="descripcion">{informacion.description}</p>

            <div className="botones-cards">
                <ContadorComponent count={count} setCount={setCount} cupo={informacion.cupo}/>
                <BtnAddCart count={count}/>
            </div>
            </div>
            
        </article>
    )
}

export default InfoCursoContent