import React from 'react'
import Zoom from 'react-medium-image-zoom'

const Image = ({ src, alt, width, height }) => {
  return (
    <figure className="flex flex-col items-center justify-center my-4">
        <Zoom >
          <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            className="max-w-full rounded-md md:max-w-lg" />
        </Zoom>
      <figcaption className="mt-2 text-center">{alt}</figcaption>
    </figure>
  )
}

export default Image