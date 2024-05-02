import './App.css'
import Signin from './pages/signin/Signin'
import Login from './pages/login/Login'
import Feed from './pages/feed/Feed'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signin />} />
        <Route path='/feed' element={<Feed />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
