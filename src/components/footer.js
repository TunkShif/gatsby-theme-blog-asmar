import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { footerLink } from '../styles/link.module.css'

const Footer = () => {
  const data = useStaticQuery(graphql`
    query SiteFooterInfoQuery {
      site {
        siteMetadata {
          author
          createDate
        }
      }
    }`)

  return(
    <footer className="flex justify-end text-gray-700 text-md">
      <p>
        {`${data.site.siteMetadata.createDate} © Copyright ${data.site.siteMetadata.author}`}
        {" | "}
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
