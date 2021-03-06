import { Link } from 'react-router-dom'
import './btninfo.css'

function BtnInfoComponent({id}) {
    return (
        <Link className="btn btn-primario" to={`/informacion/${id}`}>Leer Entrada</Link>
    )
}

export default BtnInfoComponent


