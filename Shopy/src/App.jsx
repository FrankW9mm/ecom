import { useEffect, useState } from 'react'
import axios from 'axios'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import HomePage from './pages/HomePage'
import CheckOutPage from './pages/CheckOutPage'
import OrdersPage from './pages/OrdersPage'
import { Routes , Route } from 'react-router';
import TrackingPage from './pages/TrackingPage'
import ErrorPage from './pages/ErrorPage'


function App() {

  const [cart,setCart] = useState([]);

  useEffect(()=>{
    axios.get('/api/cart-items?expand=product')
      .then((response)=>{
        setCart(response.data);
      })
  },[])
  

  return (
    <Routes>
      <Route index element={<HomePage cart={cart}/>} />
      <Route path='checkout' element={<CheckOutPage cart={cart}/>} />
      <Route path='orders' element={<OrdersPage cart={cart}/>} />
      <Route path='tracking' element={<TrackingPage/> } />
      <Route path='*' element={<ErrorPage/>} />
    </Routes>
  )
}

export default App
