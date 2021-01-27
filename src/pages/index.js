import React from 'react'
import Layout from "../components/Layout"
import Questions from '../components/Questions'
import Hero from '../components/Hero'
import SEO from '../components/Seo'

export default function Home() {
  return (
    <Layout>
      <SEO />
      <Hero />
      <Questions />
    </Layout>
  )
}
