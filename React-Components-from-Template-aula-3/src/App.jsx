import Header from './Componentes/Header';
import Footer from './Componentes/Footer'; 
import {Outlet} from 'react-router-dom';

function App() {
  return (
        <>
          <Header titulo='Sextou'/>
          <Outlet/>
          <Footer p='2024 meu site'/>
        </>
  )
}

export default App
