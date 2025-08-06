import "./TotalSaldo.css";
import { GrMoney } from "react-icons/gr";

const iconeProps = {
  size: 38,
};
const TotalSaldo = (props) => {
  let receitasSoma = 0;
  let despesasSoma = 0;

  props.receitasSum.map((receita) => {
    return (receitasSoma = Number(receita.total_receitas));
  });

  props.despesasSum.map((despesa) => {
    return (despesasSoma = Number(despesa.total_despesas));
  });

  const saldo = receitasSoma - despesasSoma;

  return (
    <div className="total-saldo">
      <section>
        <div>
          <GrMoney {...iconeProps} />
        </div>
      </section>
      <section>
        <div className="texto">Saldo</div>
        <div>
          {saldo.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </div>
      </section>
    </div>
  );
};

export default TotalSaldo;
