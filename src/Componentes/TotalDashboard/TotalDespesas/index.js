import "./TotalDespesas.css";
import { GiExpense } from "react-icons/gi";

const iconeProps = {
  size: 38
}

const TotalDespesas = (props) => {
  return (
    <div className="total-despesas">
      <section>
        <div>
          <GiExpense {...iconeProps} />
        </div>
      </section>
      <section>
        <div className="texto">Despesas</div>
        <div>
          {props.despesasSum.map((despesa) => {
            return Number(despesa.total_despesas).toLocaleString("pt-Br", {
              style: "currency",
              currency: "BRL",
            });
          })}
        </div>
      </section>
    </div>
  );
};

export default TotalDespesas;
