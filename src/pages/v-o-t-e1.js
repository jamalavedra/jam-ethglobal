import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

const VOTE1 = () => {
  return (
    <>
      <div className="container">
        <Head>
          <title>VOTE1 - Portfolio Page</title>
          <meta property="og:title" content="VOTE1 - Portfolio Page" />
        </Head>
        <div className="navbar-container">
          <div className="navbar">
            <span className="card-Heading heading">MARCHANT</span>
            <div className="links-container">
              <Link href="/s-t-a-r-t11">
                <a className="link1 navbar-Link">START</a>
              </Link>
              <Link href="/v-o-t-e">
                <a className="link3 navbar-Link">VOTE</a>
              </Link>
              <span className="link4 navbar-Link">LEADERBOARD</span>
              <span className="link5">WALLET CONNECTED</span>
            </div>
            <div className="burger-menu">
              <svg viewBox="0 0 1024 1024" className="icon">
                <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="section-separator"></div>
        <div className="hero">
          <img
            alt="image"
            src="/playground_assets/download-1500h.png"
            className="image"
          />
          <div className="container1">
            <h1 className="text">Astronaut in the ski</h1>
            <h2 className="text1">Time left to Vote: XXh:XXm:XXs</h2>
            <div className="btn-group">
              <Link href="/l-e-a-d-e-r-b-o-a-r-d">
                <a className="link6 button">Vote now</a>
              </Link>
            </div>
            <span className="text2">
              <span>
                Voting open on Saturday Midnight and closes Sunday Midnight.
              </span>
              <br></br>
              <span></span>
              <br></br>
              <span>
                In the meantime, promote your art and get people hype to vote
                you!
              </span>
            </span>
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
            text-decoration: underline;
          }
          .link3 {
            margin-right: var(--dl-space-space-tripleunit);
            text-decoration: none;
          }
          .link4 {
            margin-right: var(--dl-space-space-tripleunit);
          }
          .link5 {
            font-size: 18px;
            font-style: normal;
            text-align: right;
            font-family: Overpass;
            font-weight: 500;
            line-height: 1.55;
            text-transform: uppercase;
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
          .hero {
            width: 100%;
            height: 100%;
            display: flex;
            padding: 32px;
            max-width: 1400px;
            min-height: 80vh;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .image {
            width: 25rem;
            object-fit: cover;
          }
          .container1 {
            width: 673px;
            display: flex;
            align-self: center;
            align-items: flex-start;
            margin-left: 32px;
            flex-direction: column;
            justify-content: flex-start;
          }
          .text {
            font-size: 3rem;
          }
          .text1 {
            margin-top: var(--dl-space-space-unit);
            font-weight: 600;
            margin-bottom: var(--dl-space-space-unit);
          }
          .btn-group {
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .link6 {
            color: var(--dl-color-gray-white);
            transition: 0.3s;
            padding-top: var(--dl-space-space-unit);
            padding-left: 32px;
            padding-right: 32px;
            padding-bottom: var(--dl-space-space-unit);
            text-decoration: none;
            background-color: var(--dl-color-gray-black);
          }
          .link6:hover {
            transform: scale(1.02);
            background-color: #292121;
          }
          .text2 {
            margin-top: 32px;
            margin-bottom: 32px;
            padding-right: 48px;
          }
          @media (max-width: 991px) {
            .heading {
              text-align: center;
            }
            .hero {
              padding: 48px;
              flex-direction: column;
            }
            .image {
              order: 2;
            }
            .container1 {
              align-items: center;
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: 32px;
            }
            .text {
              text-align: center;
            }
            .text1 {
              text-align: center;
            }
            .text2 {
              text-align: center;
              padding-left: var(--dl-space-space-fourunits);
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
            .hero {
              padding-left: 32px;
              padding-right: 32px;
            }
            .image {
              width: 80%;
            }
          }
          @media (max-width: 479px) {
            .burger-menu {
              margin-left: var(--dl-space-space-doubleunit);
            }
            .hero {
              padding-top: 32px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: 32px;
            }
            .container1 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .btn-group {
              flex-direction: column;
            }
            .text2 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

export default VOTE1
