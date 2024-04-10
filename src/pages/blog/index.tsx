import React from 'react';
import { graphql, Link, PageProps } from "gatsby"
import { Layout } from "../../components/Layout"

const Index: React.FC<PageProps> = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <Layout>
      <section>
        {posts
          .filter(post => post.node.frontmatter.title.length > 0)
          .map(({ node: post }) => {
            return (
              <div className="blog-post-preview" key={post.id}>
                <h1>
                  <Link to={post.frontmatter.slut}>{post.frontmatter.title}</Link>
                </h1>
                <h2>{post.frontmatter.date}</h2>
                <p>{post.excerpt}</p>
              </div>
            )
          })}
      </section>
    </Layout>
  )
}

export default Index;

export const pageQuery = graphql`
  query {
  allMarkdownRemark {
    edges {
      node {
        id
        frontmatter{
          title
          date
          slug
        }
      }
    }
  }
  }
`