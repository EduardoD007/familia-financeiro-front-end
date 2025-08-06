import CamposLabel from "../../Labels/CamposLabel";
import "./CamposTexto.css";

const CamposTexto = (props) => {

  const aoDigitado = (event) => {
    props.aoAlterado(event.target.value)
  }

  return (
    <div  className="campo-texto">
      <CamposLabel
        textoLabel={props.textoLabel}
      />
      <div>
        <input className="input" type="text" value={props.valor} onChange={aoDigitado}></input>
      </div>
    </div>
  );
};

export default CamposTexto;
