import React from 'react'

const Heading = ({iconClass, title}) => {
  return (
    <header className="flex items-center justify-start my-6 ml-4 text-3xl font-bold">
      <span className="mr-4 hover:animate-bounce focus:animate-bounce hover:text-yellow-900 focus:text-yellow-900">
        <i className={iconClass}></i>
      </span>
      <h1>{title}</h1>
    </header>
  )
}

export default Heading