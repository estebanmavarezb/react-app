import CartContent from "../cartContent/cartContent";

function CartComponent() {
    return (
        <div className="cart-container contenedor">
            <h2 className="text-center">Facturacíon</h2>
            <div className="contenedor-productos">
                <div className="informacion-factura">
                    <p>Nombre</p>
                    <p>Fecha de Inicio</p>
                    <p>Precio del Curso</p>
                    <p>Eliminar producto</p>
                </div>
                <div className="info-productos">
                    <CartContent />
                    <div className="total-item">
                        <p>Total de cursos:</p>
                        <span>1</span>
                    </div>
                    <div className="total-price">
                        <p>Total a pagar:</p>
                        <span>$5000</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartComponent