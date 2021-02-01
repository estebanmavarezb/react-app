import image from '../../img/sushi-main.jpg';
import BtnInfoComponent from '../btninfo/index';

function ItemBlogContainer({titulo}) {
    return(
        <article className="entrada-blog">
                <div className="imagen">
                    <img src={image} alt="imagen blog"/>
                </div>
                <div className="contenido-blog">
                    <h3 className="no-margin">{titulo}</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda pariatur quidem et sapiente cupiditate, 
                    ipsa magnam alias consectetur odio deleniti sed esse non labore quo illum, deserunt aliquid, suscipit delectus!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta vero omnis, autem, sapiente aut asperiores, suscipit voluptatem voluptatum alias ex esse.
                    Tempora totam qui dignissimos fuga alias asperiores officiis amet!</p>
                    <BtnInfoComponent />
                </div>
            </article>
    )
}

export default ItemBlogContainer