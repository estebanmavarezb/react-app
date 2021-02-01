import './cursosComponent.css';
import CursosComponent from '../cursosComponent/index';


function CursosContentComponents() {
    return (
        <main className="contenedor">
            <h2 className="text-center">Nuestros Próximos Cursos y Talleres</h2>
            <CursosComponent titulo="Técnicas de preparacion de sushi" />
            <CursosComponent titulo="4 Recetas de sushi para principiantes" />
            <CursosComponent titulo="La historia del sushi" />
        
        </main>
    )
}

export default CursosContentComponents