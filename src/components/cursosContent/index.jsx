import {useState, useEffect} from 'react';
import fileCurso from '../../jsonDB/product.json';
import './cursosComponent.css';
import CursosComponent from '../cursosComponent/index';


function CursosContentComponents() {
    const [cursos, setCursos] = useState([]);
    
    function getData(data) {
        return new Promise((resolve, reject) =>{
            resolve(data)
        })
    }

    useEffect(() => {
        getData(fileCurso).then(result => setCursos(result));
    }, [])
    return (
        <main className="contenedor">
            <h2 className="text-center">Nuestros Próximos Cursos y Talleres</h2>
            {cursos.map(curso => (
                <CursosComponent curso={curso} />
            )) }
        </main>
    )
}

export default CursosContentComponents