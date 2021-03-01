import { Link } from 'react-router-dom'

function BtnDireccion() {
    return (
        <Link className="btn btn-primario" to={`/cart`}>ver tu compra</Link>
    )
}

export default BtnDireccion