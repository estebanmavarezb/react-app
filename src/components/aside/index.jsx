import ItemCourseContainer from '../cursos'
import './aside.css'

function AsideComponent() {
    return (
        <aside className="cursos">
            <h2>Nuestros Cursos y Talleres</h2>

            <ul className="cursos-lista">
                <ItemCourseContainer />
                
            </ul>
        </aside>
    )
}

export default AsideComponent