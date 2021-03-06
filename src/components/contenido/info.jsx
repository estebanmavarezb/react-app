import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import { getFirestore } from '../../firebase/index';
import AboutInfoContent from './informacion/infonContent.jsx';

function AboutInfo() {
    const [informacion, setLeyenda] = useState({});
    const {id} = useParams();

    console.log(id)

    useEffect(() => {
        const db = getFirestore();
        const itemCollection = db.collection('productos');
        itemCollection.doc(id).get().then((querySnapshot) => {
            setLeyenda({...querySnapshot.data(), id: querySnapshot.id})

        })

        console.log('test')
    }, [id])

    

    return (

        <main className="contenedor">
        {informacion ? <AboutInfoContent info={informacion} /> : <p>no se pudo cargar el producto</p>}
            
        </main>
    )
}

export default AboutInfo