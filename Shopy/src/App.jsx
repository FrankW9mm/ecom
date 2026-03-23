import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import HomePage from './pages/HomePage'
import { Routes , Route } from 'react-router';


function App() {
  

  return (
    <Routes>
      <Route path='/' element={<HomePage/>}></Route>
    </Routes>
  )
}

export default App
