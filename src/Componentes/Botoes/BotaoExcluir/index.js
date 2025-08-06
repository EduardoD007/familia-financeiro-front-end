import './BotaoExcluir.css';
import { TbTrash } from "react-icons/tb";

const BotaoExcluir = (props) => {

  const deletaEntrada = (event) => {
    event.preventDefault();
    props.excluiEntrada(props.entradaId)
  }
  
  return(
  <div>
    <button onClick={deletaEntrada}>
      <TbTrash/>
    </button>
  </div>
  )
  
}

export default BotaoExcluir;