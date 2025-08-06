import "./CampoMes.css";

const CampoMes = (props) => {
  const setaMes = (event) => {
    props.defineMes(event.target.value);
  };

  return (
    <div>
      <select className="campo-mes"  value={props.valor} onChange={setaMes}>
        <option disable = {props.desativado} value=' '>{props.total}</option>
        <option value="janeiro">Janeiro</option>
        <option value="fevereiro">Fevereiro</option>
        <option value="marco">Março</option>
        <option value="abril">Abril</option>
        <option value="maio">Maio</option>
        <option value="junho">Junho</option>
        <option value="julho">Julho</option>
        <option value="agosto">Agosto</option>
        <option value="setembro">Setembro</option>
        <option value="outubro">Outubro</option>
        <option value="novembro">Novembro</option>
        <option value="dezembro">Dezembro</option>
      </select>
    </div>
  );
};

export default CampoMes;
