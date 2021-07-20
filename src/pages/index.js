import * as React from "react"
import Layout from '../components/layout.js'
import AllPosts from "../components/posts"

const IndexPage = () => {
  return (
    <Layout title="Asmar" >
      <AllPosts />
    </Layout>
  )
}

export default IndexPage
