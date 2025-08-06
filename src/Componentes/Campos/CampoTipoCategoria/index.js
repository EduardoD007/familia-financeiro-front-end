import CamposLabel from '../../Labels/CamposLabel';
import './CampoTipoCategoira.css';

const CampoTipoCategoria = (props) => {

  const aoSelecionado = (event) => {
    props.aoAlterado(event.target.value)
  }

  return (
    <div className='campo-tipo-categoria'>
      <CamposLabel
        textoLabel='Tipo de categoria'
      />
      <select className='select' value = {props.valor} onChange={aoSelecionado}>
        <option value=' '></option>
        <option value='Despesas'>Despesas</option>
        <option value='Receitas'>Receitas</option>
      </select>
    </div>
  )
}

export default CampoTipoCategoria;