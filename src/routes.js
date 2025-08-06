import {BrowserRouter, Route, Routes} from 'react-router-dom';
import PaginaPadrao from './Componentes/PaginaPadrao';
import ContainerApp from './Componentes/ContainerApp';
import Despesas from './pages/Despesas';
import Receitas from './pages/Receitas';
import RelatoriosPage from './pages/RelatoriosPage'
import Categorias from './pages/Categorias';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaPadrao/>}>
          <Route index element={<ContainerApp/>}/>
        </Route>
        <Route path="/despesas" element={<PaginaPadrao/>}>
          <Route index element={<Despesas/>}/>
        </Route>
        <Route path="/receitas" element={<PaginaPadrao/>}>
          <Route index element={<Receitas/>}/>
        </Route>
        <Route path="/categorias" element={<PaginaPadrao/>}>
          <Route index element={<Categorias/>}/>
        </Route>
        <Route path='/relatorios' element={<PaginaPadrao/>}>
          <Route index element={<RelatoriosPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router;