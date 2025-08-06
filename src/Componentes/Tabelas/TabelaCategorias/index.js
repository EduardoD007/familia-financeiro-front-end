import './TabelaCategorias.css';
import { TbTrash } from 'react-icons/tb';
import BotaoExcluir from '../../Botoes/BotaoExcluir/index.js'; // Ajuste o caminho conforme a localização real do componente

const TabelaCategorias = (props) => {
  return (
    <div className='tabela-categoria'>
      <table className='table'>
        <tbody>
          <tr>
            <th className='td'>Descrição</th>
            <th className='td'>Tipo</th>
            <th className='td'><TbTrash /></th>
          </tr>
          {props.categorias.map((categoria) => {
            return (
              <tr key={categoria.categoria_id} className='tr'>
                <td className='td'>{categoria.descricao}</td>
                <td className='td'>{categoria.tipo}</td>
                <td className='td'>
                  <BotaoExcluir
                    excluiEntrada={props.excluiCategoria}
                    entradaId={categoria.categoria_id}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  )
}

export default TabelaCategorias;