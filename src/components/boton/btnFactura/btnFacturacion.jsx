import { Link } from 'react-router-dom'

function BtnFactura() {
    return (
        <Link className="btn btn-primario" to={`/facturacion`}>Terminar compra</Link>
    )
}

export default BtnFactura