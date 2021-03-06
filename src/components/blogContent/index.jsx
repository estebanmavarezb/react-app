import React, {useEffect, useState} from 'react';
import fileBlog from '../../jsonDB/producto-curso.json';
import MainComponent from '../main';

function BlogComponents({info}) {


    
    return (
        <div className="contenido-principal blog-interno contenedor">
            <MainComponent blog={info}/>
        </div>
    )
}

export default BlogComponents
