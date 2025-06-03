import './TotalReceitas.css'
import { GrMoney } from "react-icons/gr";

const iconeProps = {
  size: 38
}

const TotalReceitas = (props) => {
  return (
    <div className="total-receitas">
      <section>
        <div>
          <GrMoney {...iconeProps} />
        </div>
      </section>
      <section>
        <div className="texto">Receitas</div>
        <div>
          {props.receitasSum.map((receita) => {
            return Number(receita.total_receitas).toLocaleString("pt-Br", {
              style: "currency",
              currency: "BRL",
            });
          })}
        </div>
      </section>
    </div>
  );
};

export default TotalReceitas;
