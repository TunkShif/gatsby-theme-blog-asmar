import * as React from 'react'
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
    <div className="flex justify-end text-gray-700 text-md">
      <p>
        {`${data.site.siteMetadata.createDate} © Copyright ${data.site.siteMetadata.author}`}
        {" | "}
        <a className={footerLink} href="#">Asmar</a>
        {" theme built with "}
        <a className={footerLink} href="https://www.gatsbyjs.com/">Gatsby</a>
        {" & "}
        <a className={footerLink} href="https://tailwindcss.com/">Tailwind CSS</a>
      </p>
    </div>
  )
}

export default Footer
