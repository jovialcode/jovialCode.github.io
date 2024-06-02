import React from "react"
import { graphql, Link, PageProps } from "gatsby"

import * as classes from "./style.module.css"
import { Layout } from "../../components/layout/layout"
import { Tags } from "../../components/blog/tags"

const Index: React.FC<PageProps> = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark
  const groupedByCategory: { [key: string]: Post[] } = posts
    .filter(post => post.node.frontmatter.category != 'Kafka')
    .reduce((acc, post) => {
    const category = post.node.frontmatter.category
    if (!acc[category]) {
      acc[category] = []
    }

    acc[category].push(post)
    return acc
  }, {})

  const orderCategory = ['Flink', 'Java'];

  return (
    <Layout>
      <section>
        {orderCategory
          .map(category => (
            <div className={classes.Category} key={category}>
              <h2 className={"flex items-center"}>
                &#128049; {category}
              </h2>
              {
                groupedByCategory[category]
                  .map(({ node: post }) => (
                    <Link className={"block"} to={post.frontmatter.slug} key={post.id}>
                      <div className={classes.blogPostPreview}>
                        <div>
                          <span className={"mr-2"}>{post.frontmatter.date}</span>
                        </div>
                        <div>
                          <span className={classes.blogPostTitle}>{post.frontmatter.title}</span>
                          {post.frontmatter.tag && <Tags tags={post.frontmatter.tag} />}
                        </div>
                      </div>
                    </Link>
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
          tag
        }
      }
    }
  }
}
`