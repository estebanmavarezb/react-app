import ItemCourseComponent from '../cursos'
import './aside.css'

function AsideComponent() {
    return (
        <aside className="cursos">
            <h2>Nuestros Cursos y Talleres</h2>

            <ul className="cursos-lista">
                <ItemCourseComponent titulo="Técnicas de preparacion de sushi"/>
                <ItemCourseComponent titulo="4 Recetas de sushi para principiantes"/>
                
            </ul>
        </aside>
    )
}

export default AsideComponent