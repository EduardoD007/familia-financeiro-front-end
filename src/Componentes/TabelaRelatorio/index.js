import BotaoExcluir from '../Botoes/BotaoExcluir';
import './TabelaRelatorio.css';
import { TbTrash } from "react-icons/tb";

const TabelaRelatorio = (props) =>  {

  return (
    <div className='tabela-relatorio'>
      <table className='table'>
        <tbody>
        <tr>
          <th className='td'>Data</th>
          <th className='td'>Descrição</th>
          <th className='td'>Categoria</th>
          <th className='td'>Tipo</th>
          <th className='td'>Valor</th>
          <th className='td'><TbTrash/></th>
        </tr>
        {props.entradas.map((entrada) => {
          if( 'data_despesa' in entrada && !('data_receita' in entrada)) {
            return (
            <tr key={entrada.despesa_id} className='tr'>
              <td className='td'>{entrada.data_despesa}</td>
              <td className='td'>{entrada.descricao}</td>
              <td className='td'>{entrada.categoria_nome}</td>
              <td className='td'>{entrada.tipo}</td>
              <td className='td-despesa'>{Number(entrada.valor).toLocaleString('pt-Br', {style:'currency',currency:'BRL'})}</td>
              <td className='td'>
                <BotaoExcluir 
                  excluiEntrada = {props.excluiDespesa}
                  entradaId = {entrada.despesa_id}
                />
              </td>
            </tr>
            )
          }else if('data_receita' in entrada && !('data_despesa' in entrada)){
            return (
            <tr key={entrada.receita_id} className='tr'>
              <td className='td'>{entrada.data_receita}</td>
              <td className='td'>{entrada.descricao}</td>
              <td className='td'>{entrada.categoria_nome}</td>
              <td className='td'>{entrada.tipo}</td>
              <td className='td-receita'>{Number(entrada.valor).toLocaleString('pt-Br', {style:'currency',currency:'BRL'})}</td>
              <td className='td'>
                <BotaoExcluir 
                  excluiEntrada = {props.excluiReceita}
                  entradaId = {entrada.receita_id}
                />
              </td>
            </tr>
          )
          }
           return (
            <>
              <tr key={`desp-${entrada.despesa_id}`} className='tr'>
                <td className='td'>{entrada.data_despesa}</td>
                <td className='td'>{entrada.descricao}</td>
                <td className='td'>{entrada.categoria_nome}</td>
                <td className='td'>{entrada.tipo}</td>
                <td className='td-despesa'>{Number(entrada.valor).toLocaleString('pt-Br', {style:'currency',currency:'BRL'})}</td>
                <td className='td'>
                <BotaoExcluir 
                  excluiEntrada = {props.excluiDespesa}
                  entradaId = {entrada.despesa_id}
                />
              </td>
              </tr>
              <tr key={`rec-${entrada.receita_id}`} className='tr'>
                <td className='td'>{entrada.data_receita}</td>
                <td className='td'>{entrada.descricao}</td>
                <td className='td'>{entrada.categoria_nome}</td>
                <td className='td'>{entrada.tipo}</td>
                <td className='td-receita'>{Number(entrada.valor).toLocaleString('pt-Br', {style:'currency',currency:'BRL'})}</td>
                <td className='td'>
                <BotaoExcluir 
                  excluiEntrada = {props.excluiReceita}
                  entradaId = {entrada.receita_id}
                />
              </td>
            </tr>
            </>
            )
        })}
        <tr className='tr-total'>
          <td>Total</td>
          {props.entradaSoma.map((entrada, index) => {
            if(props.entradaSoma.some(obj => 'total_despesas' in obj)){
              return (
                <>
                <td></td>
                <td></td>
                <td></td>
                <td key={index}>
                  {Number(entrada.total_despesas).toLocaleString('pt-Br', {style:'currency',currency:'BRL'})}
                </td>
                <td></td>
                </>
              )}else if(props.entradaSoma.some(obj => 'total_receitas' in obj)) {
                return(
                  <>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td key={index}>
                  {Number(entrada.total_receitas).toLocaleString('pt-Br', {style:'currency',currency:'BRL'})}
                </td>
                <td></td>
                </>
                )
              }
              return (
                <>
                <td></td>
                <td></td>
                <td></td>
                <td key={index}>
                  {Number(entrada.total).toLocaleString('pt-Br', {style:'currency',currency:'BRL'})}
                </td>
                <td></td>
                </>
              )
          })}
        </tr>
        </tbody>
      </table>
    </div>
  )
}

export default TabelaRelatorio;