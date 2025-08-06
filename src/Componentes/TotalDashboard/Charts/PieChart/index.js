import "./PieChart.css";
import { PieChart } from "@mui/x-charts/PieChart";

const PieCharts = (props) => {

  let listaChart = [];
  let idChart = -1
  let outrasTotal = 0;

  props.despesasCategoria.map((despesa) => {
    idChart ++; 
    if(idChart <= 5) {
      listaChart.push({id:idChart, value:despesa.total_produtos, label:despesa.descricao});
    }else {
      outrasTotal+= Number(despesa.total_produtos)
    }
    return listaChart;
  }
  );

  listaChart.push({id:idChart, value: outrasTotal, label: 'Outras'})
  console.log(listaChart)

  return (
    <div className='pie-chart'>
      <div className='titulo-pie'>
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
