import './main.css'
import ItemBlogContainer from '../contenidoblog'

function MainComponent({blog}) {
    
    
    return (


        <main className="blog">
            <h2>Nuestro Blog</h2>
            {blog.map(entry => (
                <ItemBlogContainer entry={entry}/>
            ))}
        </main>
    );
}

export default MainComponent