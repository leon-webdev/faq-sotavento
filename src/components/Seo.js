import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const query = graphql`
  {
    site {
      siteMetadata {
        siteDesc: description
        siteTitle: title
      }
    }
  }
`

const SEO = () => {
  const { site } = useStaticQuery(query)
  const {
    siteDesc,
    siteTitle,
  } = site.siteMetadata

  return (
    <Helmet htmlAttributes={{ lang: 'es' }} title={`${siteTitle}`}>
      <meta name="descripcion" content={siteDesc} />
    </Helmet>
  )
}

export default SEO
