import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

export default function BlogPost({data}){
    const blogPosts = data.markdownRemark

    const blogImg = data.markdownRemark.frontmatter.featuredImage.childImageSharp.fluid

    console.log(blogPosts)
    return(
        <div>
            <Header/>
            <div>
                <Img fluid={blogImg} className="blog-img"/>
                <div>
                    <div className="textSectionBlog" style={{marginLeft: 'auto', marginRight: 'auto'}}>
                        <h2 className="projectTitle" style={{fontSize: '40px'}}>{blogPosts.frontmatter.title}</h2>
                        <p><b>{blogPosts.frontmatter.author}</b> - {blogPosts.frontmatter.date}</p>
                        <div style={{marginTop:"15px"}}>
                            <div className="blogPostText" dangerouslySetInnerHTML={{ __html: blogPosts.html }}/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug }}){
            html
            frontmatter{
                author
                date
                title
                template
                featuredImage{
                    childImageSharp{
                        fluid(maxWidth:1500){
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }
`