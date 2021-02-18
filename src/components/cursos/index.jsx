import BtnAddCart from "../btncart";
import BtnInfoCurso from "../btnCusos/btnCrusos";
import ContadorComponent from "../contador";

function ItemCourseComponent({prod}) {
    return (
        <li className="curso">
            <h4 className="no-margin">{prod.name}</h4>
            <p className="no-margin">Precio: <span>${prod.price}</span></p>
            <p className="no-margin">Cupo: <span>{prod.cupo}</span></p>
            <ContadorComponent />
            <li className="botones">
                <BtnAddCart />
                <BtnInfoCurso />
            </li>
        </li>
    )
}

export default ItemCourseComponent