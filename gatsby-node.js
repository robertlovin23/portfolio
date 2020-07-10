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
        const templates = {
            project: path.resolve(`./src/templates/project-post.js`),
            blog: path.resolve(`./src/templates/blog-post.js`)
        }
        const slug = node.fields.slug

        const slugKey = slug.split('/')[1]

        console.log(slugKey,templates, node)

        const template = slugKey === "projects" ? templates.project : templates.blog
        createPage({
            path: slug,
            component: template,
            context: {
                slug: slug,
            },
        })
    })
}