 import React from 'react'
 import Header from '../components/header'
 import { graphql,Link } from 'gatsby'
 import Img from 'gatsby-image'
 
export default function ProjectPost({ data }) {
    const project = data.markdownRemark
    console.log(data)

    const featuredImgFluid = project.frontmatter.featuredImage.childImageSharp.fluid
    return(
        <div>
            <Header/>
                <div className="flex flex-wrap" >
                    <div className="w-full lg:w-1/2">
                        <Img fluid={featuredImgFluid} className="projectPic"/>
                    </div>
                    <div className="w-full lg:w-1/2 projectDesc" style={{paddingLeft:"15px", marginLeft:"auto", marginRight:"auto"}}>
                        <div className="projectTitle">
                            <h3 className="projectTitle">
                                <b>{project.frontmatter.title}</b>
                            </h3>
                        </div>
                        <div className="projectText" dangerouslySetInnerHTML={{ __html: project.html }}>
                        </div>
                        <Link to={project.frontmatter.link} style={{marginTop:"10px"}} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Go to site
                        </Link>
                    </div>
                </div>
        </div>
        )
    }

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }){
            html
            frontmatter{
                title
                link
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
           