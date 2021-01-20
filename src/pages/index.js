import React from 'react'
import Layout from "../components/Layout"
import Questions from '../components/Questions'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Questions />
    </Layout>
  )
}
