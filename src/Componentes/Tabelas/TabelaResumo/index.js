import "./TabelaResumo.css";

function TabelaResumo(props) {
  let despesaSoma;
  let receitasSoma;

  props.receitasSum.map((receita) => {
    return (receitasSoma = receita.total_receitas);
  });
  props.despesasSum.map((despesa) => {
    return (despesaSoma = despesa.total_despesas);
  });
  const saldo = Number(receitasSoma) - Number(despesaSoma);

  return (
    <div className="tab-resumo">
      <div className="titulo">
        Resumo por Categoria
      </div>
      <table className="tab">
        <tbody>
          <tr>
            <th className="th">Categoria</th>
            <th className="th">Total</th>
          </tr>
          {props.despesasCategoria.map((despesa) => (
            <tr key={despesa.descricao}>
              <td className="td">{despesa.descricao}</td>
              <td className="td-valor-despesa">
                {" "}
                -{" "}
                {Number(despesa.total_produtos).toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </td>
            </tr>
          ))}
          {props.receitasCategoria.map((receita) => (
            <tr key={receita.descricao}>
              <td className="td">{receita.descricao}</td>
              <td className="td-valor-receita">
                {Number(receita.total_produtos).toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </td>
            </tr>
          ))}
          <tr className="tr-saldo">
            <td className="td-texto" >Saldo </td>
            <td className="td-valor">
              {saldo.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default TabelaResumo;
