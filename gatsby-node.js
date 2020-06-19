const path = require('path')
const { createFilePath } = require(`gatsby-source-filesystem`)


exports.onCreateNode = ({ node, getNode,actions }) => {
    console.log(node.internal.type)
    const { createNodeField } = actions
    if(node.internal.type === `MarkdownRemark`){
        const slug = createFilePath({ node, getNode, basePath: `pages` })
        createNodeField({
            node,
            name: `slug`,
            value: slug,
        })
    }
}

exports.createPages = async ({graphql,actions}) => {
    const { createPage } = actions
    const result = await graphql(`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
            path: node.fields.slug,
            component: path.resolve(`./src/pages/templates/project-post.js`),
            context: {
                slug: node.fields.slug,
            },
        })
    })
}