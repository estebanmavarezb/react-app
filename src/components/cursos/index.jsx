import BtnAddCart from "../btncart";
import ContadorComponent from "../contador";

function ItemCourseContainer() {
    return (
        <li className="curso">
            <h4 className="no-margin">Técnicas de preparacion de sushi</h4>
            <p className="no-margin">Precio: <span>$500</span></p>
            <p className="no-margin">Cupo: <span>20</span></p>
            <ContadorComponent />
            <BtnAddCart />
        </li>

        /* <li className="curso">
                    <h4 className="no-margin">4 Recetas de sushi para principiantes</h4>
                    <p className="no-margin">Precio: <span>Gratis</span></p>
                    <p className="no-margin">Cupo: <span>20</span></p>
                    <a href="!#" className="btn btn-secundario">Más Información</a>
                </li> */
    )
}

export default ItemCourseContainer