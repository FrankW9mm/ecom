import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import HomePage from './pages/HomePage'
import CheckOutPage from './pages/CheckOutPage'
import { Routes , Route } from 'react-router';


function App() {
  

  return (
    <Routes>
      <Route index element={<HomePage/>} />
      <Route path='checkout' element={<CheckOutPage/>} />
    </Routes>
  )
}

export default App
