const url = "http://localhost:3000/";

const api = {

  async getTodos(where) {
    try {
      const response = await fetch(`${url}todos/${where}`)
      return response;
    } catch (error) {
      alert(`${error.message} - Erro ao buscar todas entradas por mês`)
    }
  },

  async getDespesas(where) {
    try {
      const response = await fetch(`${url}despesas${where}`)
      return response;
    } catch (error) {
      alert(`${error.message} - Erro ao buscar despesas`)
    }
  },

  async getDespesasByCategoria(where) {
    try {
      const response = await fetch(`${url}despesas/categoria/${where}`);
      return response;
    } catch (error) {
      alert(`${error.message} - Erro ao buscar despesas por categoria`);
    }
  },

  async getDespesasSum(mes, categoriaId) {
    try {
      const response = await fetch(`${url}despesas/soma/${mes}/${categoriaId}`);
      return response;
    } catch (error) {
      alert(`${error.message} - Erro ao buscar despesas por Categoria`);
    }
  },

  async getReceitasByCategoria(where) {
    try {
      const response = await fetch(`${url}receitas/categoria/${where}`);
      return response;
    } catch (error) {
      alert(`${error.message} - Erro ao buscar receitas por Categoria`);
    }
  },

   async getReceitas(where) {
    try {
      const response = await fetch(`${url}receitas${where}`)
      return response;
    } catch (error) {
      alert(`${error.message} - Erro ao buscar receitas`)
    }
  },

  async getDespesasByType(where) {
    try {
      const response = await fetch(`${url}despesas/tipo/${where}`);
      return response;
    } catch (error) {
      alert(`${error.message} - Erro ao buscar despesas por Tipo`);
    }
  },

  async getReceitasSum(mes, categoriaId) {
    try {
      const response = await fetch(`${url}receitas/soma/${mes}/${categoriaId}`);
      return response;
    } catch (error) {
      alert(`${error.message} - Erro ao buscar receitas por Categoria`);
    }
  },

  async getSaldos(where) {
    try {
      const response = await fetch(`${url}despesas/saldo/${where}`);
      return response;
    } catch (error) {
      alert(`${error.message} - Erro ao buscar saldos por mes`);
    }
  },

  async getTipoCategorias(where) {
    try {
      const response = await fetch(`${url}categorias${where}`);
      return response;
    } catch (error) {
      alert(`${error.message} - Erro ao buscar tipos de categoria`);
    }
  },

  async saveDespesa(despesa) {
    try {
      const response = await fetch(`${url}despesas`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(despesa)
      });

      const data =  await response.json()
      return alert(`${data.message}`);
    } catch (error) {
      alert(`${error.message} - Erro ao criar nova despesa`);
    }
  },

  async saveReceita(receita) {
    try {
      const response = await fetch(`${url}receitas`,
        {
          method: 'POST',
          headers: 
          {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(receita)
      });

      const data = await response.json();
      return alert(`${data.message}`);
    } catch (error) {
      alert(`${error.message} - Erro ao criar nova receita`)
    }
  },

  async deleteDespesa(despesaId) {
    try {
      const response = await fetch(`${url}despesas/${despesaId}`, {
        method:'DELETE'
      })
      const data = await response.json();
      alert(`${data.message}`)
    } catch (error) {
      alert(`${error.message} - Erro ao excluir registro`)
    }
  },

  async deleteReceita(receitaId) {
    try {
      const response = await fetch(`${url}receitas/${receitaId}`, {
        method:'DELETE'
      })
      const data = await response.json();
      alert(`${data.message}`)
    } catch (error) {
      alert(`${error.message} - Erro ao excluir registro`)
    }
  },

  async saveCategoria(categoria) {
    try {
      const response = await fetch(`${url}categorias`,
        {
          method:'POST',
          headers: 
          {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(categoria)
      })
      const data = await response.json();
      alert(`${data.message}`)
    } catch (error) {
      alert(`${error.message} - Erro ao criar categoria`);
    }
  },

  async deleteCategoria(id) {
    try {
      const response = await fetch(`${url}categorias/${id}`,
        {
          method:'DELETE'
        }
      );
      const data = await response.json();
      alert(`${data.message}`)
      
    } catch (error) {
      alert(`${error.message} - Erro ao excluir categoria`);
    }
  }

};

export default api;
