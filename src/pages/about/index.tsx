import React from "react"
import { PageProps } from "gatsby"

import * as classes from './style.module.css';
import { Layout } from "../../components/Layout"

const Index: React.FC<PageProps> = () => {
  return (
    <Layout>
      <section>
        <div className={classes.About}>
          <h2 className={"font-bold"}>Born to be Data Engineer.</h2>
          <p className={"font-bold mb-2"}>관심 기술</p>
          <ul className={"bg-gray-200"}>
            <li>데이터 스트리밍</li>
            <li>분산처리</li>
            <li>AI 서비스</li>
            <li>고양이</li>
          </ul>
        </div>
      </section>
    </Layout>
  )
}

export default Index;