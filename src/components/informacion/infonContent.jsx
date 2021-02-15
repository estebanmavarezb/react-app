
function AboutInfoContent({info}) {
    if(info.image === undefined) return null;
    return (
        <div>
            <h2 className="text-center">{info.name}</h2>
            <div className="grid">
                <div className="columnas-6">
                    <img src={require(`../../img/${info?.image}`).default} alt="" />
                </div>
                <div className="columnas-6 al-center">
                    <p>{info.textoOne}</p>
                    
                    <p>{info.textoTwo}</p>
                </div>
            </div>
        </div>

    )
}

export default AboutInfoContent