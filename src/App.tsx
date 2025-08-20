import { Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Todo from './pages/Todo'
import PasswordGenerator from './pages/PasswordGenerator'
import WeatherPage from './pages/WeatherPage'
import RockPaperScissor from './pages/RockPaperScissor'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/todo' element={<Todo/>}/>
      <Route path='/password-generator' element={<PasswordGenerator/>}/>
      <Route path='/weather' element={<WeatherPage/>}/>
      <Route path='/rock-paper-scissor' element={<RockPaperScissor/>}/>
    </Routes>
  )
}
