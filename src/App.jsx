import './App.css';
import Layout from './components/layaout/layout';
import MainContentComponents from './components/firstcontent/mainContent';
import CursosContentComponents from './components/cursosContent/index'
import AboutContent from './components/aboutContent';
import BlogContent from './components/blogContent';
import ContactContentComponent from './components/contactContent';




function App() {
  return (
    <>
      <Layout>
        <ContactContentComponent />
      </Layout>
    </>
  );
}

export default App;
