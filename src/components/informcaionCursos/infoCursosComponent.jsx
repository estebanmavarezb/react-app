import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import fileInformacionCurso from '../../jsonDB/product.json';
import InfoCursoContent from '../informacionCurso/infoCursoContent';

function InfoCursosComponent() {

    const [informacion, setCurso] = useState({});
    const {id} = useParams();

    useEffect(() => {
       const fileInfo = fileInformacionCurso.find(info => info.id === parseInt(id))
       setCurso(fileInfo)
    }, [id])

    return (
    <main className="contenedor">
        <h2 className="text-center">Curso De:</h2>
        <InfoCursoContent informacion={informacion} />
    </main>
    )
}

export default InfoCursosComponent