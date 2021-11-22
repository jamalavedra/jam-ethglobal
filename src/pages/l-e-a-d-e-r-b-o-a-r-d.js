import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import FeatureCard11 from '../components/feature-card11'

const LEADERBOARD = () => {
  return (
    <>
      <div className="container">
        <Head>
          <title>LEADERBOARD - Portfolio Page</title>
          <meta property="og:title" content="LEADERBOARD - Portfolio Page" />
        </Head>
        <div className="navbar-container">
          <div className="navbar">
            <Link href="/s-t-a-r-t11">
              <a className="link card-Heading">MARCHANT</a>
            </Link>
            <div className="links-container">
              <Link href="/s-t-a-r-t11">
                <a className="link2 navbar-Link">START</a>
              </Link>
              <Link href="/v-o-t-e">
                <a className="link4 navbar-Link">VOTE</a>
              </Link>
              <Link href="/l-e-a-d-e-r-b-o-a-r-d">
                <a className="link6 navbar-Link">LEADERBOARD</a>
              </Link>
              <span className="navbar-Link">WALLET CONNECTED</span>
            </div>
            <div className="burger-menu">
              <svg viewBox="0 0 1024 1024" className="icon">
                <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="section-separator"></div>
        <div className="banner">
          <h2 className="text">
            <span>
              Live Leaderboard XXh:XXm:XXs
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </h2>
        </div>
        <div className="blog">
          <div className="blog-post-card">
            <img
              alt="image"
              src="/playground_assets/download%20%5B1%5D-300h.png"
              className="image"
            />
            <div className="container1">
              <span className="text02">Position 2</span>
              <span className="text03 content">Barcelona from the air</span>
              <div className="separator"></div>
              <span className="text04">Total Votes:</span>
            </div>
          </div>
          <div className="blog-post-card1">
            <img
              alt="image"
              src="/playground_assets/download-300h.png"
              className="image1"
            />
            <div className="container2">
              <span className="text05">Position 1</span>
              <span className="text06 content">Astronaut in the Ski</span>
              <div className="separator1"></div>
              <span className="text07">Total Votes:</span>
            </div>
          </div>
          <div className="blog-post-card2">
            <img
              alt="image"
              src="/playground_assets/download%20%5B3%5D-400h.png"
              className="image2"
            />
            <div className="container3">
              <span className="text08">Position 3</span>
              <span className="text09 content">Dali&apos;s sunglasses</span>
              <div className="separator2"></div>
              <span className="text10">Total Votes:</span>
            </div>
          </div>
        </div>
        <div className="features">
          <div className="container4">
            <FeatureCard11 rootClassName="rootClassName"></FeatureCard11>
            <FeatureCard11 rootClassName="rootClassName1"></FeatureCard11>
            <FeatureCard11 rootClassName="rootClassName2"></FeatureCard11>
            <FeatureCard11 rootClassName="rootClassName3"></FeatureCard11>
            <FeatureCard11 rootClassName="rootClassName7"></FeatureCard11>
            <FeatureCard11 rootClassName="rootClassName6"></FeatureCard11>
            <FeatureCard11 rootClassName="rootClassName5"></FeatureCard11>
            <FeatureCard11 rootClassName="rootClassName4"></FeatureCard11>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .container {
            width: 100%;
            height: auto;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .navbar-container {
            width: 100%;
            display: flex;
            z-index: 100;
            position: fixed;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-gray-white);
          }
          .navbar {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxcontent);
            align-items: center;
            padding-top: var(--dl-space-space-tripleunit);
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-tripleunit);
            justify-content: space-between;
          }
          .link {
            text-decoration: none;
          }
          .links-container {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .link2 {
            margin-right: var(--dl-space-space-tripleunit);
            text-decoration: none;
          }
          .link4 {
            margin-right: var(--dl-space-space-tripleunit);
            text-decoration: none;
          }
          .link6 {
            margin-right: var(--dl-space-space-tripleunit);
            text-decoration: underline;
          }
          .burger-menu {
            display: none;
            align-items: flex-start;
            flex-direction: column;
          }
          .icon {
            width: 36px;
            height: 36px;
          }
          .section-separator {
            width: 100%;
            height: 1px;
            display: flex;
            margin-top: var(--dl-space-space-tenunits);
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .banner {
            width: 100%;
            height: 106px;
            display: flex;
            padding: 48px;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: row;
            background-size: auto;
            justify-content: flex-start;
            background-image: url('/playground_assets/main-image-1500w.png');
            background-repeat: repeat-x;
            background-position: center;
          }
          .text {
            color: #060404;
            height: 41px;
            margin: var(--dl-space-space-halfunit);
            text-align: left;
            font-weight: 600;
          }
          .blog {
            width: 100%;
            display: flex;
            padding: 48px;
            max-width: 1400px;
            align-items: center;
            justify-content: space-between;
          }
          .blog-post-card {
            width: 300px;
            height: 480px;
            display: flex;
            max-width: 1400px;
            box-shadow: 5px 5px 10px 0px rgba(18, 18, 18, 0.1);
            margin-top: var(--dl-space-space-fiveunits);
            transition: 0.3s;
            flex-direction: column;
            justify-content: space-between;
          }
          .blog-post-card:hover {
            transform: scale(1.02);
          }
          .image {
            width: 100%;
            height: 298px;
            max-height: 50rem;
            object-fit: cover;
            border-radius: 0px;
          }
          .container1 {
            width: 100%;
            display: flex;
            padding: 32px;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
            background-color: var(--dl-color-gray-white);
          }
          .text02 {
            color: var(--dl-color-gray-500);
            margin-top: var(--dl-space-space-unit);
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
          }
          .text03 {
            text-align: center;
          }
          .separator {
            width: 40%;
            height: 1px;
            margin-top: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-unit);
            background-color: var(--dl-color-gray-900);
          }
          .text04 {
            color: var(--dl-color-gray-700);
            font-weight: 700;
          }
          .blog-post-card1 {
            width: 300px;
            display: flex;
            max-width: 1400px;
            box-shadow: 5px 5px 10px 0px rgba(18, 18, 18, 0.1);
            transition: 0.3s;
            margin-left: var(--dl-space-space-tripleunit);
            margin-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
            justify-content: space-between;
          }
          .blog-post-card1:hover {
            transform: scale(1.02);
          }
          .image1 {
            width: 100%;
            height: 293px;
            max-height: 50rem;
            object-fit: cover;
            border-radius: 0px;
          }
          .container2 {
            width: 100%;
            display: flex;
            padding: 32px;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
            background-color: var(--dl-color-gray-white);
          }
          .text05 {
            color: var(--dl-color-gray-500);
            margin-top: var(--dl-space-space-unit);
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
          }
          .text06 {
            text-align: center;
          }
          .separator1 {
            width: 40%;
            height: 1px;
            margin-top: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-unit);
            background-color: var(--dl-color-gray-900);
          }
          .text07 {
            color: var(--dl-color-gray-700);
            font-weight: 700;
          }
          .blog-post-card2 {
            width: 300px;
            height: 458px;
            display: flex;
            max-width: 1400px;
            box-shadow: 5px 5px 10px 0px rgba(18, 18, 18, 0.1);
            margin-top: var(--dl-space-space-tenunits);
            transition: 0.3s;
            flex-direction: column;
            justify-content: space-between;
          }
          .blog-post-card2:hover {
            transform: scale(1.02);
          }
          .image2 {
            width: 100%;
            height: 333px;
            max-height: 50rem;
            object-fit: cover;
            border-radius: 0px;
          }
          .container3 {
            width: 100%;
            display: flex;
            padding: 32px;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
            background-color: var(--dl-color-gray-white);
          }
          .text08 {
            color: var(--dl-color-gray-500);
            margin-top: var(--dl-space-space-unit);
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
          }
          .text09 {
            text-align: center;
          }
          .separator2 {
            width: 40%;
            height: 1px;
            margin-top: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-unit);
            background-color: var(--dl-color-gray-900);
          }
          .text10 {
            color: var(--dl-color-gray-700);
            font-weight: 700;
          }
          .features {
            width: 100%;
            display: flex;
            padding: 48px;
            max-width: 1400px;
            flex-direction: column;
          }
          .container4 {
            flex: 0 0 auto;
            width: 100%;
            display: grid;
            grid-gap: 32px;
            align-items: flex-start;
            grid-template-columns: 1fr 1fr 1fr 1fr;
          }
          @media (max-width: 991px) {
            .link {
              text-align: center;
            }
            .text {
              text-align: center;
            }
            .container4 {
              grid-template-columns: 1fr 1fr;
            }
          }
          @media (max-width: 767px) {
            .links-container {
              display: none;
            }
            .burger-menu {
              display: flex;
              padding: var(--dl-space-space-halfunit);
              margin-left: var(--dl-space-space-tripleunit);
              border-radius: var(--dl-radius-radius-radius4);
              background-color: var(--dl-color-gray-black);
            }
            .icon {
              fill: var(--dl-color-gray-white);
            }
            .banner {
              padding-left: 32px;
              padding-right: 32px;
            }
            .blog {
              padding-left: 32px;
              padding-right: 32px;
              flex-direction: column;
            }
            .features {
              padding-left: 32px;
              padding-right: 32px;
            }
          }
          @media (max-width: 479px) {
            .burger-menu {
              margin-left: var(--dl-space-space-doubleunit);
            }
            .banner {
              padding-top: 32px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: 32px;
            }
            .blog {
              padding-top: 32px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: 32px;
            }
            .features {
              padding-top: 32px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: 32px;
            }
            .container4 {
              grid-gap: var(--dl-space-space-halfunit);
            }
          }
        `}
      </style>
    </>
  )
}

export default LEADERBOARD
