import "./PieChart.css";
import { PieChart } from "@mui/x-charts/PieChart";

const PieCharts = (props) => {

  let listaChart = [];
  let idChart = -1

  props.despesasCategoria.map((despesa) => {
    idChart ++;
    listaChart.push({id:idChart, value:despesa.total_produtos, label:despesa.descricao});
    return listaChart;
  }
);

  return (
    <div className='pie-chart'>
      <div className='titulo'>
        Despesas por Categoria
      </div>
      <div className='container'>
        <PieChart 
      series = {
        [
          {data:[...listaChart]}
        ]
      }
      width={200}
      height={200}
      />
      </div>
    </div>
  );
};

export default PieCharts;
