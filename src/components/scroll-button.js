import React, { useEffect, useState } from 'react'

const ScrollButton = () => {

  const [isVisible, setIsVisible] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    const toggletVisibility = () => {
      if (window.pageYOffset > 400) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggletVisibility)

    return () => window.removeEventListener("scroll", toggletVisibility)
  })

  return (
    <div className="fixed right-2 md:right-10 bottom-10">
      {isVisible &&
        <button
          className="w-10 h-10 text-gray-700 transition duration-300 ease-in-out bg-white rounded-full shadow-md hover:bg-gray-100 focus:bg-gray-100 hover:text-gray-500 focus:text-gray-500"
          onClick={scrollToTop}>
          <i className="fas fa-chevron-up"></i>
        </button>
      }
    </div>
  )
}

export default ScrollButton