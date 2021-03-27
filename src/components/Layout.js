import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import Adorno1 from "../assets/adorno1.png"
import Adorno2 from "../assets/adorno2.png"
import Adorno3 from "../assets/adorno3.png"

const Layout = ({ children }) => {
  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <div className="submain">
          {children}

          <img
            alt="Orange and purple patterned design"
            src={Adorno1}
            className="adorno__1"
            loading="lazy"
          />
          <img
            alt="Orange and purple patterned design"
            src={Adorno2}
            className="adorno__2"
            loading="lazy"
          />
          <img
            alt="Orange and purple patterned design"
            src={Adorno3}
            className="adorno__3"
            loading="lazy"
          />

          <Footer />
        </div>
      </main>
    </div>
  )
}

export default Layout
