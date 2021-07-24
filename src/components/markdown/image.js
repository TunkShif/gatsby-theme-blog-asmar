import React from 'react'
import Zoom from 'react-medium-image-zoom'
import { image } from '../../styles/image.module.css'

const Image = ({ src, alt, width, height, url }) => {
  return (
    <figure className={`${image} flex flex-col items-center justify-center my-4`}>
        <Zoom >
          <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            className="max-w-full rounded-md md:max-w-md lg:max-w-lg" />
        </Zoom>
      <figcaption className="mt-2 text-center border-b-4 border-gray-200 hover:border-gray-300">
        <a id="figure-caption-link" href={url === undefined ? src : url}>{alt}</a>
      </figcaption>
    </figure>
  )
}

export default Image