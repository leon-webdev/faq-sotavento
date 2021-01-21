import React from "react"
import Image from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"

const Imagen = function (props) {
  return (
    <StaticQuery
      query={graphql`
        query {
          allImageSharp {
            edges {
              node {
                fluid(maxWidth: 1200) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      `}

      render={data => {
        return (
          <Image alt={props.alt} className={props.class} fluid={data.allImageSharp.edges.find((element) => {
            // Match string after final slash
            return (element.node.fluid.src.split('/').pop() === props.imgsrc);
          }).node.fluid} />
        )
      }}

    //   render={data => {
    //     const image = data.images.edges.find(
    //       image => image.node.relativePath === "knight.jpg"
    //     )
    //     return renderImage(image)
    //   }}
    />
  )
}

export default Imagen
