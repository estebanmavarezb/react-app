
import {useContext, useState} from 'react';
import {orderContext} from '../../../context/orderContext';
import { useHistory } from 'react-router-dom';

function FormComponent() {
    const context = useContext(orderContext);
    const {handleInput, handleSubmit, handleBlur, error} = context;
    const history = useHistory();
    
    const submitForm = (e) => {
        e.preventDefault();
        handleSubmit(e)
        if(!error) {
            history.push('/facturacion')
        } else {
            alert('Complete todos los campos por favor')
        }
    }
    return (
        <div className="form-container contenedor">
            <h2 className="text-center">Tus Compras</h2>
            <div className="facturacion">
                    <form className="formulario" onSubmit={submitForm} onBlur={handleBlur}>
                        <div className="campo" id="nombre-apellido">
                            <div className="campo">
                                <label for="nombre">Nombre</label>
                                <input type="text" id="nombre" name='name' onInput={handleInput} required/>
                            </div>
                            <div className="campo">
                                <label for="apellid">Apellido</label>
                                <input type="text" id="apellid" name="apellido" onInput={handleInput} required/>
                            </div>
                        </div>
                        <div className="campo">
                            <label for="dni">DNI</label>
                            <input type="text" id="dni" name="dni" onInput={handleInput} required/>
                        </div>
                        <div className="campo">
                            <label for="domicilio">Domicilio</label>
                            <input type="text" id="domicilio" name="domicilio" onInput={handleInput} required/>
                        </div>
                        <div className="campo">
                            <label for="apartamento">Apartamento</label>
                            <input type="text" id="apartamento" name="apartamento" onInput={handleInput} required/>
                        </div>
                        <div className="campo">
                            <label for="postal">Codigo Postal</label>
                            <input type="text" id="postal" name="postal" onInput={handleInput} required/>
                        </div>
                        <div className="campo">
                            <label for="state_id">Región/Provincia</label>
                            <select className="form-control" id="state_id" name='state_id' onInput={handleInput} required defaultValue="1">
                                <option value="1" disabled>Seleccione</option>
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
                        <div className="campo" id="nombre-apellido">
                            <div className="campo">
                                <label for="telefono">Teléfono</label>
                                <input type="tel" id="telefono" name="telefono" onInput={handleInput} required/>
                            </div>
                            <div className="campo">
                                <label for="email">Correo Electrónico</label>
                                <input type="email" id="email" name="email" onInput={handleInput} required/>
                            </div>
                        </div>
                        
                        <button type="submit" className="btn btn-primario" onSubmit={(e) => submitForm(e)}>Terminar Compra</button>
                    </form>
                </div>
            
        </div>
    )
}


export default FormComponent