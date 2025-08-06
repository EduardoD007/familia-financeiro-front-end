import './DespesasForm.css'
import Titulo from "../../Titulo";
import CamposTexto from '../../Campos/CamposTexto';
import CampoCategoria from '../../Campos/CampoCategoria';
import BotaoCancelar from '../../Botoes/BotaoCancelar';
import BotaoSalvar from '../../Botoes/BotaoSalvar';
import { useEffect, useState } from 'react';
import api from '../../../app/api';
import CampoTipo from '../../Campos/CampoTipo/CampoTipo';


const DespesasForm = () => {

const stringDespesas = "?descricao=undefined&tipo=Despesas"
const [categorias, setCategorias] = useState([]);
const [tipo, setTipo] = useState('');
const [descricao, setDescricao] = useState('');
const [categoriaId, setCategoriaId] = useState('');
const [valor, setValor] = useState('');
const [dataDespesa, setDataDespesa] = useState('');

async function criaDespesas() {

  const novaDespesa = {
    tipo:tipo,
    descricao:descricao,
    categoria_id: categoriaId,
    valor: valor,
    data_despesa: dataDespesa
  }

  await api.saveDespesa(novaDespesa);

  setCategoriaId('');
  setDataDespesa('');
  setValor('');
  setDescricao('');
  setTipo('');
}

async function buscarCategorias() {
  const response = await api.getTipoCategorias(stringDespesas);
  const data = await response.json();
  setCategorias(data);
}

useEffect(() => {
  buscarCategorias()
},[]);

  return (
    <div>
      <Titulo texto={'Cadastro de Despesa'}/>
      <form className='despesas-form' onSubmit={criaDespesas} >
        <CamposTexto
          textoLabel={'Data:'}
          valor={dataDespesa}
          aoAlterado={valor => setDataDespesa(valor)}
        />
        <CampoTipo
          textoLabel={'Tipo de Despesa'}
          valor={tipo}
          aoAlterado={valor => setTipo(valor)}
        />
        <CampoCategoria
          textoLabel={'Categoria'}
          categorias={categorias}
          valor={categoriaId}
          aoAlterado={valor => setCategoriaId(valor)}
        />
        <CamposTexto
          textoLabel={'Valor:'}
          valor={valor}
          aoAlterado={valor => setValor(valor)}
        />
        <CamposTexto
          textoLabel={'Descrição:'}
          valor={descricao}
          aoAlterado={valor => setDescricao(valor)}
        />
        <div className='botao-cadastro'>
          <BotaoCancelar/>
          <BotaoSalvar/>
        </div>
      </form>
    </div>
  )
}

export default DespesasForm;