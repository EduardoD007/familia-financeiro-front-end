import './Titulo.css'

const Titulo = (props) => {
  return(
    <div className='titulo'>
      <label>{props.texto}</label>
    </div>
  )
}

export default Titulo