import React from 'react'
import './robert.css'
import { Link } from 'gatsby'
import Img from 'gatsby-image'


export default function Projects({projects}){
  console.log(projects.edges)
    return(
      
          <div style={{marginTop:"50px"}}>
            <h3 style={{fontSize:'40px',textAlign:'center', marginBottom:'25px'}}>Projects</h3>
            <div className="flex flex-wrap"style={{marginBottom:'25px',maxHeight:"100%"}}>
                {projects.edges.map(({node}) => {
                    console.log(node.fields.slug.split('/')[1])
                    const slugName = node.fields.slug.split('/')[1]

                    const projImg = node.frontmatter.featuredImage.childImageSharp.fluid

                    if(slugName === "projects"){
                      return(
                        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 project-card">
                          <div class="rounded shadow-lg">
                            <Img className="w-full" fluid={projImg} className="projectImg"/>
                            <div class="px-6 py-4">
                              <Link className="font-bold text-xl mb-2" to={node.fields.slug} style={{textDecoration:"none", color:'inherit'}}>{node.frontmatter.title}</Link>
                              <p class="text-gray-700 text-base">
                              {node.excerpt}
                              </p>
                          </div>
                          {/* <div class="px-6 py-4">
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
                          </div> */}
                        </div>
                      </div>
                      )
                    }
                  }
                )}
            </div>
         </div>
    )
}

