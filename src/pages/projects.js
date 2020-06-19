import React from 'react'
import '../components/robert.css'
import { Link } from 'gatsby'
import Img from 'gatsby-image'


export default function Projects({projects}){
  console.log(projects.edges)
    return(
          <div style={{marginTop:"50px"}}>
            <h3 style={{fontSize:'40px',textAlign:'center',marginBottom:'50px'}}>All Projects</h3>
            <div>
                {projects.edges.map(({node}) => {
                    const projImg = node.frontmatter.featuredImage.childImageSharp.fluid
                    return(
                    <div class="flex mb-4" style={{marginBottom:"400px"}}>
                        <div class="w-1/2 h-12">
                          <Img fluid={projImg} className="projectImg"/>
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
    )
}

