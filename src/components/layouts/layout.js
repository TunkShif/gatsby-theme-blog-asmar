import React from 'react'
import Header from '../header.js'
import Footer from '../footer.js'
import { graphql, useStaticQuery } from 'gatsby'

const Layout = ({ title, children }) => {

  const { site: { siteMetadata } } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <main className="p-4 mx-auto md:p-10 xl:w-1/2">
      <title>{`${title} | ${siteMetadata.title}`}</title>
      <Header />
      {children}
      <Footer /> 
    </main>
  )
}

export default Layout
