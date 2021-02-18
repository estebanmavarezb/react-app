import React,{useState} from 'react'
import './nav.css'
import CartWidget from '../cart/index.jsx'
import { Link, NavLink } from 'react-router-dom';




function NavBarComponent(){
    const [open, setOpen] = useState(false);

    const openMenu = () => {
        setOpen(!open)
    }

    return (

    <div className="bar">
        <Link to={`/`}>
            <h1 className="no-margin">Sushi<span>Blog</span></h1>
        </Link>
        <div className="hamburguer" onClick={openMenu}>
            <i>
                x
            </i>
        </div>
        <nav className={open ? 'nav-bar active' : 'nav-bar'}>
        <div className="close" onClick={openMenu}>
            <i>
                x
            </i>
        </div>
            <ul>
                <li><NavLink to={`/about-us`}>Nosotros</NavLink></li>
                <li><NavLink to={`/blog`}>Blog</NavLink></li>
                <li><NavLink to={`/cursos`}>Cursos</NavLink></li>
                <li><NavLink to={`/contact`}>Contacto</NavLink></li>
                <li><CartWidget /></li>
            </ul>
        </nav>
        
    </div>
    );
}

export default NavBarComponent
