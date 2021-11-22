import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

const START111 = () => {
  return (
    <>
      <div className="container">
        <Head>
          <title>START111 - Portfolio Page</title>
          <meta property="og:title" content="START111 - Portfolio Page" />
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
        <div className="container1">
          <div className="hero">
            <div className="hero-text-container">
              <input type="text" placeholder="placeholder" className="input" />
            </div>
            <div className="cta-btn-container">
              <button className="cta-btn anchor button">
                <span className="text">GENERATED</span>
              </button>
              <button className="cta-btn1 anchor button">HOW IT WORKS</button>
            </div>
          </div>
        </div>
        <div className="hero1">
          <img
            alt="image"
            src="/playground_assets/download%20%5B4%5D-1500h.png"
            className="image"
          />
          <div className="container2">
            <h2 className="text1">Successfuly Minted!</h2>
            <h2 className="text2">Current Pool 0.54 ETH</h2>
            <div className="btn-group">
              <button className="button card-Text">Spread the word</button>
              <Link href="/s-t-a-r-t111">
                <a className="link6 button card-Text">Go to Vote</a>
              </Link>
            </div>
            <span className="text3">
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
          .container1 {
            width: 100%;
            height: 197px;
            display: flex;
            align-items: center;
            flex-direction: column;
            background-size: cover;
            justify-content: center;
            background-image: url('/playground_assets/main-image-1500w.png');
            background-position: center;
          }
          .hero {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxcontent);
            margin-top: var(--dl-space-space-fiveunits);
            align-items: center;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-tripleunit);
            margin-bottom: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: center;
          }
          .hero-text-container {
            width: 45%;
            display: flex;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
          }
          .input {
            width: 100%;
            padding: var(--dl-space-space-doubleunit);
            margin-right: var(--dl-space-space-doubleunit);
            margin-bottom: var(--dl-space-space-doubleunit);
          }
          .cta-btn-container {
            display: flex;
            align-items: flex-start;
            margin-left: var(--dl-space-space-doubleunit);
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
            justify-content: flex-start;
          }
          .cta-btn {
            color: var(--dl-color-gray-white);
            text-align: center;
            transition: 0.3s;
            padding-top: var(--dl-space-space-doubleunit);
            margin-right: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-tenunits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-tenunits);
            padding-bottom: var(--dl-space-space-doubleunit);
            background-color: #c9c9c9;
          }

          .text {
            color: #101010;
          }
          .cta-btn1 {
            color: var(--dl-color-gray-black);
            width: 236px;
            text-align: center;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-halfunit);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-halfunit);
            padding-bottom: var(--dl-space-space-doubleunit);
            background-color: var(--dl-color-gray-white);
          }
          .hero1 {
            width: 100%;
            height: 100%;
            display: flex;
            padding: 32px;
            max-width: 1400px;
            align-self: center;
            min-height: 80vh;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .image {
            width: 25rem;
            object-fit: cover;
          }
          .container2 {
            width: 673px;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            margin-left: 32px;
            flex-direction: column;
            justify-content: flex-start;
          }
          .text1 {
            font-size: 54px;
            font-style: normal;
            margin-top: var(--dl-space-space-unit);
            font-family: Overpass;
            font-weight: 700;
            line-height: 1.55;
            margin-bottom: var(--dl-space-space-unit);
            text-transform: none;
            text-decoration: none;
          }
          .text2 {
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
          .button {
            color: var(--dl-color-gray-white);
            transition: 0.3s;
            padding-top: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-fourunits);
            padding-left: 32px;
            padding-right: 32px;
            padding-bottom: var(--dl-space-space-unit);
            background-color: #4e3a18;
          }
          .button:hover {
            color: #000000;
            transform: scale(1.02);
            background-color: #e2c169;
          }
          .link6 {
            color: #000000;
            transition: 0.3s;
            padding-top: var(--dl-space-space-unit);
            padding-left: 32px;
            padding-right: 32px;
            padding-bottom: var(--dl-space-space-unit);
            background-color: #ffffff;
          }
          .link6:hover {
            color: #000000;
            transform: scale(1.02);
            background-color: #e2c169;
          }
          .text3 {
            margin-top: 32px;
            margin-bottom: 32px;
            padding-right: 48px;
          }
          @media (max-width: 991px) {
            .heading {
              text-align: center;
            }
            .hero {
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
            .hero-text-container {
              width: 80%;
              align-items: center;
              margin-bottom: var(--dl-space-space-fourunits);
            }
            .hero1 {
              padding: 48px;
              flex-direction: column;
            }
            .image {
              order: 2;
            }
            .container2 {
              align-items: center;
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: 32px;
            }
            .text1 {
              text-align: center;
            }
            .text2 {
              text-align: center;
            }
            .text3 {
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
            .cta-btn {
              padding-left: var(--dl-space-space-fourunits);
              padding-right: var(--dl-space-space-fourunits);
            }
            .cta-btn1 {
              padding-left: var(--dl-space-space-fourunits);
              padding-right: var(--dl-space-space-fourunits);
            }
            .hero1 {
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
            .hero-text-container {
              width: 100%;
            }
            .hero1 {
              padding-top: 32px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: 32px;
            }
            .container2 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .btn-group {
              flex-direction: column;
            }
            .text3 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

export default START111
