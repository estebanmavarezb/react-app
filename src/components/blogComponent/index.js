import image from '../../img/sushi-main.jpg'

function BlogComponent() {
    return (
        <div className="grid">
            <div className="columnas-6">
                <img src={image} alt="" />
            </div>
            <div className="columnas-6">
                <h2>Tipos de rolls</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, voluptatum tempore! Nostrum, molestiae illum.
                Cupiditate laborum, vero facere qui repellendus dolorem dolor ipsum, enim illo, repellat aperiam.
                Iste, earum esse.</p>
                
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Id possimus necessitatibus, ipsum laboriosam odit adipisci nisi sunt reiciendis ipsam perspiciatis saepe.
                Inventore labore nostrum aliquam at, obcaecati quos facilis numquam.</p>
            </div>
        </div>
    )
}

export default BlogComponent