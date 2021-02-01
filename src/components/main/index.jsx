import './main.css'
import ItemBlogContainer from '../contenidoblog'

function MainComponent() {
    return (
        <main className="blog">
            <h2>Nuestro Blog</h2>
            <ItemBlogContainer titulo="Tipos de rolls"/>
            <ItemBlogContainer titulo="3 Deliciosas recetas para sushi vegano"/>
            <ItemBlogContainer titulo="Beneficios del pescado"/>
        </main>
    );
}

export default MainComponent