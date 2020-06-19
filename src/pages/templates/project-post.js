 import React from 'react'
 import { graphql } from 'gatsby'
 import Img from 'gatsby-image'
 
export default function ProjectPost({ data }) {
    const project = data.markdownRemark

    const featuredImgFluid = project.frontmatter.featuredImage.childImageSharp.fluid
    return(
        <div class="flex mb-4">
            <div className="w-1/2 h-12 projectPic">
                <Img fluid={featuredImgFluid}/>
            </div>
            <div className="w-1/2 h-12 projectDesc" >
                <div className="projectTitle">
                    <h3 className="projectTitle">
                        {project.frontmatter.title}
                    </h3>
                </div>
                <div className="projectText" >
                    <p style={{marginLeft: 'auto', marginRight: 'auto'}}>
                        {project.excerpt}
                    </p>
                </div>
            </div>
        </div>
        )
    }

export const query = graphql`
    query($slug: String!){
        markdownRemark(fields: { slug: { eq: $slug } }){
            html
            frontmatter{
                title
                featuredImage {
                    childImageSharp {
                      fluid(maxWidth: 800) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                }
            }  
            excerpt              
        }
    }
    `
           