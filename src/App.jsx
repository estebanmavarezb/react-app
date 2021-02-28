import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Layout from './components/layaout/layout';
import MainContentComponents from './components/firstcontent/mainContent';
import AboutContent from './components/aboutContent';
import ContactContentComponent from './components/contactContent';
import AboutInfo from './components/contenido/info';
import InfoCursosComponent from './components/informcaionCursos/infoCursosComponent';
import CategoriasComponent from './components/categorias/categorias';
import FacturacionComponent from './components/metodosCompra/facturacionComponent/facturacionComponent.jsx';
import CartComponent from './components/metodosCompra/CartComponent/cartComponent';
import FormComponent from './components/metodosCompra/formularioCompra/form';
import CartContextProvider from './context/cartContext';




function App() {
  return (
    <>
    <BrowserRouter>
    <CartContextProvider>
      <Layout>
        <Switch>
          <Route exact path="/">
            <MainContentComponents />
          </Route>
          
          <Route exact path="/informacionCursos/:id">
            <InfoCursosComponent />
          </Route>
          <Route exact path="/categoria/:categoria">
            <CategoriasComponent />
          </Route>
          <Route exact path="/about-us">
            <AboutContent />
          </Route>
         
          <Route exact path="/contact">
            <ContactContentComponent />
          </Route>
          <Route exact path="/informacion/:id">
            <AboutInfo />
          </Route>
          <Route exact path="/cart">
            <CartComponent />
          </Route>
          <Route exact path="/formulario">
            <FormComponent />
          </Route>
          <Route exact path="/facturacion">
            <FacturacionComponent />
          </Route>
        </Switch>
      </Layout>
    </CartContextProvider>  
    </BrowserRouter>
      
    </>
  );
}

export default App;
