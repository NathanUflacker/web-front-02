import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Sobre from './pages/sobre.jsx'
import Servico from './pages/servicos.jsx'
import Contato from './pages/contato.jsx'
import PageNotFound from './pages/error.jsx'
import ConteudoPrincipal from './componentes/ConteudoPrincipal/ConteudoPrincipal.jsx'

const router = createBrowserRouter([
  {

    path: '/',
    element: <App/>,
    children: [
      {index: true, element: <ConteudoPrincipal/>},
      {path:'sobre', element: <Sobre/>},
      {path:'servicos', element: <Servico/>},
      {path:'contato', element: <Contato/>},
      {path:'*', element: <PageNotFound/>},
    ]

  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router ={router}/>
  </React.StrictMode>,
)
