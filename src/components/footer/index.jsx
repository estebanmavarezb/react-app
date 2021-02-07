import './footer.css'

function FooterComponent() {
    return (
        <footer className="site-footer">
        <div className="contenedor">
            <div id="barra">
                <h1 className="no-margin">Sushi<span>Blog</span></h1>

                <nav className="nav-bar-footer">
                    <a href="!#">Nosotros</a>
                    <a href="!#">Cursos</a>
                    <a href="!#">Contacto</a>
                </nav>
            </div>
            <p className="copyright">Copyright © Diseñado por Ruben Mavarez</p>
        </div>
    </footer>
    )
}

export default FooterComponent