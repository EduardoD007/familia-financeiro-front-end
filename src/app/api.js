const url = "http://localhost:3000/";

const api = {
  async getDespesasByCategoria() {
    try {
      const response = await fetch(`${url}despesas/categoria`);
      return response;
    } catch (error) {
      alert(`${error.message} - Erro ao buscar despesas por Categoria`);
    }
  },

  async getDespesasSum() {
    try {
      const response = await fetch(`${url}despesas/soma`);
      return response;
    } catch (error) {
      alert(`${error.message} - Erro ao buscar despesas por Categoria`);
    }
  },

  async getReceitasByCategoria() {
    try {
      const response = await fetch(`${url}receitas/categoria`);
      return response;
    } catch (error) {
      alert(`${error.message} - Erro ao buscar receitas por Categoria`);
    }
  },

  async getReceitasSum() {
    try {
      const response = await fetch(`${url}receitas/soma`);
      return response;
    } catch (error) {
      alert(`${error.message} - Erro ao buscar receitas por Categoria`);
    }
  },
};

export default api;
