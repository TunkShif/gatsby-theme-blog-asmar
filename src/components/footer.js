import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { footerLink } from '../styles/link.module.css'

const Footer = () => {
  const {site: {siteMetadata}} = useStaticQuery(graphql`
    query SiteFooterInfoQuery {
      site {
        siteMetadata {
          author
          createDate
        }
      }
    }`)

  const copyright = `${siteMetadata.createDate} © Copyright ${siteMetadata.author}`

  return(
    <footer className="flex flex-wrap justify-end pt-4 text-gray-700 border-t-2 border-gray-200 text-md">
      <p>{copyright}</p>
      <p className="hidden md:block md:mx-2">{" | "}</p>
      <p>
        <a className={footerLink} href="https://github.com/TunkShif/gatsby-theme-blog-asmar">Asmar</a>
        {" theme built with "}
        <a className={footerLink} href="https://www.gatsbyjs.com/">Gatsby</a>
        {" & "}
        <a className={footerLink} href="https://tailwindcss.com/">Tailwind CSS</a>
      </p>
    </footer>
  )
}

export default Footer
