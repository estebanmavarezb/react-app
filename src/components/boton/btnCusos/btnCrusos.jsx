import { Link } from 'react-router-dom'

function BtnInfoCurso({id}) {
    return (
        <Link className="btn btn-primario" to={`/informacion/${id}`}>ver detalle</Link>
    )
}

export default BtnInfoCurso