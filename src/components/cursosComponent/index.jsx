import image from '../../img/img-sushibar.png'
import BtnAddCart from '../btncart'
import ContadorComponent from '../contador'

function CursosComponent({titulo}) {
    return (
        <article className="curso grid">
            <div className="columnas-4">
                <img src={image} alt="imagen curso" />
            </div>
            <div className="columnas-8">
                <h4 className="no-margin">{titulo}</h4>
                <p className="no-margin">Fecha: <span>20 Agosto de 2020</span></p>
                <p className="no-margin">Cupo: <span>20</span></p>

                <p className="descripcion"> Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quidem fugiat asperiores assumenda aut iste consectetur libero voluptates illo nisi,
                quasi fuga ea vero, mollitia quia minus minima adipisci consequuntur temporibus.
                Quidem fugiat asperiores assumenda aut iste consectetur libero voluptates illo nisi,
                quasi fuga ea vero, mollitia quia minus minima adipisci consequuntur temporibus.</p>

            <div className="botones-cards">
                <ContadorComponent />
                <BtnAddCart />
            </div>
            </div>
            
        </article>
    )
}

export default CursosComponent