
import BtnInfoComponent from '../btninfo/index';

function ItemBlogContainer({entry}) {
    return(
        <article className="entrada-blog">
                <div className="imagen">
                    <img src={require(`../../img/${entry.img}`).default} alt="imagen blog"/>
                </div>
                <div className="contenido-blog">
                    <h3 className="no-margin">{entry.name}</h3>
                    <p>{entry.description}</p>
                    <BtnInfoComponent />
                </div>
            </article>
    )
}

export default ItemBlogContainer