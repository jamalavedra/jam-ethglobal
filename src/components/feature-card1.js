import React from 'react'

import PropTypes from 'prop-types'

const FeatureCard1 = (props) => {
  return (
    <>
      <div className="feature-card">
        <h2 className="text">{props.title}</h2>
        <img alt={props.image_alt} src={props.image_src} className="image" />
      </div>
      <style jsx>
        {`
          .feature-card {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            max-width: 1400px;
            box-shadow: 5px 5px 10px 0px rgba(18, 18, 18, 0.1);
            transition: 0.3s;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .feature-card:hover {
            transform: scale(1.02);
          }
          .text {
            margin-bottom: 32px;
          }
          .image {
            width: 96px;
            height: 96px;
            object-fit: cover;
            border-radius: 4px;
          }
        `}
      </style>
    </>
  )
}

FeatureCard1.defaultProps = {
  image_alt: 'image',
  image_src:
    'https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHllbGxvdyUyMHRlY2h8ZW58MHx8fHwxNjI2MjU1NDk0&ixlib=rb-1.2.1&w=1000',
  rootClassName: '',
  title: 'Date <Pool Price>',
}

FeatureCard1.propTypes = {
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
  rootClassName: PropTypes.string,
  title: PropTypes.string,
}

export default FeatureCard1
