
import { Outlet } from 'react-router-dom';
import './App.css'
import Nav from './components/nav'

function App() {
  
  return (
    <div style={{background:'#f7f7f7', padding:'20px'}}>
      <Nav/>
      <Outlet />
    </div>
  )
}

export default App
