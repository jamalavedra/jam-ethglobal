import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import FeatureCard1 from '../components/feature-card1'

const VOTE11 = () => {
  return (
    <>
      <div className="container">
        <Head>
          <title>VOTE11 - Portfolio Page</title>
          <meta property="og:title" content="VOTE11 - Portfolio Page" />
        </Head>
        <div className="navbar-container">
          <div className="navbar">
            <span className="card-Heading heading">MARCHANT</span>
            <div className="links-container">
              <Link href="/s-t-a-r-t11">
                <a className="link1 navbar-Link">START</a>
              </Link>
              <span className="link2 navbar-Link">VOTE</span>
              <Link href="/l-e-a-d-e-r-b-o-a-r-d1">
                <a className="link4 navbar-Link">LEADERBOARD</a>
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
              The Marchant vote starts in XXh:XXm:XXs
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </h2>
          <button className="button">Set a Reminder</button>
        </div>
        <div className="features">
          <h1 className="text2">Previous Lots</h1>
          <div className="container1">
            <FeatureCard1 rootClassName="rootClassName"></FeatureCard1>
            <FeatureCard1 rootClassName="rootClassName1"></FeatureCard1>
            <FeatureCard1 rootClassName="rootClassName2"></FeatureCard1>
            <FeatureCard1 rootClassName="rootClassName3"></FeatureCard1>
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
          .links-container {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .link1 {
            margin-right: var(--dl-space-space-tripleunit);
            text-decoration: none;
          }
          .link2 {
            margin-right: var(--dl-space-space-tripleunit);
            text-decoration: underline;
          }
          .link4 {
            margin-right: var(--dl-space-space-tripleunit);
            text-decoration: none;
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
            height: 248px;
            display: flex;
            padding: 48px;
            align-items: center;
            flex-direction: row;
            background-size: cover;
            justify-content: center;
            background-image: url('/playground_assets/main-image-1500w.png');
            background-repeat: repeat-x;
            background-position: center;
          }
          .text {
            margin: var(--dl-space-space-halfunit);
            text-align: left;
            font-weight: 600;
          }
          .button {
            transition: 0.3s;
            margin-left: var(--dl-space-space-doubleunit);
          }
          .button:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-gray-black);
          }
          .features {
            width: 100%;
            display: flex;
            padding: 48px;
            max-width: 1400px;
            flex-direction: column;
          }
          .text2 {
            font-size: 3rem;
            margin-bottom: 48px;
          }
          .container1 {
            flex: 0 0 auto;
            width: 100%;
            display: grid;
            grid-gap: 32px;
            align-items: flex-start;
            grid-template-columns: 1fr 1fr 1fr 1fr;
          }
          @media (max-width: 991px) {
            .heading {
              text-align: center;
            }
            .text {
              text-align: center;
            }
            .text2 {
              align-self: center;
            }
            .container1 {
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
            .features {
              padding-top: 32px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: 32px;
            }
            .container1 {
              grid-gap: var(--dl-space-space-halfunit);
            }
          }
        `}
      </style>
    </>
  )
}

export default VOTE11
