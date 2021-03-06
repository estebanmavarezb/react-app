import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import InfoCursoContent from './informacionCurso/infoCursoContent.jsx';
import { getFirestore } from '../../firebase/index';

function InfoCursosComponent() {

    const [informacion, setCurso] = useState({});
    const {id} = useParams();

    useEffect(() => {
        const db = getFirestore();
        const itemCollection = db.collection('productos');
        itemCollection.doc(id).get().then((querySnapshot) => {
            setCurso({...querySnapshot.data(), id: querySnapshot.id})          
        })
    }, [id])

    return (
    <main className="contenedor">
        <h2 className="text-center">Curso De:</h2>
        <InfoCursoContent informacion={informacion} />
    </main>
    )
}


export default InfoCursosComponent