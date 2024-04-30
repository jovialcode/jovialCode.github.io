import * as React from "react"
import type { PageProps } from "gatsby"

import { Layout } from "../components/layout/layout"
import Project from "../components/playground/project"
import { StaticImage } from "gatsby-plugin-image"
import speaksALotGif from '../static/images/speaksalot.gif'
import algoProfilePng from '../static/images/algorithm_profile.png'

const Index: React.FC<PageProps> = () => {
  return (
    <Layout>
      <section>
        <h2>Playground</h2>
        <div className={"grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-6"}>

          <Project title={"Speaksalot"} tags={["gpt-3.5", "python3", "reactJS", "fastAPI"]}>
            <div className={"flex flex-col items-center"}>
              <a className={"block relative"} href={"https://speaksalot.com"} target={"_blank"}>
                <img className={"absolute top-3 left-1"} width={190} src={speaksALotGif} alt={"project"}/>
                <StaticImage width={200} src={"../static/images/phone.png"} alt={"project"}/>
              </a>

              <p className={"mt-3"}>
                - GPT와 음성을 활용하여 영어 회화 공부<br/>
                - STT / TTS / Prompt를 활용하여 AI가 Follow Up Question을 제공 <br/>
              </p>
            </div>
          </Project>

          <Project title={"Crawler"} tags={["java", "multi-threading", "kafka", "mysql", "flink", "mongoDB", "event-driven", "reactJS"]}>
            <div className={"flex flex-col"}>
              <StaticImage width={200} src={"../static/images/phone.png"} alt={"project"}/>
              <p className={"mt-3"}>
                - 필요한 각종 데이터를 수집 <br/>
                - 스트리밍 데이터 처리 <br/>
              </p>
            </div>
          </Project>

          <Project title={"Algorithm"} tags={["java"]} image={"../../static/images/algorithm_profile.png"}>
            <div className={"flex flex-col"}>
              <a className={"block relative"} href={"https://www.acmicpc.net/user/zealtez"} target={"_blank"}>
                <img className={"absolute top-2 left-1"} width={190} src={algoProfilePng} alt={"project"}/>
                <StaticImage width={200} src={"../static/images/phone.png"} alt={"project"}/>
              </a>

              <p className={"mt-3"}>
                - leetcode <br/>
                - baekjoon <br/>
              </p>
            </div>
          </Project>
        </div>
      </section>
    </Layout>
  )
}

export default Index