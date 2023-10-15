import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Home from './pages/Home'

const App = () => {
  return (

    <BrowserRouter>
        <Routes>
            <Route path='/' Component={Home} />
        </Routes>
    </BrowserRouter>
  )
}

export default App