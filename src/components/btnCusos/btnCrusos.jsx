import { Link } from 'react-router-dom'

function BtnInfoCurso() {
    return (
        <Link className="btn btn-primario" to={`/cursos`}>ver cursos</Link>
    )
}

export default BtnInfoCurso