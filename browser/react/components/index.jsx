import React from 'react'
import Navbar from '../containers/Navbar'
import Footer from '../containers/Footer'

const Root = ({ children }) => (
  <div id="main" className="container-fluid">
    <Navbar />
    {children}
    <Footer />
  </div>
)

export default Root
