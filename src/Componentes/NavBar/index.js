import './NavBar.css'
import classNames  from 'classnames'
import { TbCircleLetterDFilled, TbCircleLetterRFilled, TbCircleLetterHFilled } from "react-icons/tb";

const iconeProps = {
  size: 24,
  style: {marginRight: '10px', verticalAlign: 'middle'}
};
function NavBar() {
  return (
    <div className='nav'>
      <div className='logo'>
        <img className='img' src="./imagens/familia_financeiro_logo.png" alt='imagem logo'></img>
      </div>
      <div className='home'>
        <TbCircleLetterHFilled {...iconeProps} color='yellow'/>
        <a href='/' className={classNames('link',
          {
            'selected' : window.location.pathname === '/'
          }
        )}>
          Home
        </a>
      </div>
      <div className='receitas'>
        <TbCircleLetterRFilled {...iconeProps} color='green'/>
        <a href='/receitas' className={classNames('link',
          {
            'selected' : window.location.pathname === '/receitas'
          }
        )}>
          Receitas
        </a>
        
      </div>
      <div className='despesas'>
        <TbCircleLetterDFilled {...iconeProps} color='red'/>
        <a href='/despesas' className={classNames('link',
          {
            'selected' : window.location.pathname === '/despesas'
          }
        )}>
          Despesas
        </a>
      </div>
      <div className='relatorios'>
        <TbCircleLetterRFilled {...iconeProps} color='blue'/>
        <a href='/relatorios' className={classNames('link',
          {
            'selected' : window.location.pathname === '/relatorios'
          }
        )}>
          Relatorios
        </a>
      </div>
    </div>
  )
  
}

export default NavBar;