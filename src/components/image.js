import React from 'react'

import PropTypes from 'prop-types'

const Image = (props) => {
  return (
    <>
      <div className="container">
        <img alt={props.image_alt} src={props.image_src} className="image" />
      </div>
      <style jsx>
        {`
          .container {
            display: flex;
            position: relative;
          }
          .image {
            width: 359px;
            height: 344px;
            object-fit: cover;
          }
        `}
      </style>
    </>
  )
}

Image.defaultProps = {
  image_src: '/playground_assets/download-400h.png',
  image_alt: 'image',
}

Image.propTypes = {
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
}

export default Image
