import React from "react"
import { Link } from "gatsby"

const Header = () => {
  return (
    <>
      <header className="header">
        <Link to="/">
          <div>
            <span>FAQ Sotavento Arena - Vento</span>
          </div>
        </Link>
      </header>
    </>
  )
}

export default Header
