import { Link } from 'react-router-dom'

function BtnPagar() {
    return (
        <Link className="btn btn-primario" to={`/`} onClick={() => (alert`Compra Exitosa`)}>pagar</Link>
    )
}

export default BtnPagar