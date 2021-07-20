import * as React from 'react'
import { navLink } from '../styles/link.module.css'
import { tag as tagStyle} from '../styles/tag.module.css'

const Tags = ({tags}) => {
  return (
    <div className="flex items-center justify-start py-1 text-lg text-gray-700">
      <div className="pr-2">
        <i className="fas fa-tag"></i>
      </div>
      <div className="flex">
        {tags.map(tag => 
          <span className={`${navLink} ${tagStyle} mr-1 font-medium` }><a href="#">{tag}</a></span>)}
      </div>
    </div>
  )
}

export default Tags