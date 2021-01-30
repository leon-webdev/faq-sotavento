import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const query = graphql`
  {
    site {
      siteMetadata {
        siteDesc: description
        siteTitle: title
        author
        keywords
        copyright
      }
    }
  }
`

const SEO = () => {
  const { site } = useStaticQuery(query)
  const {
    siteDesc,
    siteTitle,
    author,
    keywords,
    copyright
  } = site.siteMetadata

  return (
    <Helmet htmlAttributes={{ lang: 'es' }} title={`${siteTitle}`}>
      <meta name="Description" content={siteDesc} />
      <meta name="keywords" content={keywords}/>
      <meta name="author" content={author} />
      <meta name="copyright" content={copyright} />
      <meta name="robots" content="index"/>
      <meta name="google-site-verification" content="Jh1_7eWog4IvUxlzDDWWnbpX0pATkyZxJhrCMcyF7Yc" />
    </Helmet>
  )
}

export default SEO
