import BtnFactura from "../../boton/btnFactura/btnFacturacion"

function FormComponent() {
    return (
        <div className="form-container contenedor">
            <h2 className="text-center">Tus Compras</h2>
            <div class="facturacion">
                    <form action="" class="formulario">
                        <div class="campo" id="nombre-apellido">
                            <div class="campo">
                                <label for="nombre">Nombre</label>
                                <input type="text" id="nombre" />
                            </div>
                            <div class="campo">
                                <label for="apellido">Apellido</label>
                                <input type="text" id="apellido" />
                            </div>
                        </div>
                        <div class="campo">
                            <label for="dni">DNI</label>
                            <input type="tel" id="dni" />
                        </div>
                        <div class="campo">
                            <label for="domicilio">Domicilio</label>
                            <input type="text" id="domicilio" />
                        </div>
                        <div class="campo">
                            <label for="apartamento">Apartamento</label>
                            <input type="text" id="apartamento" />
                        </div>
                        <div class="campo">
                            <label for="postal">Codigo Postal</label>
                            <input type="tel" id="postal" />
                        </div>
                        <div class="campo">
                            <label for="state_id">Región/Provincia</label>
                            <select class="form-control" id="state_id">
                                <option value="BA">Buenos Aires</option>
                                <option value="CP">Captal Federal</option>
                                <option value="CA">Catamarca</option>
                                <option value="CH">Chaco</option>
                                <option value="CB">Chubut</option>
                                <option value="CO">Córdoba</option>
                                <option value="CR">Corrientes</option>
                                <option value="ET">Entre Ríos</option>
                                <option value="FO">Formosa</option>
                                <option value="FL">Florida</option>
                                <option value="JJ">Jujuy</option>
                                <option value="LP">La Pampa</option>
                                <option value="LR">La Rioaja</option>
                                <option value="MZ">Mendoza</option>
                                <option value="MI">Misiones</option>
                                <option value="NQ">Neuquén</option>
                                <option value="RN">Rio Negro</option>
                                <option value="ST">Salta</option>
                                <option value="SJ">San Juan</option>
                                <option value="SL">San Luis</option>
                                <option value="SC">Santa Cruz</option>
                                <option value="SF">Santa Fe</option>
                                <option value="SE">Santiago del Estero</option>
                                <option value="TF">Tierra de Fuego</option>
                                <option value="TC">Tucumán</option>
                            </select>
                        </div>
                        <div class="campo" id="nombre-apellido">
                            <div class="campo">
                                <label for="telefono">Teléfono</label>
                                <input type="tel" id="telefono" />
                            </div>
                            <div class="campo">
                                <label for="email">Correo Electrónico</label>
                                <input type="email" id="email" />
                            </div>
                        </div>
                    </form>
                </div>
            <BtnFactura />
        </div>
    )
}


export default FormComponent