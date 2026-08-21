import { useState } from 'react'
import Home from '../pages/Home'
import Navbar from '../components/Navbar'
import { RouterProvider } from "react-router-dom";
import { router } from './app.routers.jsx';


function App() {
  const [count, setCount] = useState(0)

  return (
   <RouterProvider router={router}/>
  )
}

export default App
