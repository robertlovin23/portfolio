import React, {useState} from "react"
import RobertImg from '../images/RobertLovin.png'
import CSS from '../images/css.png'
import HTML from '../images/html.png'
import MongoDB from '../images/mongodb.png'
import REACT from '../images/react.png'
import REDUX from '../images/redux.png'
import sunset from '../images/sunset.mp4'
import '../components/robert.css'
import Projects from '../components/projects'
import Form from '../components/form'
import Header from '../components/header'
import Footer from '../components/footer'
import {Link,graphql } from "gatsby"
import Typewriter from 'typewriter-effect';

export default function Index({data}){
  const projects = data.allMarkdownRemark
  console.log(projects.edges)

  return(
    <div>
      <Header/>
        <div className="flex flex-wrap background-video background-pic">
            <video autoPlay muted loop id="video-container">
              <source src={sunset} type="video/mp4"/>
            </video>
                  <div className="w-full lg:w-1/2">
                    <div>
                    <div className="titleArea">
                      <div className="titleText">
                        <Typewriter 
                            options={{
                                autoStart: true,
                                loop: true,
                              }}
                            onInit={(typewriter => {
                              typewriter.typeString('Hello, my name is Robert Lovin.')
                              .callFunction(() => {
                                console.log('String typed.');
                              })
                              .pauseFor(1000)
                              .deleteAll()
                              .typeString('I am a Full Stack Developer based in Denver, Colorado.')
                              .pauseFor(5000)
                              .start();
                          
                            })}
                        />
                      </div>
                      <div className="w-full md:w-1/2 lg:w-1/2 desc-text">
                        <p>I design dependable and cost-effective technological solutions 
                          for people who want to focus on refining their business.</p>
                      </div>
                      <a href="#about" className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow btn" style={{marginTop:"15px"}}>
                        More About Me
                      </a>
                    </div>
                </div>
              </div>
        </div>
        <div style={{paddingTop:"50px"}}>
          <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2" style={{marginBottom:'15px'}} id="about">
                  <div className="textBox">
                    <h3 className="title" style={{marginLeft: 'auto', marginRight:'auto'}}>About Me</h3>
                    <p className="descPara" style={{marginLeft: 'auto', marginRight:'auto'}}>I build custom web applications and sites for businesses. I deal with the technology so that 
                        you can focus more on what you do best. Your products will have the work ethic and creativity put
                        into them that will attract the most clients to your business.</p>
                  </div>
              </div>
              <div className="w-full lg:w-1/2">
                  <img src={RobertImg} style={{marginTop:'-38px', marginLeft: 'auto', marginRight: 'auto'}}/>
              </div>
          </div>
        </div>
        <div className="section" id="techSection">
                <div>
                  <h3 className="title" style={{ marginBottom:"50px", textAlign:'center'}}>Technical Expertise</h3>
                </div>
                <div className="techSection">
                     <div className="flex flex-wrap">
                       <div className="w-1/2 md:w-1/3 lg:w-1/4 px-4 ">
                          <svg viewBox="0 0 128 128" className="logo">
                              <path fill="#131313" d="M89.234 5.856h-7.384l7.679 8.333v3.967h-15.816v-4.645h7.678l-7.678-8.333v-3.971h15.521v4.649zm-18.657 0h-7.384l7.679 8.333v3.967h-15.817v-4.645h7.679l-7.679-8.333v-3.971h15.522v4.649zm-18.474.19h-7.968v7.271h7.968v4.839h-13.632v-16.949h13.632v4.839z"></path><path fill="#1572B6" d="M27.613 116.706l-8.097-90.813h88.967l-8.104 90.798-36.434 10.102-36.332-10.087z"></path><path fill="#33A9DC" d="M64.001 119.072l29.439-8.162 6.926-77.591h-36.365v85.753z"></path><path fill="#fff" d="M64 66.22h14.738l1.019-11.405h-15.757v-11.138h27.929000000000002l-.267 2.988-2.737 30.692h-24.925v-11.137z"></path><path fill="#EBEBEB" d="M64.067 95.146l-.049.014-12.404-3.35-.794-8.883h-11.178999999999998l1.561 17.488 22.814 6.333.052-.015v-11.587z"></path><path fill="#fff" d="M77.792 76.886l-1.342 14.916-12.422 3.353v11.588l22.833-6.328.168-1.882 1.938-21.647h-11.175z"></path><path fill="#EBEBEB" d="M64.039 43.677v11.136999999999999h-26.903000000000002l-.224-2.503-.507-5.646-.267-2.988h27.901zM64 66.221v11.138h-12.247l-.223-2.503-.508-5.647-.267-2.988h13.245z"></path>
                          </svg>
                       </div>
                       <div className="w-1/2 md:w-1/3 lg:w-1/4 px-4 ">
                         <img src={HTML}  className="logo"/>
                       </div>
                       <div className="w-1/2 md:w-1/3 lg:w-1/4 px-4 ">
                         <img src={MongoDB}  style={{ marginLeft:"auto",marginRight:"auto", width:"100%"}}/>
                       </div>
                       <div className="w-1/2 md:w-1/3 lg:w-1/4 px-4 ">
                         <img src={REACT}  className="logo"/>
                       </div>
                       <div className="w-1/2 md:w-1/3 lg:w-1/4 px-4 ">
                        <svg viewBox="0 0 128 128" className="logo">
                          <path d="M126.67,98.44c-4.56,1.16-7.38.05-9.91-3.75-5.68-8.51-11.95-16.63-18-24.9-.78-1.07-1.59-2.12-2.6-3.45C89,76,81.85,85.2,75.14,94.77c-2.4,3.42-4.92,4.91-9.4,3.7L92.66,62.34,67.6,29.71c4.31-.84,7.29-.41,9.93,3.45,5.83,8.52,12.26,16.63,18.67,25.21C102.65,49.82,109,41.7,115,33.26c2.41-3.42,5-4.72,9.33-3.46-3.28,4.35-6.49,8.63-9.72,12.88-4.36,5.73-8.64,11.53-13.16,17.14-1.61,2-1.35,3.3.09,5.19C109.9,76,118.16,87.1,126.67,98.44Z"></path>
                          <path d="M1.33,61.74c.72-3.61,1.2-7.29,2.2-10.83,6-21.43,30.6-30.34,47.5-17.06C60.93,41.64,63.39,52.62,62.9,65H7.1c-.84,22.21,15.15,35.62,35.53,28.78,7.15-2.4,11.36-8,13.47-15,1.07-3.51,2.84-4.06,6.14-3.06-1.69,8.76-5.52,16.08-13.52,20.66-12,6.86-29.13,4.64-38.14-4.89C5.26,85.89,3,78.92,2,71.39c-.15-1.2-.46-2.38-.7-3.57Q1.33,64.78,1.33,61.74ZM7.2,60.25H57.63c-.33-16.06-10.33-27.47-24-27.57C18.63,32.56,7.85,43.7,7.2,60.25Z"></path>
                        </svg>
                       </div>
                       <div className="w-1/2 md:w-1/3 lg:w-1/4 px-4 ">
                          <svg viewBox="0 0 128 128" className="logo">
                            <path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185h-125.184z">
                              </path><path fill="#323330" d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zm-46.885-37.793h-11.709l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"></path>
                          </svg>
                       </div>
                       <div className="w-1/2 md:w-1/3 lg:w-1/4 px-4">
                          <svg viewBox="0 0 128 128" className="logo">
                            <path fill="#83CD29" d="M112.771 30.334l-44.097-25.605c-2.781-1.584-6.402-1.584-9.205 0l-44.568 25.605c-2.87 1.651-4.901 4.754-4.901 8.073v51.142c0 3.319 2.084 6.423 4.954 8.083l11.775 6.688c5.628 2.772 7.617 2.772 10.178 2.772 8.333 0 13.093-5.039 13.093-13.828v-50.49c0-.713-.371-1.774-1.071-1.774h-5.623c-.712 0-2.306 1.061-2.306 1.773v50.49c0 3.896-3.524 7.773-10.11 4.48l-12.167-7.013c-.424-.23-.723-.693-.723-1.181v-51.142c0-.482.555-.966.982-1.213l44.424-25.561c.415-.235 1.025-.235 1.439 0l43.882 25.555c.42.253.272.722.272 1.219v51.142c0 .488.183.963-.232 1.198l-44.086 25.576c-.378.227-.847.227-1.261 0l-11.307-6.749c-.341-.198-.746-.269-1.073-.086-3.146 1.783-3.726 2.02-6.677 3.043-.726.253-1.797.692.41 1.929l14.798 8.754c1.417.82 3.027 1.246 4.647 1.246 1.642 0 3.25-.426 4.667-1.246l43.885-25.582c2.87-1.672 4.23-4.764 4.23-8.083v-51.142c0-3.319-1.36-6.414-4.229-8.073zM77.91 81.445c-11.726 0-14.309-3.235-15.17-9.066-.1-.628-.633-1.379-1.272-1.379h-5.731c-.709 0-1.279.86-1.279 1.566 0 7.466 4.059 16.512 23.453 16.512 14.039 0 22.088-5.455 22.088-15.109 0-9.572-6.467-12.084-20.082-13.886-13.762-1.819-15.16-2.738-15.16-5.962 0-2.658 1.184-6.203 11.374-6.203 9.105 0 12.461 1.954 13.842 8.091.118.577.645.991 1.24.991h5.754c.354 0 .692-.143.94-.396.24-.272.367-.613.335-.979-.891-10.568-7.912-15.493-22.112-15.493-12.631 0-20.166 5.334-20.166 14.275 0 9.698 7.497 12.378 19.622 13.577 14.505 1.422 15.633 3.542 15.633 6.395 0 4.955-3.978 7.066-13.309 7.066z"></path>
                          </svg>
                       </div>
                       <div className="w-1/2 md:w-1/3 lg:w-1/4 px-4 ">
                         <img src={REDUX}  className="logo"/>
                       </div>
                     </div>
                </div>
                <div className="bodyGroup">
                  <p className="title" style={{textAlign:'center', marginBottom:'20px'}}>Services</p>
                  <div className="flex flex-wrap mb-4 servicesRow">
                          <div className="w-full sm:w-1/2 md:w-1/3 mobileSpacing">
                              <div className="rounded overflow-hidden shadow-lg serviceBox">
                                <div className="px-6 py-4">
                                  <div className="font-bold text-xl mb-2">
                                    Design + Engineering
                                  </div>
                                  <div className="text-base text-white-700">
                                    <p>
                                      I give my clients the best chance for their products to succeed
                                      with my combined web design and software engineering experience. You can always 
                                      count on me to lead your project in the right direction.
                                    </p>
                                  </div>
                                </div>
                              </div>
                          </div>
                          <div className="w-full sm:w-1/2 md:w-1/3 mobileSpacing">
                          <div className="rounded overflow-hidden shadow-lg serviceBox">
                                <div className="px-6 py-4">
                                  <div className="font-bold text-xl mb-2">
                                    Advanced Experience
                                  </div>
                                  <div className="text-base text-white-700">
                                    <p>
                                      I have over 5 years of experience working with
                                      enterprise brands and top startups, and I have experience leading software development teams.
                                      I value hard-work, learning, and will stop at nothing to get the job done.
                                    </p>
                                  </div>
                                </div>
                              </div>
                          </div>
                          <div className="w-full sm:w-1/2 md:w-1/3 mobileSpacing">
                          <div className="rounded overflow-hidden shadow-lg serviceBox">
                                <div className="px-6 py-4">
                                  <div className="font-bold text-xl mb-2">
                                    Nerdy About Tech
                                  </div>
                                  <div className="text-base text-white-700">
                                    <p>
                                      I love technology and I am a nerd for learning. My expertise runs all the way from designing and planning website assets
                                      to creating robust API's. I enjoy building products that allow business's to flourish.
                                    </p>
                                  </div>
                                </div>
                              </div>
                          </div>
                  </div>
                </div>
          </div>
        <div style={{paddingBottom:"0px"}} id="projects">
          <Projects projects={projects}/>
        </div>
        <div className="section" id="contact-section">
          <Form/>
        </div>
        <Footer/>
    </div>
  )
}


export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        totalCount
        edges {
          node {
            id
            frontmatter {
              title
              date(formatString: "DD MMMM, YYYY")
              featuredImage{
                childImageSharp{
                  fluid(maxWidth:800){
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
