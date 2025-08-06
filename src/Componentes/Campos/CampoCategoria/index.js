import CamposLabel from '../../Labels/CamposLabel';
import './CampoCategoria.css';

const CampoCategoria = (props) => {

    const aoSelecionado = (event) => {
    props.aoAlterado(event.target.value)
  }

  return (
    <div className='campo-categoria' >
      <CamposLabel
        textoLabel={props.textoLabel}
      />
      <div>
        <select className='select' value={props.valor} onChange={aoSelecionado}>
          <option disabled='disabled'></option>
          {props.categorias.map((categoria) => {
            return (
              <option key={categoria.categoria_id} value={categoria.categoria_id}>{categoria.descricao}</option>
            )
          })}

        </select>
      </div>
    </div>
  )
}

export default CampoCategoria;