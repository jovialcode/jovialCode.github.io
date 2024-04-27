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
          <p className={"mb-10"}>
            산업공학을 전공하면서 데이터를 잘 다루기 위해서 개발을 시작했습니다. <br/>
            <span className={"font-bold"}>Web FrontEnd, BackEnd, DataEngineer, MLOps</span>직무를 수행하면서 <br/>
            사용자에서 AI 모델까지 데이터의 Flow를 경험했습니다. <br/>
            데이터를 잘 알고 데이터를 잘 활용하여 생활에 유용한 서비스를 만드는 것을 <br/>
            사명으로 생각하면서 좋은 개발자로 성장하고 있습니다.
          </p>

          <h3 className={"m-0"}>기술스택</h3>
          <div>
            <h4 className={"m-0"}>DataEngineer</h4>
            <ul>
              <li>Hadoop Ecosystem</li>
              <li>Hbase</li>
              <li>Java8</li>
              <li>Jenkins</li>
              <li>Spring / SpringBoot</li>
              <li>VueJs</li>
              <li>Puppeteer(NodeJS)</li>
            </ul>
            <p>
              카카오 검색 서비스를 위한 블로그 데이터(네이버블로그/이글루스)를 수집하는 크롤러를 담당 <br/>
              하둡 클러스터와 연동 서버들을 관리 및 모니터링<br/>
              수집된 데이터 후처리를 위한 MapReduce 개발<br/>
              Hbase 데이터 마이그레이션 작업 <br/>
            </p>
          </div>

          <div>
            <h4 className={"m-0 mt-2"}>MLOps</h4>
            <ul>
              <li>Kubernetes</li>
              <li>Kustomize</li>
              <li>ArgoCD</li>
              <li>Kubeflow</li>
              <li>Airflow</li>
              <li>PyTorch</li>
              <li>Python3</li>
              <li>Rust</li>
              <li>MongoDB</li>
              <li>S3</li>
            </ul>
            <p>
              지식그래프 Name Entity Recognition / Entity Linking 모델을 서빙<br/>
              NER / EL 학습 Kubeflow 파이프라인 <br/>
            </p>
          </div>

          <div>
            <h4 className={"m-0 mt-2"}>BackEnd</h4>
            <ul>
              <li>Spring / SpringBoot</li>
              <li>Jenkins</li>
              <li>Tomcat</li>
              <li>Java8</li>
              <li>Mysql</li>
            </ul>
            <p>
              AI 면접 백앤드<br/>
              채용 사이트 웹 솔루션 백앤드<br/>
              MariaDB 데이터 마이그레이션 / Query 튜닝<br/>
            </p>
          </div>

          <div>
            <h4 className={"m-0 mt-2"}>FrontEnd</h4>
            <ul>
              <li>ReactJS</li>
              <li>ES6</li>
              <li>Jquery</li>
              <li>VueJS</li>
            </ul>
            <p>
              AI 면접 프론트<br/>
              채용 사이트 웹 솔루션 프론트<br/>
              다국어 작업<br/>
            </p>
          </div>

          <h4 className={"font-bold mb-2"}>관심 기술</h4>
          <ul>
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