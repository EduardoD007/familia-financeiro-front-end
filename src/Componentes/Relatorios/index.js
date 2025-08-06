import './Relatorios.css';
import Titulo from '../Titulo';
import CampoTipoEntrada from '../Campos/CampoTipoEntrada';
import CampoMes from '../Campos/CampoMes';
import TabelaRelatorio from '../TabelaRelatorio';
import { useEffect, useState } from 'react';
import api from '../../app/api.js'
import CampoCategoriaRelatorio from '../Campos/CampoCategoriaRelatorio/index.js';

const Relatorios = () => {
  const [tipoEntrada, setTipoEntrada] = useState('Todos');
  const [mes, setMes] = useState('janeiro');
  const [entradas, setEntradas] = useState([]);
  const [entradasSoma, setEntradasSoma] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [categoriaId, setCategoriaId] = useState(' ');

  const buscaEntradas = async (tipoEntrada, tipoMes, categoriaId) => {
    let queryString;
    if(categoriaId === ' ' || categoriaId === 'Todos') {
      queryString = `?mes=${tipoMes}`
    }else {
      queryString = `?mes=${tipoMes}&categoria_id=${categoriaId}`
    }
    
    if(tipoEntrada === 'Receitas') {
      const response = await api.getReceitas(queryString);
      const data = await response.json();
      return setEntradas(data);
    }else if(tipoEntrada === 'Despesas') {
      const response = await api.getDespesas(queryString);
      const data = await response.json();
      return setEntradas(data)
    }

    const response = await api.getTodos(tipoMes);
    const data = await response.json();
    return setEntradas(data)
  }

  const buscaSoma = async (tipoEntrada, tipoMes, categoriaId) => {
    let novaCategoria = categoriaId

    if(tipoEntrada === 'Receitas') {
      if(categoriaId === ' ') {
        novaCategoria = undefined;
      }
      const response = await api.getReceitasSum(tipoMes, novaCategoria);
      const data = await response.json();

      return setEntradasSoma(data);
    }else if(tipoEntrada === 'Despesas'){
      if(categoriaId === ' ') {
        novaCategoria = undefined;
      }
    
      const response = await api.getDespesasSum(tipoMes, novaCategoria);
      const data = await response.json();

      return setEntradasSoma(data)
    }
    const response = await api.getSaldos(tipoMes);
    const data = await response.json()
    
    return setEntradasSoma(data)
  }

  const deletaDespesa = async (despesaId) => {
    await api.deleteDespesa(despesaId);
    await buscaEntradas(tipoEntrada, mes);
    await buscaSoma(tipoEntrada,mes);
  }

  const deletaReceita = async (receitaId) => {
    await api.deleteReceita(receitaId);
    await buscaEntradas(tipoEntrada, mes);
    await buscaSoma(tipoEntrada,mes);
  }

  const buscaCategorias = async (tipoEntrada) => {
    if(tipoEntrada === 'Todos') {
      return(
        setCategorias([])
      )
    }
    const categoriaString = `?descricao=undefined&tipo=${tipoEntrada}`;
    const response = await api.getTipoCategorias(categoriaString);
    const data = await response.json();
    setCategorias(data);

  }

  useEffect(() => {
    buscaEntradas(tipoEntrada, mes, categoriaId)
    buscaSoma(tipoEntrada, mes, categoriaId)
    buscaCategorias(tipoEntrada)
  }, [tipoEntrada, mes, categoriaId])

  useEffect(() => {
  setCategoriaId(' '); // ou "todas", depende do seu select
  setTipoEntrada('Todos')
}, [mes]);

  return (
    <div>
      <Titulo texto='Relatórios'/>
      <div className='relatorios-select'>
        <CampoTipoEntrada
          valor = {tipoEntrada}
          aoAlterado = {(tipoEntrada) => setTipoEntrada(tipoEntrada)}
        />
        <CampoCategoriaRelatorio
         valor = {categoriaId}
         categorias = {categorias}
         aoAlterado = {(categoriaId) => setCategoriaId(categoriaId)}
        />
        <CampoMes
          valor = {mes}
          defineMes = {(mes) => setMes(mes)}
          desativado = "disable"
          total = 'Mês'
        />
      </div>
      <div className='relatorios-tabela'>
        <TabelaRelatorio
          entradas = {entradas}
          tipoEntrada = {tipoEntrada}
          mes = {mes}
          entradaSoma = {entradasSoma}
          excluiReceita = {(receitaId) => deletaReceita(receitaId)}
          excluiDespesa = {(despesaId) => deletaDespesa(despesaId)}
        />
      </div>
    </div>
    
  )
}

export default Relatorios;