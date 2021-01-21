import React from 'react'
import Image from 'gatsby-image'
import { useStaticQuery, graphql } from "gatsby"

const data = graphql`
    {
      file(relativePath: {eq: "adorno2.png"}) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `

const Adornos = () => {

    const {
        file: {
          childImageSharp: { fluid },
        },
      } = useStaticQuery(data)

    return (
        <>
            <div>
                <Image fluid={fluid} className="adorno__2"/>
            </div>
            

            {/* <img
                alt="Orange and purple patterned design"
                src="./assets/adorno2.png"
                className="adorno__2"
            />
            
            <img
                alt="Teal and purple patterned design"
                src="../assets/adorno1.png"
                className="adorno__1"
            />

            <img
                alt="Magenta and blue patterned design"
                src="./assets/adorno3.png"
                className="adorno__3"
            /> */}
            
            
        </>
    )
}

export default Adornos