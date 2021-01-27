import './header.css'
import NavBar from '../nav/index.jsx'


function Header(){
    return (
    <header className="site-header">
        <div className="site-header_opacity"></div>
        <NavBar />
        <div className="text-header">
            <h2 className="no-margin">Blog de Sushi con consejos y cursos</h2>
            <p className="separador no-margin">*</p>
            <p className="no-margin">Aprende de los expertos con las mejores tecnicas de preparacion y consejos</p>
        </div>

    </header>
    );
  }

export default Header