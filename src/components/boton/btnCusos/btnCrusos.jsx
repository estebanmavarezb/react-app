import { Link } from 'react-router-dom'

function BtnInfoCurso({id}) {
    return (
        <Link className="btn btn-primario" to={`/informacionCursos/${id}`}>ver detalle</Link>
    )
}

export default BtnInfoCurso