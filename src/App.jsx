import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Layout from './components/layaout/layout';
import MainContentComponents from './components/firstcontent/mainContent';
import CursosContentComponents from './components/cursosContent/index'
import AboutContent from './components/aboutContent';
import BlogContent from './components/blogContent';
import ContactContentComponent from './components/contactContent';
import AboutInfo from './components/contenido/info';




function App() {
  return (
    <>
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/home">
            <MainContentComponents />
          </Route>
          <Route exact path="/cursos">
            <CursosContentComponents />
          </Route>
          <Route exact path="/about-us">
            <AboutContent />
          </Route>
          <Route exact path="/blog">
            <BlogContent />
          </Route>
          <Route exact path="/contact">
            <ContactContentComponent />
          </Route>
          <Route exact path="/informacion/:id">
            <AboutInfo />
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
      
    </>
  );
}

export default App;
