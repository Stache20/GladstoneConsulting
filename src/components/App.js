import React, {useEffect, useState} from 'react'

import Navbar from './NavbarHome'
import Footer from './Footer'
import Home from './Home'
import Display from './Display'


function App() {


  return ( 
  <React.Fragment>
    <Navbar/>
    <Home/>
    <Display/>
    <Footer/>
  </React.Fragment>
  )
}

export default App
