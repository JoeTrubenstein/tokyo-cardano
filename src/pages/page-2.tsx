// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link } from "gatsby"

import Layout from "../components/Layout"
import SeoWrapper from "../components/SeoWrapper"

const SecondPage = (props: PageProps) => (
  <Layout>
    <SeoWrapper title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2 ({props.path})</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
