import { Link } from "gatsby"
import React from "react"
import Layout from '../components/layouts/layout'

const IndexPage = () => {
  return (
    <Layout title="Asmar" >
      <p className="p-10 text-4xl text-center">
        NOT DONE YET : 3
      </p>
      <p className="p-10 text-2xl text-center">
        Check out the <Link className="text-yellow-800 hover:underline" to="/posts">posts</Link> page for now!
      </p>
    </Layout>
  )
}

export default IndexPage
