import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const Avatar = () => {
  const [isBouncing, setIsBouncing] = React.useState(false)

  return (
    <StaticImage src="../images/avatar.svg" alt="avatar"
      onClick={() => setIsBouncing(!isBouncing)}
      className={ `w-16 h-16 transition transform hover:scale-125 ${isBouncing ? 'animate-bounce' : ''}` }/>
  )
}

export default Avatar