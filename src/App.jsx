import './App.css';
import CursosContentComponents from './components/cursosContent/index'
import MainContentComponents from './components/firstcontent/mainContent';
import Layout from './components/layaout/layout';


function App() {
  return (
    <>
      <Layout>
        <MainContentComponents />
      </Layout>
    </>
  );
}

export default App;
