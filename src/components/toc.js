import React, { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { toc } from '../styles/toc.module.css'

/**
 * Thanks to the following tutorials for helping me finish this ToC Component :3
 * https://haseebmajid.dev/blog/toc-in-gatsby
 * https://codepen.io/bramus/pen/ExaEqMJ
 * https://www.emgoto.com/react-table-of-contents/
 */

const ToC = ({ headings }) => {

  const toKebabCase = str => str.replace(/\s+/g, "-").toLowerCase()

  const isMobile = useMediaQuery({minWidth: 1024})

  const [activeId, setActiveId] = useState()

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const id = entry.target.getAttribute("id")
        if (entry.isIntersecting) {
          setActiveId(id)
        }
      })
    }, {
      rootMargin: "220px 0px -90% 0px"
    })

    document.querySelectorAll("h1[id], h2[id], h3[id], h4[id], h5[id]")
      .forEach(element => observer.observe(element))

    return () => observer.disconnect()
  })

  return (
    <nav className={`${toc} xl:fixed xl:left-6 xl:inset-y-0 xl:py-4 xl:pr-2 xl:w-80 xl:h-full xl:text-gray-400 xl:text-lg xl:overflow-y-auto`}>
      <details open={isMobile ? true : false}>
        <summary>
          <div className="flex items-baseline justify-start pb-4 mb-4 text-xl text-gray-800 border-b-2 border-gray-300 md:text-2xl">
            <i className="mr-2 fas fa-caret-right"></i>
            <span className="font-bold hover:text-yellow-800 hover:underline focus:text-yellow-800 focus:underline">
              {"Table of Contents".toUpperCase()}
            </span>
          </div>
        </summary>
        <ul>
          {headings.map(({ depth, value }) => {
            const id = toKebabCase(value)
            const margins = {
              1: "", 2: "ml-2", 3: "ml-4", 4: "ml-6", 5: "ml-8"
            }
            return (
              <li key={id} className="my-2">
                <a
                  href={id}
                  className={`${id === activeId ? 'text-gray-800 font-bold' : ''} ${margins[depth]} hover:underline hover:text-gray-800`}
                  onClick={e => {
                    e.preventDefault()
                    document.querySelector(`#${id}`).scrollIntoView({
                      behavior: 'smooth'
                    })
                  }} >{value}</a>
              </li>
            )
          })}
        </ul>
      </details>
    </nav>
  )
}

export default ToC
