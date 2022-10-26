import {FC} from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from './pages/login/login'
import Main from './pages/Main/Main'
import Registration from './pages/registration/Registration'

const App:FC = () => {
  return(
    <div>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='reg' element={<Registration/>}/>
        <Route path='*' element={<Navigate to='/'/>}/>
      </Routes>
    </div>
  )
}

export default App