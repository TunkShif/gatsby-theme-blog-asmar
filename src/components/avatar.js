import React, { useState } from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const Avatar = () => {
  const [isBouncing, setIsBouncing] = useState(false)

  return (
    <StaticImage src="../assets/images/avatar.svg" alt="avatar"
      onClick={() => setIsBouncing(!isBouncing)}
      className={ `w-16 h-16 transition duration-500 ease-in-out transform hover:scale-125 ${isBouncing ? 'animate-bounce' : ''}` }/>
  )
}

export default Avatar