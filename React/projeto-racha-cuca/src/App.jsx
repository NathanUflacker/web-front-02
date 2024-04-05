import './App.css'
import Banner from './componentes/Banner/Banner'
import ConteudoPrincipal from './componentes/ConteudoPrincipal/ConteudoPrincipal'
import FormContato from './componentes/FormContato/FormContato'
import Habilidades from './componentes/Habilidades/Habilidades'
import InfoPessoais from './componentes/InfoPessoais/InfoPessoais'
import { Outlet } from 'react-router-dom';

function App() {
  

  return (
    <>
      <Banner/>
      <Outlet/>
    </>
  )
}

export default App
