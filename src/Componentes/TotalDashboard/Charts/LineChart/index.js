import "./LineChart.css";
import { BarChart } from "@mui/x-charts/BarChart";

const LineCharts = (props) => {

console.log(props.saldoMeses)

if(!props.carregando){
  return (
    <div className="line-chart">
      <div className="titulo-line">Saldo por Mês</div>
      <div className="container">
        <BarChart
          series={[{ data: [...props.saldoMeses[1]] }]}
          height={219}
          xAxis={[{ data: [...props.saldoMeses[0]] }]}
        />
      </div>
    </div>
  );
}
return (
  <div> Carregando gráfico...</div>
) 
};

export default LineCharts;
