import './App.css'
import Signin from './pages/signin/Signin'
import Login from './pages/login/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Signin />} />
        <Route path='/signup' element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
