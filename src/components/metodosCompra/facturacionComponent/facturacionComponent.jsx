import BtnPagar from "../../boton/btnPagar/btnPagar.jsx";
import FacturacionContent from "./facturacionContent/facturacionContent.jsx";

function FacturacionComponent() {
    return (
        <div className="cart-container contenedor">
            <h2 className="text-center">Facturacíon</h2>
            <div className="contenedor-productos">
                <div className="informacion-factura">
                    <p>Nombre</p>
                    <p>Fecha de Inicio</p>
                    <p>Precio del Curso</p>

                </div>
                <div className="info-productos">
                    <FacturacionContent />
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
            <BtnPagar />
        </div>
    )
}

export default FacturacionComponent