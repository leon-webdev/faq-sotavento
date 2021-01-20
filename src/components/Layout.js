import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Adornos from './Adornos'

const Layout = ({ children }) => {
    return (
        <div className="wrapper">
          <Header />
          <main className="main">
            <div className="submain">
                { children }
                <Adornos />
                <Footer />
            </div>
          </main>
        </div>
      )
}

export default Layout