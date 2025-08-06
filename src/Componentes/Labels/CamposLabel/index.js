import './CamposLabel.css'

const CamposLabel = (props) => {
  return(
    <div className='campos-label'>
      <label>{props.textoLabel}</label>
    </div>
  )
}

export default CamposLabel