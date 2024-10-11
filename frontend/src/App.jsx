/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner';
import Footer from './components/Footer';
import Freebook from './components/Freebook';
import Home from './Home/Home';
import Courses from './Couses/Courses';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUp from './components/SignUp';

const App = () => {
  return (
    <>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/course' element={<Courses/>}/>
          <Route path='/signup' element={<SignUp/>}/>
        </Routes>
    </>
  )
}

export default App