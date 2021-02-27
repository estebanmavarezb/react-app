import { Link } from 'react-router-dom'

function BtnForm() {
    return (
        <Link className="btn btn-primario" to={`/formulario`}>Siguiente</Link>
    )
}

export default BtnForm