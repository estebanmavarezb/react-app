import './mainContent.css'
import React, {useEffect, useState} from 'react';
import fileBlog from '../../jsonDB/producto-curso.json';
import fileProduct from '../../jsonDB/producto-curso.json';
import MainComponent from '../main/index.jsx';
import AsideComponent from './aside/index.jsx';
import { getFirestore } from '../../firebase/index';
function MainContentComponents() {

    const [blog, setBlog] = useState([]);
    const [product, setProduct] = useState([]);

    useEffect(() => {



        const db = getFirestore();
        const itemCollection = db.collection('productos');
        itemCollection.get().then((querySnapshot) => {
            const items = (querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id})));
            setBlog(items.filter(categoria => categoria.categoria === 'blog'))   
            setProduct(items.filter(categoria => categoria.categoria === 'cursos'))
                     
        })
    }, [])
    
    return (
        <div className="contenido-principal contenedor">
            {blog ? <MainComponent blog={blog}/> : <p>Cargando Blog</p>}
            {product ? <AsideComponent product={product}/> : <p>Cargando Blog</p>}

            
            
        </div>
    )
}

export default MainContentComponents