import BtnAddCart from "../btncart";
import ContadorComponent from "../contador";

function ItemCourseComponent({titulo}) {
    return (
        <li className="curso">
            <h4 className="no-margin">{titulo}</h4>
            <p className="no-margin">Precio: <span>$500</span></p>
            <p className="no-margin">Cupo: <span>20</span></p>
            <ContadorComponent />
            <BtnAddCart />
        </li>
    )
}

export default ItemCourseComponent