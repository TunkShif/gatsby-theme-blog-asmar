import React from 'react'

const Column = ({mobile, children}) => {
  return (
    <div className="flex flex-wrap">
      {children.map((node, i) => 
        <div key={i} className={`md:px-4 ${mobile ? 'w-1/2 px-4' : 'md:w-1/2'} `}>{node}</div>)}
    </div>
  )
}

export default Column