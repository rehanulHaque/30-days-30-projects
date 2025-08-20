import { Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Todo from './pages/Todo'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/todo' element={<Todo/>}/>
    </Routes>
  )
}
