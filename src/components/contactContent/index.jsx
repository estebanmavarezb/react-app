import './contact.css';
import image from '../../img//sushi-contact.jpg';


function ContactContentComponent() {
    return (
        <main className="contenedor">
            <h2 className="text-center">Contacto</h2>

            <div className="grid centrar-columnas">
                <div className="columnas-12">
                    <img src={image} alt="imagen contacto" />
                </div>

                <div className="columnas-10 formulario-contacto">
                    <form>
                        <div className="campo">
                            <label for="nombre">Nombre</label>
                            <input type="text" id="nombre" placeholder="Tu nombre" />
                        </div>
                        <div className="campo">
                            <label for="email">E-Mail</label>
                            <input type="email" id="email" placeholder="Tu correo electronico" />
                        </div>
                        <div className="campo mensaje">
                            <label for="mensaje">Mensaje</label>
                            <textarea id="mensaje"></textarea>
                        </div>
                        <div className="campo enviar">
                            <input type="submit" value="Enviar" className="btn btn-primario" />
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
}

export default ContactContentComponent