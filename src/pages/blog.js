import React from 'react'
import Header from '../components/header'
import { graphql, Link } from 'gatsby'
import Footer from '../components/footer'
import Img from 'gatsby-image'

export default function Blog({data}){

    const blogData = data.allMarkdownRemark
    console.log(blogData)
    return(
        <div>
            <Header/>
            <div style={{marginLeft: 'auto', marginRight: "auto", paddingLeft:'25px'}}>
                <h2 style={{fontSize:'40px'}}>All Posts</h2>
                <div>
                    {blogData.edges.map(({node}) => {
                        console.log(node)

                        const slugName = node.fields.slug.split('/')[1]

                        const blogImg = node.frontmatter.featuredImage.childImageSharp.fluid
                        console.log(blogImg)

                        if(slugName === "blogs"){
                            return(
                                <div className="max-w-sm w-full lg:max-w-full lg:flex px-4 blogCard" style={{marginBottom:'20px'}}>
                                     <div className="h-64 lg:h-auto lg:w-64 flex-none bg-cover rounded-t lg:rounded-t-none 
                                        lg:rounded-l text-center overflow-hidden" 
                                        style={{backgroundImage: `url(${blogImg.src})`}}>
                                     </div>
                                    {/* <div style={{marginLeft: 'auto', marginRight: 'auto'}}>
                                        <Img fluid={blogImg} style={{width:"50%"}}/>
                                        <div>{node.frontmatter.title}</div>
                                    </div> */}
                                      <div className="border-r border-b border-l border-gray-400 lg:border-l-0 
                                            lg:border-t lg:border-gray-400 bg-white rounded-b 
                                            lg:rounded-b-none lg:rounded-r p-4 flex flex-col
                                             justify-between leading-normal">
                                        <div className="mb-8">
                                            <Link to={node.fields.slug} class="text-gray-900 font-bold text-xl mb-2">{node.frontmatter.title}</Link>
                                            <p>{node.frontmatter.author}- {node.frontmatter.date}</p>
                                                <p className="text-gray-700 text-base" style={{marginTop:"10px",marginBottom:"-10px"}}>{node.excerpt}</p>
                                            </div>
                                            <div className="flex items-center">
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    })}
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export const query = graphql`
    query{
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
            totalCount
            edges {
            node {
                id
                frontmatter {
                title
                author
                date(formatString: "DD MMMM, YYYY")
                featuredImage{
                        childImageSharp{
                        fluid(maxWidth:1000){
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                }
                excerpt
                fields{
                slug
                }
            }
            }
        }
}`