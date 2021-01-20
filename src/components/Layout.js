import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Adornos from './Adornos'
import Hero from './Hero'
import Questions from './Questions'

const Layout = ({ children }) => {
    return (
        <div className="wrapper">
          <Header />
          <Hero />
          <Questions />
          {children}
          <Adornos />
          <Footer />
        </div>
      )
}

export default Layout