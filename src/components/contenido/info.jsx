import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import fileInformacion from '../../jsonDB/informacion.json';
import AboutInfoContent from './informacion/infonContent.jsx';

function AboutInfo() {
    const [informacion, setLeyenda] = useState({});
    const {id} = useParams();

    useEffect(() => {
       const fileInfo = fileInformacion.find(info => info.id === parseInt(id))
       setLeyenda(fileInfo)
    }, [id])

    

    return (
        <main className="contenedor">
            <AboutInfoContent info={informacion} />
        </main>
    )
}

export default AboutInfo