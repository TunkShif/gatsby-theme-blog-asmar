import React from 'react'
import Image from '../markdown/image'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'

const RandomKittyPic = () => {
  const pics = {
    desktop: [
      "https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
      "https://images.pexels.com/photos/821736/pexels-photo-821736.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      "https://images.pexels.com/photos/3069334/pexels-photo-3069334.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      "https://images.pexels.com/photos/3777622/pexels-photo-3777622.jpeg?cs=srgb&dl=pexels-just-a-couple-photos-3777622.jpg&fm=jpg",
      "https://images.pexels.com/photos/3616232/pexels-photo-3616232.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      "https://images.pexels.com/photos/2817405/pexels-photo-2817405.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
      "https://images.pexels.com/photos/4734723/pexels-photo-4734723.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
      "https://images.pexels.com/photos/2817430/pexels-photo-2817430.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    ],
    mobile: [
      "https://images.pexels.com/photos/1440403/pexels-photo-1440403.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      "https://images.pexels.com/photos/2064110/pexels-photo-2064110.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
      "https://images.pexels.com/photos/1787414/pexels-photo-1787414.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      "https://images.pexels.com/photos/4347501/pexels-photo-4347501.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    ]
  }

  const random = (max) => Math.floor(Math.random() * (max))

  const randomDesktopPic = pics.desktop[random(pics.desktop.length - 1)]
  const randomMobilePic = pics.mobile[random(pics.mobile.length - 1)]

  const breakpoints = useBreakpoint()

  return (
    <div>
      {!breakpoints.md ?
        <Image
          src={randomDesktopPic}
          width="300"
          height="500"
          alt="un gato" />
        :
        <Image
          src={randomMobilePic}
          alt="un gato" />
      }
    </div>
  )
}

export default RandomKittyPic