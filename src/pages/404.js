import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'gatsby'

const Error = () => {
  return (
    <Layout>
      <main className="error__page">
        <div className="error__container">
          <h1>Ooops!, es una calle sin salida!.</h1>
          <Link to="/" className="btn">
            Regresa al inicio
          </Link>
        </div>
      </main>
    </Layout>
  )
}

export default Error