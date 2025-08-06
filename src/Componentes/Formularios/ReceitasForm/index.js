import { useEffect, useState } from 'react';
import CampoCategoria from '../../Campos/CampoCategoria';
import CamposTexto from '../../Campos/CamposTexto';
import CampoTipo from '../../Campos/CampoTipo/CampoTipo';
import Titulo from '../../Titulo';
import BotaoCancelar from '../../Botoes/BotaoCancelar';
import BotaoSalvar from '../../Botoes/BotaoSalvar';
import './ReceitasForm.css';
import api from '../../../app/api';

const ReceitasForm = () => {

  const stringTipo = '?descricao=undefined&tipo=Receitas'
  const [categoriaId, setCategoriaId] = useState('');
  const [categorias, setCategorias] = useState([]);
  const [dataReceita, setDataReceita] = useState('');
  const [valor, setValor] = useState('');
  const [descricao, setDescricao] = useState('');
  const [tipo, setTipo] = useState('');


  const gravarReceita = async (event) => {
    event.preventDefault()
    const novaReceita = {
      categoria_id: categoriaId,
      data_receita: dataReceita,
      valor: valor,
      descricao: descricao,
      tipo: tipo
    }
    await api.saveReceita(novaReceita);

    setCategoriaId('');
    setDataReceita('');
    setValor('');
    setDescricao('');
    setTipo('');
  }

    const buscaCategorias = async () => {
    const response = await api.getTipoCategorias(stringTipo);
    const data = await response.json();
    setCategorias(data);
  }

  useEffect(() => {
    buscaCategorias()
  },[])

  return (
    <div>
      <Titulo
        texto='Cadastro de Receita'
      />
      <form className='receitas-form' onSubmit={gravarReceita}>
        <CamposTexto
          textoLabel='Data:'
          valor={dataReceita}
          aoAlterado={valor => setDataReceita(valor)}

        />
        <CampoTipo
          textoLabel='Tipo de Receita:'
          valor={tipo}
          aoAlterado={valor => setTipo(valor)}
        />
        <CampoCategoria
          textoLabel='Categoria:'
          categorias={categorias}
          valor={categoriaId}
          aoAlterado={valor => setCategoriaId(valor)}
        />
        <CamposTexto
          textoLabel='Valor:'
          valor={valor}
          aoAlterado={valor => setValor(valor)}
        />
        <CamposTexto
          textoLabel='Descrição:'
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

export default ReceitasForm;