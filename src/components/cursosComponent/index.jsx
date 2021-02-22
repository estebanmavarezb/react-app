import image from '../../img/img-sushibar.png';
import BtnInfoCurso from '../btnCusos/btnCrusos';

function CursosComponent({curso}) {
    return (
        <article className="curso grid">
            <div className="columnas-4">
                <img src={image} alt="imagen curso" />
            </div>
            <div className="columnas-8">
                <h4 className="no-margin">{curso.name}</h4>
                <p className="no-margin">Fecha: <span>20 Agosto de 2020</span></p>
                <p className="no-margin">Cupo: <span>{curso.cupo}</span></p>
                <p className="no-margin">Precio: <span>{curso.price}</span></p>

                <p className="descripcion"> {curso.description}</p>

            <div className="botones-cards">
                <BtnInfoCurso id={curso.id}/>
            </div>
            </div>
            
        </article>
    )
}

export default CursosComponent