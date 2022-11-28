import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from "../containers/Layout"
import Home from "../pages/Home"
import Login from '../pages/Login'
import RecoveryPassword from '../containers/RecoveryPassword'
import NotFound from "../pages/NotFound"
import "../styles/global.scss"

const App = () => {
  return (
    <div className='App'>

        <BrowserRouter>
            <Layout>
              <Routes>
                <Route exact path='/' element={<Home/>} />
                <Route exact path='/Login' element={<Login/>} />
                <Route exact path='/RecoveryPassword' element={<RecoveryPassword/>} />
                <Route exact path='*' element={<NotFound/>} />
                
              </Routes>
            </Layout>
        </BrowserRouter>
      
   
    </div>
  )
}

export default App