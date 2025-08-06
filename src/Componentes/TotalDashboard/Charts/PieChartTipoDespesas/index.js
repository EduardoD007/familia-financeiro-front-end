import "./PieChartTipoDespesas.css";
import { PieChart } from "@mui/x-charts/PieChart";

const PieChartTipoDespesas = (props) => {
  let listaChart = [];
  let idChart = -1;

  props.tipoDespesas.map((despesa) => {
    idChart++;
    listaChart.push({
      id: idChart,
      value: despesa.total_produtos,
      label: despesa.tipo,
    });
    return listaChart;
  });

  return (
    <div className="pie-chart">
      <div className="titulo-pie">Despesas Fixa / Corrente</div>
      <div className="container">
        <PieChart
          series={[{ data: [...listaChart] }]}
          width={200}
          height={219}
        />
      </div>
    </div>
  );
};

export default PieChartTipoDespesas;
