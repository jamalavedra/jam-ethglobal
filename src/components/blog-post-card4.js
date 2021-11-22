import React from 'react'

import PropTypes from 'prop-types'

const BlogPostCard4 = (props) => {
  return (
    <>
      <div className="blog-post-card">
        <img alt={props.image_alt} src={props.image_src} className="image" />
        <div className="container">
          <span className="text">{props.Position}</span>
          <span className="text1">{props.Title}</span>
          <div className="separator"></div>
          <span className="text2">{props.Votes}</span>
        </div>
      </div>
      <style jsx>
        {`
          .blog-post-card {
            width: 100%;
            display: flex;
            max-width: 1400px;
            box-shadow: 5px 5px 10px 0px rgba(18, 18, 18, 0.1);
            transition: 0.3s;
            flex-direction: column;
            justify-content: space-between;
          }
          .blog-post-card:hover {
            transform: scale(1.02);
          }
          .image {
            width: 100%;
            height: 100%;
            max-height: 50rem;
            object-fit: cover;
            border-radius: 0px;
          }
          .container {
            width: 100%;
            display: flex;
            padding: 32px;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
            background-color: var(--dl-color-gray-white);
          }
          .text {
            color: var(--dl-color-gray-500);
            margin-top: var(--dl-space-space-unit);
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
          }
          .text1 {
            font-size: 1.5rem;
            text-align: center;
            font-weight: 300;
          }
          .separator {
            width: 40%;
            height: 1px;
            margin-top: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-unit);
            background-color: var(--dl-color-gray-900);
          }
          .text2 {
            color: var(--dl-color-gray-700);
            font-weight: 700;
          }
        `}
      </style>
    </>
  )
}

BlogPostCard4.defaultProps = {
  Position: 'Position X',
  image_src:
    'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHZlbmljZXxlbnwwfHx8fDE2MjYyNzIyOTA&ixlib=rb-1.2.1&w=1000',
  Votes: 'Total Votes:',
  image_alt: 'image',
  Title: 'Lorem ipsum lorem ipsum dolor sit amet, consectetur adipiscing elit.',
}

BlogPostCard4.propTypes = {
  Position: PropTypes.string,
  image_src: PropTypes.string,
  Votes: PropTypes.string,
  image_alt: PropTypes.string,
  Title: PropTypes.string,
}

export default BlogPostCard4
