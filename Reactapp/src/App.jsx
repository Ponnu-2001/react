import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Statebasics from './components/Statebasics'
import Counter from './components/Counter'
import Name from './components/Name'
import Api from './components/Api'
import Pokemon from './components/Pokemon'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <h1> Welcome React </h1>
      <Routes>
        <Route path="/log" element={<Login />} />
        <Route path="/sign" element={<Signup />} />
        <Route path='/Statebasics' element={<Statebasics />} />
        <Route path='/Count' element={<Counter />} />
        <Route path='/Name' element={<Name />} />
        <Route path='/Api' element={<Api />} />
        <Route path='Pokemon' element={<Pokemon />}/>
      </Routes>

        
      
    
      
   </>
  )
}

export default App
