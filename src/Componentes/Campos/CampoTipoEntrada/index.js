import './CampoTipoEntrada.css';

const CampoTipoEntrada = (props) => {

  const aoSelecionado = (event) => {
    props.aoAlterado(event.target.value)
  }

  return (
    <div>
      <select className='campo-entrada' value = {props.valor} onChange={aoSelecionado}>
        <option value='Todos'>Todos</option>
        <option value='Despesas'>Despesas</option>
        <option value='Receitas'>Receitas</option>
      </select>
    </div>
  )
}

export default CampoTipoEntrada;