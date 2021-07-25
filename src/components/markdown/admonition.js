import React from 'react'
import {admonition} from '../../styles/admonition.module.css'

const Admonition = ({type, title, children, open}) => {

  const types = {
    info: {
      iconClass: "fas fa-info-circle",
      color: {
        bg: "bg-blue-200",
        icon: "text-blue-400",
        border: "border-blue-400"
      }
    },
    warning: {
      iconClass: "fas fa-exclamation-triangle",
      color: {
        bg: "bg-red-200",
        icon: "text-red-400",
        border: "border-red-400"
      }
    },
    important: {
      iconClass: "fas fa-exclamation-circle",
      color: {
        bg: "bg-indigo-200",
        icon: "text-indigo-400",
        border: "border-indigo-400"
      }
    },
    tip: {
      iconClass: "fas fa-pencil-alt",
      color: {
        bg: "bg-green-200",
        icon: "text-green-400",
        border: "border-green-400"
      }
    }
  }

  if (types[type] === undefined) type = "info"
  let { iconClass, color } = types[type]

  return (
    <div className={`${admonition} py-2`}>
      <details className={`${color.border} bg-white border-l-4 rounded-md shadow-sm `} open={open}>
        <summary className={`${color.bg} rounded-tr-md `}>
          <div className="flex items-baseline justify-start p-2 text-lg md:text-xl">
            <i className={`${color.icon} ${iconClass} mr-2 md:mr-4`}></i>
            <span className="font-bold text-gray-800">{title}</span>
          </div>
        </summary>
        <div className="py-1 pl-2">
          {children}
        </div>
      </details>
    </div>
  )
}

export default Admonition