import { Link } from '@reach/router'
import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import Heading from '../components/heading'
import Layout from '../components/layouts/layout'
import { navLink } from '../styles/link.module.css'

const TagsPage = () => {
  const { allMdx: { group } } = useStaticQuery(graphql`
    query AllTagsQuery {
      allMdx {
        group(field: frontmatter___tags) {
          tag: fieldValue,
          totalCount
        }
      }
    }
  `)

  return (
    <Layout title="All Tags">
      <Heading iconClass="fas fa-tags" title="All Tags" />
      <div className="flex flex-wrap my-6 text-xl">
        {group.map(tag =>
          <div className="flex items-center mx-4 my-2 ">
            <i className="mr-2 fas fa-tag"></i>
            <div className={navLink}>
              <Link to={`/tag/${tag.tag}`}>
                {tag.tag}
                <sup className="text-base font-bold text-gray-600">{tag.totalCount}</sup>
              </Link>
            </div>
          </div>
        )}
      </div>
    </Layout>
  )
}

export default TagsPage