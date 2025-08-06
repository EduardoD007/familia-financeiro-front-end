import "./CampoTipo.css";
import CamposLabel from "../../Labels/CamposLabel";

const CampoTipo = (props) => {

  const aoSelecionado = (event) => {
    props.aoAlterado(event.target.value)
  }

  return (
    <div className="campo-tipo">
      <CamposLabel textoLabel={props.textoLabel} />
      <div>
        <select className="select" value={props.valor} onChange={aoSelecionado}>
          <option disabled='disabled'></option>
          <option>Fixa</option>
          <option>Corrente</option>
        </select>
      </div>
    </div>
  );
};

export default CampoTipo;
