import '../btninfo/btninfo.css'

function BtnAddCart({count}) {
    const agregarCart = cantidad =>{
        alert(`Agregaste ${cantidad} cupos de cursos al carrito`)
    }
    return(
        <button href="" className="btn btn-primario" onClick={() => agregarCart(count)}>Agregar Carrito</button>
    )
}

export default BtnAddCart