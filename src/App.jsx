import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Layout from './components/layaout/layout';
import MainContentComponents from './components/firstcontent/mainContent';
import AboutContent from './components/aboutContent';
import ContactContentComponent from './components/contactContent';
import AboutInfo from './components/contenido/info';
import InfoCursosComponent from './components/informcaionCursos/infoCursosComponent';
import CategoriasComponent from './components/categorias/categorias';
import CartComponent from './components/cartComponent/cartComponent';




function App() {
  return (
    <>
    <BrowserRouter>
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
        </Switch>
      </Layout>
    </BrowserRouter>
      
    </>
  );
}

export default App;
