import './TituloLabel.css'

const TituloLabel = (props) => {
  return (
    <div className='titulo-label'>
      <label>{props.textoLabel}</label>
    </div>
  )
}

export default TituloLabel;