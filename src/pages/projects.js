import React from 'react'
import '../components/robert.css'
import { StaticQuery, graphql, Link } from 'gatsby'


export default function Projects(){
    return(
        <StaticQuery
            query={graphql`
            query listQuery {
                allMarkdownRemark {
                    totalCount
                    edges {
                      node {
                        id
                        frontmatter {
                          title
                          date(formatString: "DD MMMM, YYYY")
                          featuredImage{
                            childImageSharp{
                              fluid(maxWidth:600){
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
                }
        `}
        render={data => (

          <div style={{marginTop:"50px"}}>
            <h3 style={{fontSize:'40px',textAlign:'center',marginBottom:'50px'}}>All Projects</h3>
            <div>
                {data.allMarkdownRemark.edges.map(({node}) => {
                    const projects = node.frontmatter.featuredImage.childImageSharp.fluid.src
                    console.log(projects)
                    return(
                    <div class="flex mb-4" style={{marginBottom:"400px"}}>
                        <div class="w-1/2 h-12">
                          <img src={projects} className="projectImg"/>
                        </div>
                        <div class="w-1/2 h-12">                      
                          <Link to={node.fields.slug} style={{textDecoration:"none", color:'inherit'}}>
                            <div key={node.id} className="itemDesc">
                                <h3 style={{color:"black",fontSize:'35px'}}>{node.frontmatter.title}</h3>
                                <br></br>
                                <p style={{fontSize:'20px',width:'60%'}}>{node.excerpt}</p>
                            </div>
                          </Link>
                        </div>
                    </div>

                    )
                })}
            </div>
         </div>
        )}  
        />
    )
}
