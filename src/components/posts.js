import * as React from 'react'
import DateTime from './date'
import Tags from './tags'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { navLink } from '../styles/link.module.css'

const Post = ({title, date, desc, tags, slug}) => {
  return (
    <div className="flex justify-start py-4">
      <DateTime date={date} />
      <div className="flex flex-col items-start justify-center w-auto pl-2 md:pl-4">
        <h1 className={`${navLink} mb-1 text-xl font-bold text-gray-800 md:text-2xl` }>
          <Link to={slug}>{title}</Link>
        </h1>
        {tags.length !== 0 && <Tags tags={tags}></Tags>}
        <p className="mt-1 text-lg font-medium text-gray-700 md:text-xl">{desc}</p>
      </div>
    </div>
  )
}

const AllPosts = () => {
  const { allMdx } = useStaticQuery(graphql`
    query BlogPostsListQuery {
      allMdx(filter: {slug: {regex: "/^posts\//"}}) {
        nodes {
          id
          slug
          frontmatter {
            title
            tags
            desc
            date(formatString: "YYYY-MM-D")
          }
        }
      }
    }`)

  return (
    <div>
      {allMdx.nodes.length !== 0 && allMdx.nodes.map(node => 
        <Post key={node.id}
              title={node.frontmatter.title}
              date={node.frontmatter.date}
              desc={node.frontmatter.desc}
              tags={node.frontmatter.tags}
              slug={node.slug} />
      )}
    </div>
  )
}

export default AllPosts
