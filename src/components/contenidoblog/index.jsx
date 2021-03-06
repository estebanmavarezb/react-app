import image from '../../img/sushi-header.jpg'
import BtnInfoComponent from '../boton/btninfo/index.jsx';

function ItemBlogContainer({entry}) {
    return(
        <article className="entrada-blog">
                <div className="imagen">
                    <img src={image} alt="imagen blog"/>
                </div>
                <div className="contenido-blog">
                    <h3 className="no-margin">{entry.name}</h3>
                    <p>{entry.description}</p>
                    <BtnInfoComponent id={entry.id}/>
                </div>
            </article>
    )
}

export default ItemBlogContainer