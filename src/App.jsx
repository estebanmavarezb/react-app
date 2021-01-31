import './App.css';
import MainContentComponents from './components/firstcontent/mainContent';
import FooterComponent from './components/footer/index';
import HeaderComponent from './components/header';

function App() {
  return (
    <>
      <HeaderComponent />
      <MainContentComponents />
      <FooterComponent />
    </>
  );
}

export default App;
