import {useState, useEffect} from 'react';
import fileCurso from '../../jsonDB/producto-curso.json';
import './cursosComponent.css';
import CursosComponent from '../cursosComponent/index';


function CursosContentComponents({info}) {

    return (
        <main className="contenedor">
            <h2 className="text-center">Nuestros Próximos Cursos y Talleres</h2>
            {info.map(curso => (
                <CursosComponent curso={curso} />
            )) }
        </main>
    )
}

export default CursosContentComponents