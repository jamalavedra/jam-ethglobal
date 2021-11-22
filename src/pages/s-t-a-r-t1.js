import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

const START1 = () => {
  return (
    <>
      <div className="container">
        <Head>
          <title>START1 - Portfolio Page</title>
          <meta property="og:title" content="START1 - Portfolio Page" />
        </Head>
        <div className="navbar-container">
          <div className="navbar">
            <span className="card-Heading heading">MARCHANT</span>
            <div className="links-container">
              <Link href="/s-t-a-r-t1">
                <a className="link1 navbar-Link">START</a>
              </Link>
              <Link href="/v-o-t-e">
                <a className="link3 navbar-Link">VOTE</a>
              </Link>
              <Link href="/l-e-a-d-e-r-b-o-a-r-d1">
                <a className="link5 navbar-Link">LEADERBOARD</a>
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
        <div className="container1">
          <div className="hero">
            <div className="hero-text-container">
              <input
                type="text"
                disabled="true"
                autoFocus="true"
                placeholder="The powerful Atlantis"
                className="input"
              />
            </div>
            <div className="cta-btn-container">
              <button className="cta-btn anchor button">
                <span className="text">GENERATED</span>
              </button>
              <button className="cta-btn1 anchor button">HOW IT WORKS</button>
            </div>
          </div>
        </div>
        <div className="clients">
          <div className="logo-container">
            <Link href="/s-t-a-r-t11">
              <a className="link7">
                <img
                  alt="image"
                  src="/playground_assets/download%20%5B4%5D-400w.png"
                  loading="lazy"
                  className="logo button"
                />
              </a>
            </Link>
            <Link href="/s-t-a-r-t11">
              <a className="link8">
                <img
                  alt="image"
                  src="/playground_assets/download%20%5B8%5D-400h.png"
                  loading="lazy"
                  className="logo1 button"
                />
              </a>
            </Link>
            <img
              alt="image"
              src="/playground_assets/download%20%5B6%5D-400h.png"
              loading="lazy"
              className="logo2 button"
            />
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
          .link5 {
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
          .container1 {
            width: 100%;
            height: 170px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: #f1f1f1;
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
            background-size: cover;
            justify-content: center;
            background-image: url('/playground_assets/main-image-1500w.png');
            background-position: center;
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
          .clients {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxcontent);
            margin-top: var(--dl-space-space-fiveunits);
            align-items: center;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-tripleunit);
            margin-bottom: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
          }
          .logo-container {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .link7 {
            display: contents;
          }
          .logo {
            width: 384px;
            height: 299px;
            object-fit: cover;
            margin-bottom: var(--dl-space-space-fourunits);
            text-decoration: none;
          }
          .link8 {
            display: contents;
          }
          .logo1 {
            width: 340px;
            height: 301px;
            object-fit: cover;
            margin-bottom: var(--dl-space-space-fourunits);
            text-decoration: none;
          }
          .logo2 {
            width: 350px;
            height: 303px;
            object-fit: cover;
            margin-bottom: var(--dl-space-space-fourunits);
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
          }
          @media (max-width: 479px) {
            .burger-menu {
              margin-left: var(--dl-space-space-doubleunit);
            }
            .hero-text-container {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

export default START1
