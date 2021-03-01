import ItemCourseComponent from '../../cursos/index.jsx'
import './aside.css'

function AsideComponent({product}) {
    return (
        <aside className="cursos">
            <h2>Nuestros Cursos y Talleres</h2>
            
            <ul className="cursos-lista">
                {product.map (prod => (
                   prod.categoria === 'curso' && <ItemCourseComponent prod={prod}/>
                ))}  
            </ul>
        </aside>
    )
}

export default AsideComponent