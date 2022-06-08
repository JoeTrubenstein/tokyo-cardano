import React from "react"
import Layout from "../components/Layout"
import SeoWrapper from "../components/SeoWrapper"
import Hero from "../components/Hero"
import Blog from "../components/Blog"
import Speakers from "../components/Speakers"
// import SummitFeatures from "../components/SummitFeatures"
// import CnftFeed from "../components/CnftFeed"

const IndexPage = () => (
  <div className="dark:bg-nightBack dark:text-white bg-white" >
    <SeoWrapper title="Home" />
    <Layout>
      <Hero />
      <Speakers />
      {/* <SummitFeatures /> */}
      {/* <CnftFeed /> */}
      <Blog />
    </Layout>
  </div>
)

export default IndexPage
