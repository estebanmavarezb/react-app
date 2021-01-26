import './nav.css'

function NavBar(){
    return (
        <div className="bar">
        <a href="!#">
            <h1 className="no-margin">Sushi<span>Blog</span></h1>
        </a>
        <nav className="nav-bar">
            <a href="!#">Nosotros</a>
            <a href="!#">Cursos</a>
            <a href="!#">Contacto</a>
        </nav>
    </div>
    );
  }

export default NavBar