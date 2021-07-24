import React from 'react'
import Layout from '../components/layouts/layout'
import { StaticImage } from 'gatsby-plugin-image'

const NotFoundPage = () => {
  return (
    <Layout title="404 Not Found">
      <div className="flex justify-center my-10">
        <StaticImage
          src="../assets/images/404_not_found.png"
          alt="cute kitty telling you 404 not found"
          quality={100} />
      </div>
    </Layout>
  )
}

export default NotFoundPage
