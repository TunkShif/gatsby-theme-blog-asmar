import React from 'react'
import Avatar from './avatar'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { button } from '../styles/button.module.css'
import { navLink } from '../styles/link.module.css'

const SocialButton = ({ iconClass, url }) => {
  return (
    <a href={url} className={`px-1 ${button}`}>
      <i className={iconClass}></i>
    </a>
  )
}

const DarkModeButton = () => {
  return (
    <button className={`px-1 ${button}`}>
      <i className="fas fa-adjust"></i>
    </button>
  )
}

const Header = () => {
  const data = useStaticQuery(graphql`
    query SiteMetadataQuery {
      site {
        siteMetadata {
          title
          subtitle
        }
      }
    }`)

  const navs = [
    {
      name: "Home",
      link: "/"
    },
    {
      name: "Posts",
      link: "/posts"
    },
    {
      name: "Tags",
      link: "/tags"
    },
    {
      name: "About",
      link: "/about"
    }
  ]

  return (
    <header>
      <div className="flex items-center pb-2">
        <Avatar />
        <div className="flex items-center justify-between w-full pl-3">
          <div className="flex flex-col justify-between">
            <h1 className="text-2xl font-bold text-yellow-900 transition duration-500 ease-in-out transform hover:scale-125">
              <Link to="/">{data.site.siteMetadata.title}</Link>
            </h1>
            <h2 className="text-lg italic font-medium text-gray-700">{data.site.siteMetadata.subtitle}</h2>
          </div>
          <div className="flex items-center justify-center text-2xl">
            <SocialButton iconClass="fab fa-github" url="#" />
            <DarkModeButton />
          </div>
        </div>
      </div>
      <nav className="flex justify-around py-2 text-lg font-bold border-t-2 border-b-2 border-gray-200">
        {navs.map(nav => <Link className={navLink} to={nav.link}>{nav.name.toUpperCase()}</Link>)}
      </nav>
    </header>
  )
}

export default Header
