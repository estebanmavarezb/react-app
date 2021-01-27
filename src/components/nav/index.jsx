import React,{useState} from 'react'
import './nav.css'
import CartWidget from '../cart/index.jsx'


function NavBar(){
    const [open, setOpen] = useState(false);

    const openMenu = () => {
        setOpen(!open)
    }

    return (

    <div className="bar">
        <a href="!#">
            <h1 className="no-margin">Sushi<span>Blog</span></h1>
        </a>

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
                <li><a href="!#">Nosotros</a></li>
                <li><a href="!#">Cursos</a></li>
                <li><a href="!#">Contacto</a></li>
                <li><a href="!#"><CartWidget /></a></li>
            </ul>
        </nav>
        
    </div>
    );
}

export default NavBar