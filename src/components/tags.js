import { Link } from 'gatsby'
import React from 'react'
import { navLink } from '../styles/link.module.css'
import { tag as tagStyle} from '../styles/tag.module.css'

const Tags = ({tags}) => {
  return (
    <div className="flex items-center justify-start py-1 text-lg text-gray-700">
      <div className="pr-2 hover:animate-bounce focus:animate-bounce hover:text-yellow-900 focus:text-yellow-900">
        <i className="fas fa-tag"></i>
      </div>
      <div className="flex flex-wrap">
        {tags.map(tag =>
          <span key={tag} className={`${navLink} ${tagStyle} mr-1 font-medium`}>
            <Link to={`/tag/${tag}`}>{tag}</Link>
          </span>)}
      </div>
    </div>
  )
}

export default Tags