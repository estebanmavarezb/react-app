import image from '../../../img/master-sushi.png'

function AboutComponent() {
        return (
            <div className="grid">
                <div className="columnas-6">
                    <img src={image} alt="" />
                </div>
                <div className="columnas-6 al-center">
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

export default AboutComponent