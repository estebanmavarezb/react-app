import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import BlogComponents from '../blogContent';
import CursosContentComponents from '../cursosContent';

function CategoriasComponent() {
    const {categoria} = useParams()
    const [categorias, setCategorias] = useState(false)
    
    useEffect(() => {
        if(categoria === 'cursos') {
            setCategorias(true)
        } else (
            setCategorias(false)
        )
    },[categoria])

    return(
        <>
        {categorias && <CursosContentComponents />}
        {!categorias &&  <BlogComponents />}
        </>
    )
}


export default CategoriasComponent