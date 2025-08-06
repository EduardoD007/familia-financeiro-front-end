import { useState, useEffect } from 'react';
import CamposTexto from '../../Campos/CamposTexto';
import Titulo from '../../Titulo';
import './CategoriasForm.css';
import CampoTipoCategoria from '../../Campos/CampoTipoCategoria';
import BotaoCancelar from '../../Botoes/BotaoCancelar';
import BotaoSalvar from '../../Botoes/BotaoSalvar';
import api from '../../../app/api.js'
import TabelaCategorias from '../../Tabelas/TabelaCategorias/index.js';

const CategoriasForm = () => {

const [descricao, setDescricao] = useState('');
const [tipoCategoria, setTipoCategoria] = useState(' ');
const [categorias, setCategorias] = useState([]);

const criaCategoria = async (event) => {
  event.preventDefault()
  const novaCategoria = {
    descricao: descricao,
    tipo: tipoCategoria
  }

  await api.saveCategoria(novaCategoria);

  setDescricao('');
  setTipoCategoria(' ')

  buscaCategorias();
  
}

const buscaCategorias = async () => {
  const queryString = '?descricao=undefined&tipo=undefined'
  const response = await api.getTipoCategorias(queryString);
  const data = await response.json();
  setCategorias(data);
}

const deletaCategoria = async (id) => {
  await api.deleteCategoria(id)
  buscaCategorias();
}

useEffect(() => {
    buscaCategorias()
  },[])

  return (
    <div>
      <Titulo
        texto='Cadastro de Categorias'
      />
      <form className='categorias-form' onSubmit={criaCategoria}>
        <CamposTexto
          textoLabel='Descrição'
          valor={descricao}
          aoAlterado = {(descricao) => setDescricao(descricao)}
        />
        <CampoTipoCategoria
         textoLabel='Tipo de categoria'
         valor={tipoCategoria}
         aoAlterado = {(tipoCategoria) => setTipoCategoria(tipoCategoria)}
        />
        <div className='botao-cadastro'>
          <BotaoCancelar/>
          <BotaoSalvar/>
        </div>
        <TabelaCategorias
            categorias = {categorias}
            excluiCategoria = {(id) => deletaCategoria(id)}
        />
      </form>

    </div>
  )
}

export default CategoriasForm;