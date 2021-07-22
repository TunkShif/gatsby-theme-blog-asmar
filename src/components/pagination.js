import { Link } from '@reach/router'
import React from 'react'
import { navLink } from '../styles/link.module.css'

const Pagination = ({current, total, prev, next}) => {
  console.log(prev + "\n" + next)
  return (
    <div className="flex items-center justify-end py-2 text-2xl">
      {prev &&
        <Link to={prev} className={`${navLink} font-bold`}>
          <i class="fas fa-long-arrow-alt-left"></i>
        </Link>
      }

      <span className="mx-2 font-medium ">{`${current}/${total}`}</span>

      {next &&
        <Link to={next} className={`${navLink} font-bold`}>
          <i class="fas fa-long-arrow-alt-right"></i>
        </Link>
      }
      <span className="ml-2 hover:animate-spin focus:animate-spin hover:text-yellow-900 focus:text-yellow-900">
        <i className="fas fa-paw"></i>
      </span>
    </div>
  )
}

export default Pagination