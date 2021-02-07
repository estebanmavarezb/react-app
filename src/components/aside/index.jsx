import ItemCourseComponent from '../cursos'
import './aside.css'

function AsideComponent({product}) {
    return (
        <aside className="cursos">
            <h2>Nuestros Cursos y Talleres</h2>
            
            <ul className="cursos-lista">
                {product.map (prod => (
                    <ItemCourseComponent prod={prod}/>
                ))}  
            </ul>
        </aside>
    )
}

export default AsideComponent