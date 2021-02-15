import './mainContent.css'
import React, {useEffect, useState} from 'react';
import fileBlog from '../../jsonDB/dataBlog.json';
import fileProduct from '../../jsonDB/product.json';
import MainComponent from '../main';
import AsideComponent from '../aside';

function MainContentComponents() {

    const [blog, setBlog] = useState([]);
    const [product, setProduct] = useState([]);

    function getData(data) {
        return new Promise((resolve, reject) =>{
            resolve(data)
        })
    }

    useEffect(() => {
        getData(fileBlog).then(result => setBlog(result));
        getData(fileProduct).then(result => setProduct(result));
    }, [])
    
    return (
        <div className="contenido-principal contenedor">
            <MainComponent blog={blog}/>
            <AsideComponent product={product}/>
        </div>
    )
}

export default MainContentComponents