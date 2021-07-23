import React from 'react'
import DateTime from './date'
import Tags from './tags'
import { Link } from 'gatsby'
import { navLink } from '../styles/link.module.css'

const Post = ({title, date, desc, tags, slug}) => {
  return (
    <div className="flex justify-start my-10">
      <DateTime date={date} />
      <div className="flex flex-col items-start justify-center w-auto pl-2 md:pl-4">
        <h1 className={`${navLink} mb-1 text-xl font-bold text-gray-800 md:text-2xl` }>
          <Link to={`/${slug}`}>{title}</Link>
        </h1>
        {tags.length !== 0 && <Tags tags={tags}></Tags>}
        <p className="mt-1 text-lg font-medium text-gray-700 md:text-xl">{desc}</p>
      </div>
    </div>
  )
}

export default Post