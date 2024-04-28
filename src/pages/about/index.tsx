import React from "react"
import { PageProps } from "gatsby"

import * as classes from './style.module.css';
import { Layout } from "../../components/Layout"
import Skill from "../../components/About/Skill"

const Index: React.FC<PageProps> = () => {
  const dataEngineerSkills = ['Hadoop Ecosystem', 'Hbase', 'Java8', 'Jenkins', 'Spring', 'SpringBoot', 'VueJs', 'Puppeteer', 'Ansible'];
  const mlOpsSkills = ['Kubernetes', 'Kustomize', 'ArgoCD', 'Kubeflow', 'Airflow', 'PyTorch', 'Python3', 'Rust', 'MongoDB', 'S3'];
  const backEndSkills = ['Spring ', 'SpringBoot', 'Jenkins', 'Tomcat', 'Java8', 'Mysql'];
  const frontEndSkills = ['ReactJS', 'ES6', 'Jquery', 'TypeScript', 'VueJS', 'HTML', 'CSS'];

  return (
    <Layout>
      <section>
        <div className={classes.About}>
          <h2 className={"font-bold"}>Born to be DataEngineer.</h2>
          <p className={"mb-10"}>
            데이터를 잘 다루기 위해서 개발을 시작했습니다. <br/>
            <span className={"font-bold"}>Web FrontEnd/BackEnd, DataEngineer, MLOps </span>
            직무를 수행하면서 사용자에서 AI 모델까지 데이터 파이프라인을 경험했습니다.
            데이터를 잘 알고 데이터를 잘 활용하여 생활에 유용한 서비스를 만드는 것을
            사명으로 생각하면서 하나씩 쌓아가는 개발자로 성장하고 있습니다.
          </p>

          <Skill job={"DataEngineer"} skills={dataEngineerSkills}>
            &#128312;카카오 검색 서비스를 위한 블로그 데이터 수집<br/>
            &#128312;크롤러 개발 및 유지보수<br/>
            &#128312;하둡 클러스터와 API 서버들을 관리 및 모니터링<br/>
            &#128312;데이터 후처리를 위한 MapReduce 개발<br/>
            &#128312; Hbase 데이터 마이그레이션 작업 <br/>
          </Skill>

          <Skill job={"MLOps"} skills={mlOpsSkills}>
            &#128312;지식그래프 Name Entity Recognition(NER) / Entity Linking(EL) 모델 서빙<br/>
            &#128312;NER / EL 학습 파이프라인 개발<br/>
          </Skill>

          <Skill job={"BackEnd"} skills={backEndSkills}>
            &#128312;AI 면접 백앤드<br/>
            &#128312;채용 사이트 웹 솔루션 백앤드<br/>
            &#128312;MariaDB 데이터 마이그레이션 / Query 튜닝<br/>
          </Skill>

          <Skill job={"FrontEnd"} skills={frontEndSkills}>
            &#128312;AI 면접 프론트<br/>
            &#128312;채용 사이트 웹 솔루션 프론트<br/>
            &#128312;다국어 작업<br/>
          </Skill>

          <div className={"bg-amber-50 px-4 py-5 mb-4 shadow-sm"}>
            <h4 className={"font-bold m-0"}>관심 기술</h4>
            <ul>
              <li>&#128312;데이터 스트리밍 - Flink, Kafka</li>
              <li>&#128312;분산처리</li>
              <li>&#128312;AI 서비스</li>
              <li>&#128312;고양이</li>
            </ul>
          </div>

        </div>
      </section>
    </Layout>
  )
}

export default Index;