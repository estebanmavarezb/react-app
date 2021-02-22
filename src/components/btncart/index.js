import '../btninfo/btninfo.css'

function BtnAddCart({count}) {
    const agregarCart = cantidad =>{
        alert(`Agregaste ${cantidad} cupos de cursos al carrito`)
    }
    return(
        <a href="" className="btn btn-primario" onClick={() => agregarCart(count)}>Agregar Carrito</a>
    )
}

export default BtnAddCart