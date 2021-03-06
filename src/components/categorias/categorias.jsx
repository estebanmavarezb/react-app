import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import BlogComponents from '../blogContent';
import CursosContentComponents from '../cursosContent';
import { getFirestore } from '../../firebase/index';


function CategoriasComponent() {
    const {categoria} = useParams()
    const [info, setInfo] = useState([])
    
    useEffect(() => {



        const db = getFirestore();
        const itemCollection = db.collection('productos');
        const itemPerCategory = itemCollection.where('categoria', '==', categoria)
        itemPerCategory.get().then((querySnapshot) => {
            const items = (querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id})));
            setInfo(items)
        })
    },[categoria])

    return(
        <>
            {categoria === 'cursos' ? <CursosContentComponents info={info}/> : <BlogComponents info={info}/>}
        </>
    )
}


export default CategoriasComponent