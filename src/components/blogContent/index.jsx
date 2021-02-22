import React, {useEffect, useState} from 'react';
import fileBlog from '../../jsonDB/dataBlog.json';
import MainComponent from '../main';

function BlogComponents() {

    const [blog, setBlog] = useState([]);

    function getData(data) {
        return new Promise((resolve, reject) =>{
            resolve(data)
        })
    }

    useEffect(() => {
        getData(fileBlog).then(result => setBlog(result));
    }, [])
    
    return (
        <div className="contenido-principal blog-interno contenedor">
            <MainComponent blog={blog}/>
        </div>
    )
}

export default BlogComponents
