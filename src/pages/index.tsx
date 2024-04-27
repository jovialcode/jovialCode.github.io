import * as React from "react"
import type { PageProps } from "gatsby"
import { graphql, Link } from "gatsby"

import * as classes from "./blog/style.module.css"
import { Layout } from "../components/Layout"


const Index: React.FC<PageProps> = () => {
  return (
    <Layout>
      <section>
        <h2>Playground</h2>

      </section>
    </Layout>
  )
}

export default Index