import './NavBar.css'
import classNames  from 'classnames'
import { TbCircleLetterDFilled, TbCircleLetterRFilled, TbCircleLetterHFilled, TbCircleLetterCFilled } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';

const iconeProps = {
  size: 24,
  style: {marginRight: '10px', verticalAlign: 'middle'}
};
function NavBar() {

  const navigate = useNavigate();

  return (
    <div className='nav'>
      <div className='logo'>
        <img className='img' src="./imagens/familia_financeiro_logo.png" alt='imagem logo'></img>
      </div>
      <div className='home' onClick={() => navigate('/')}>
        <TbCircleLetterHFilled {...iconeProps} color='yellow'/>
        <span className={classNames('link',
          {
            'selected' : window.location.pathname === '/'
          }
        )}>
          Home
        </span>
      </div>
      <div className='receitas' onClick={() => navigate('/receitas')}>
        <TbCircleLetterRFilled {...iconeProps} color='green'/>
        <span className={classNames('link',
          {
            'selected' : window.location.pathname === '/receitas'
          }
        )}>
          Receitas
        </span>
      </div>
      <div className='despesas' onClick={() => navigate('/despesas')}>
        <TbCircleLetterDFilled {...iconeProps} color='red'/>
        <span className={classNames('link',
          {
            'selected' : window.location.pathname === '/despesas'
          }
        )}>
          Despesas
        </span>
      </div>
      <div className = 'categorias' onClick={() => navigate('/categorias')} >
        <TbCircleLetterCFilled {...iconeProps} color='purple'/>
        <span className={classNames('link', 
          {
            'selected' : window.location.pathname === '/categorias'
          })}>
          Categorias
        </span>
      </div>
      <div className='relatorios' onClick={() => navigate('/relatorios')}>
        <TbCircleLetterRFilled {...iconeProps} color='blue'/>
        <span href='/relatorios' className={classNames('link',
          {
            'selected' : window.location.pathname === '/relatorios'
          }
        )}>
          Relatorios
        </span>
      </div>
    </div>
  )
  
}

export default NavBar;