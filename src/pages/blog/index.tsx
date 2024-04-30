import React from "react"
import { graphql, Link, PageProps } from "gatsby"

import * as classes from './style.module.css';
import { Layout } from "../../components/layout/layout"

const Index: React.FC<PageProps> = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark
  const groupedByCategory: { [key: string]: Post[] } = posts.reduce((acc, post) => {
    const category = post.node.frontmatter.category
    if (!acc[category]) {
      acc[category] = []
    }
    acc[category].push(post)
    return acc
  }, {})

  return (
    <Layout>
      <section>
        {Object.keys(groupedByCategory)
          .map(category => (
            <div className={classes.Category} key={category}>
              <h2 className={"flex items-center"}>
                &#128049; {category}
              </h2>
              {
                groupedByCategory[category]
                  .map(({ node: post }) => (
                    <div className="blog-post-preview" key={post.id}>
                      <span className={"mr-2"}>{post.frontmatter.date}</span>
                      <span className={"font-bold"}>
                        <Link to={post.frontmatter.slug}>{post.frontmatter.title}</Link>
                      </span>
                    </div>
                  ))
              }
          </div>
        ))}
      </section>
    </Layout>
  )
}

export default Index

export const pageQuery = graphql`
  query {
  allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
    ) {
    edges {
      node {
        id
        frontmatter{
          title
          date
          slug
          category
        }
        }
      }
    }
  }
`