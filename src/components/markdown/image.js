import React from 'react'
import Zoom from 'react-medium-image-zoom'

const Image = ({ src, alt, width, height, url }) => {
  return (
    <figure className="flex flex-col items-center justify-center my-4">
        <Zoom >
          <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            className="max-w-full rounded-md md:max-w-md lg:max-w-lg" />
        </Zoom>
      <figcaption className="mt-2 text-center">
        <a href={url === undefined ? src : url}>{alt}</a>
      </figcaption>
    </figure>
  )
}

export default Image