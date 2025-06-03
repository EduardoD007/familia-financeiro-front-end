import api from "../../app/api";
import React, { useEffect, useState } from "react";
import TabelaResumo from "../Tabelas/TabelaResumo";
import "./ContainerApp.css";
import TotalDespesas from "../TotalDashboard/TotalDespesas";
import TotalReceitas from "../TotalDashboard/TotalReceitas";
import TotalSaldo from "../TotalDashboard/TotalSaldo";
import PieCharts from "../TotalDashboard/Charts/PieChart";

const ContainerApp = () => {
  const [despesasCategoria, setDespesasCategoria] = useState([]);
  const [receitasCategoria, setReceitasCategoria] = useState([]);
  const [despesasSum, setDespesasSum] = useState([]);
  const [receitasSum, setReceitasSum] = useState([]);

  const getDespesasByCategoria = async () => {
    const data = await api.getDespesasByCategoria();
    const despesas = await data.json();
    setDespesasCategoria(despesas);
  };

  const getReceitasByCategoria = async () => {
    const data = await api.getReceitasByCategoria();
    const receitas = await data.json();
    setReceitasCategoria(receitas);
  };

  const getReceitasSum = async () => {
    const data = await api.getReceitasSum();
    const receitas = await data.json();
    setReceitasSum(receitas);
  };

  const getDespesasSum = async () => {
    const data = await api.getDespesasSum();
    const despesas = await data.json();
    setDespesasSum(despesas);
  };

  useEffect(() => {
    getDespesasByCategoria();
    getReceitasByCategoria();
    getReceitasSum();
    getDespesasSum();
  }, []);

  return (
    <div className="container-app">
      <section className="total">
        <div>
          <TotalDespesas despesasSum={despesasSum} />
        </div>
        <div>
          <TotalReceitas receitasSum={receitasSum} />
        </div>
        <div>
          <TotalSaldo
          despesasSum={despesasSum}
          receitasSum={receitasSum}
          />
        </div>
      </section>
      <section  className="charts">
        <div>
          <PieCharts
            despesasCategoria={despesasCategoria}
          />
        </div>
      </section>
      <TabelaResumo
        despesasCategoria={despesasCategoria}
        receitasCategoria={receitasCategoria}
        receitasSum={receitasSum}
        despesasSum={despesasSum}
      />
    </div>
  );
};

export default ContainerApp;
