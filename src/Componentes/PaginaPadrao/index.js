import { Outlet } from 'react-router-dom'
import NavBar from '../NavBar'
import './PaginaPadrao.css'

export default function PaginaPadrao() {
  return (
    <div>
      <NavBar/>
      <div>
        <Outlet/>
      </div>
    </div>
  )
}