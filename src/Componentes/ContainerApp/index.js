import api from "../../app/api";
import React, { useEffect, useState } from "react";
import TabelaResumo from "../Tabelas/TabelaResumo";
import "./ContainerApp.css";
import TotalDespesas from "../TotalDashboard/TotalDespesas";
import TotalReceitas from "../TotalDashboard/TotalReceitas";
import TotalSaldo from "../TotalDashboard/TotalSaldo";
import PieCharts from "../TotalDashboard/Charts/PieChart";
import PieChartTipoDespesas from "../TotalDashboard/Charts/PieChartTipoDespesas";
import CampoMes from "../Campos/CampoMes";
import LineCharts from "../TotalDashboard/Charts/LineChart";

const ContainerApp = () => {
  const [despesasCategoria, setDespesasCategoria] = useState([]);
  const [receitasCategoria, setReceitasCategoria] = useState([]);
  const [despesasSum, setDespesasSum] = useState([]);
  const [receitasSum, setReceitasSum] = useState([]);
  const [mes, setMes] = useState(' ');
  const [saldoMeses, setSaldoMeses] = useState([]);
  const [tipoDespesas, setTipoDespesas] = useState([]);
  const [carregando, setCarregando] = useState(true);

  const getDespesasByCategoria = async () => {
    const data = await api.getDespesasByCategoria(mes);
    const despesas = await data.json();
    setDespesasCategoria(despesas);
  };

  const getDespesasByType = async () => {
    const data = await api.getDespesasByType(mes);
    const despesas = await data.json();
    setTipoDespesas(despesas);
  };

  const getReceitasByCategoria = async () => {
    const data = await api.getReceitasByCategoria(mes);
    const receitas = await data.json();
    setReceitasCategoria(receitas);
  };

  const getReceitasSum = async () => {
    const data = await api.getReceitasSum(mes);
    const receitas = await data.json();
    setReceitasSum(receitas);
  };

  const getDespesasSum = async () => {
    const data = await api.getDespesasSum(mes);
    const despesas = await data.json();
    setDespesasSum(despesas);
  };

  const getSaldo = async () => {
    const data = await api.getSaldos();
    const saldos = await data.json();
    setSaldoMeses(saldos);
    setCarregando(false)
  };

  useEffect(() => {
    getDespesasByCategoria(mes);
    getReceitasByCategoria(mes);
    getDespesasByType(mes)
    getReceitasSum(mes);
    getDespesasSum(mes);
  }, [mes]);

  useEffect(() => {
    getSaldo()
  },[])


  return (
    <div className="container-app">
      <section className="busca-mes">
        <CampoMes
        defineMes = {(mes) => setMes(mes)}
        desativado = ""
        total = 'Total 2025'
        />
      </section>
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
        <div>
          <PieChartTipoDespesas
            tipoDespesas={tipoDespesas}
          />
        </div>
        <div>
          <LineCharts
            saldoMeses = {saldoMeses}
            carregando = {carregando}
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
