import './mainContent.css'
import MainComponent from '../main'
import AsideComponent from '../aside'

function MainContentComponents() {
    return (
        <div className="contenido-principal contenedor">
            <MainComponent />
            <AsideComponent />
        </div>
    )
}

export default MainContentComponents