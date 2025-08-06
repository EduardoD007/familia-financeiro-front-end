import './CampoCategoriaRelatorio.css'

const CampoCategoriaRelatorio = (props) => {

    const aoSelecionado = (event) => {
      props.aoAlterado(event.target.value)
    }

  return (
    <div>
      <select className='campo-categoria-relatorio' value = {props.valor} onChange={aoSelecionado}>
        <option value=' '>Todas</option>
        {props.categorias.map((categoria) => {
          return (
            <option key={categoria.categoria_id} value={categoria.categoria_id}>{categoria.descricao}</option>
          )
        })}
      </select>
    </div>
  )
}

export default CampoCategoriaRelatorio;