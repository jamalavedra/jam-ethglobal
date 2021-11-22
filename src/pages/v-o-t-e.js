import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

const VOTE = () => {
  return (
    <>
      <div className="container">
        <Head>
          <title>VOTE - Portfolio Page</title>
          <meta property="og:title" content="VOTE - Portfolio Page" />
        </Head>
        <div className="navbar-container">
          <div className="navbar">
            <span className="card-Heading heading">MARCHANT</span>
            <div className="links-container">
              <Link href="/s-t-a-r-t11">
                <a className="link1 navbar-Link">START</a>
              </Link>
              <span className="link2 navbar-Link">VOTE</span>
              <Link href="/l-e-a-d-e-r-b-o-a-r-d">
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
        <div className="gallery">
          <h1 className="text">Time to Vote</h1>
          <span className="text01">
            <span>
              One Wallet = One Vote
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>
              (choose wisely)
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>Remember you cannot vote your own art</span>
          </span>
          <div className="container01">
            <div className="gallery-card">
              <img
                alt="image"
                src="/playground_assets/download-1500h.png"
                className="image"
              />
              <Link href="/v-o-t-e1">
                <a className="link6">
                  <div className="container02">
                    <h1 className="text05">Project Title</h1>
                    <span className="text06">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </span>
                  </div>
                </a>
              </Link>
            </div>
            <div className="gallery-card1">
              <img
                alt="image"
                src="/playground_assets/download%20%5B1%5D-1500h.png"
                className="image1"
              />
              <div className="container03">
                <h1 className="text07">Project Title</h1>
                <span className="text08">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </span>
              </div>
            </div>
            <div className="gallery-card2">
              <img
                alt="image"
                src="/playground_assets/download%20%5B3%5D-1500h.png"
                className="image2"
              />
              <div className="container04">
                <h1 className="text09">Project Title</h1>
                <span className="text10">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </span>
              </div>
            </div>
            <div className="gallery-card3">
              <img
                alt="image"
                src="/playground_assets/download%20%5B2%5D-1500h.png"
                className="image3"
              />
              <div className="container05">
                <h1 className="text11">Project Title</h1>
                <span className="text12">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </span>
              </div>
            </div>
            <div className="gallery-card4">
              <img
                alt="image"
                src="/playground_assets/download%20%5B4%5D-1500h.png"
                className="image4"
              />
              <div className="container06">
                <h1 className="text13">Project Title</h1>
                <span className="text14">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </span>
              </div>
            </div>
            <div className="gallery-card5">
              <img
                alt="image"
                src="/playground_assets/download%20%5B5%5D-1500h.png"
                className="image5"
              />
              <div className="container07">
                <h1 className="text15">Project Title</h1>
                <span className="text16">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </span>
              </div>
            </div>
            <div className="gallery-card6">
              <img
                alt="image"
                src="/playground_assets/download%20%5B6%5D-1500h.png"
                className="image6"
              />
              <div className="container08">
                <h1 className="text17">Project Title</h1>
                <span className="text18">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </span>
              </div>
            </div>
            <div className="gallery-card7">
              <img
                alt="image"
                src="/playground_assets/download%20%5B7%5D-1500h.png"
                className="image7"
              />
              <div className="container09">
                <h1 className="text19">Project Title</h1>
                <span className="text20">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </span>
              </div>
            </div>
            <div className="gallery-card8">
              <img
                alt="image"
                src="/playground_assets/download%20%5B8%5D-1500h.png"
                className="image8"
              />
              <div className="container10">
                <h1 className="text21">Project Title</h1>
                <span className="text22">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </span>
              </div>
            </div>
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
          .gallery {
            width: 100%;
            display: flex;
            position: relative;
            max-width: 1400px;
            align-items: center;
            padding-top: 32px;
            padding-left: 48px;
            padding-right: 48px;
            flex-direction: column;
            padding-bottom: 32px;
          }
          .text {
            font-size: 3rem;
            text-align: center;
          }
          .text01 {
            color: var(--dl-color-gray-700);
            margin-top: 32px;
            text-align: center;
            padding-left: 48px;
            margin-bottom: 32px;
            padding-right: 48px;
          }
          .container01 {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-unit);
            grid-template-columns: 1fr 1fr 1fr;
          }
          .gallery-card {
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .image {
            top: 0px;
            left: 0px;
            right: auto;
            width: 100%;
            bottom: auto;
            height: 100%;
            position: absolute;
            object-fit: cover;
          }
          .link6 {
            display: contents;
          }
          .container02 {
            width: 100%;
            height: 300px;
            display: flex;
            opacity: 0;
            padding: 32px;
            z-index: 1;
            transition: 0.3s;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            text-decoration: none;
            background-image: linear-gradient(
              180deg,
              rgba(0, 0, 0, 0.2) 0%,
              rgba(0, 0, 0, 0.9)
            );
          }
          .container02:hover {
            opacity: 1;
          }
          .text05 {
            color: var(--dl-color-gray-white);
            font-size: 1.5rem;
            text-align: center;
            font-weight: 500;
            margin-bottom: 24px;
          }
          .text06 {
            color: var(--dl-color-gray-white);
            text-align: center;
          }
          .gallery-card1 {
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .image1 {
            top: 0px;
            left: 0px;
            right: auto;
            width: 100%;
            bottom: auto;
            height: 100%;
            position: absolute;
            object-fit: cover;
          }
          .container03 {
            width: 100%;
            height: 300px;
            display: flex;
            opacity: 0;
            padding: 32px;
            z-index: 1;
            transition: 0.3s;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-image: linear-gradient(
              180deg,
              rgba(0, 0, 0, 0.2) 0%,
              rgba(0, 0, 0, 0.9)
            );
          }
          .container03:hover {
            opacity: 1;
          }
          .text07 {
            color: var(--dl-color-gray-white);
            font-size: 1.5rem;
            text-align: center;
            font-weight: 500;
            margin-bottom: 24px;
          }
          .text08 {
            color: var(--dl-color-gray-white);
            text-align: center;
          }
          .gallery-card2 {
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .image2 {
            top: 0px;
            left: 0px;
            right: auto;
            width: 100%;
            bottom: auto;
            height: 100%;
            position: absolute;
            object-fit: cover;
          }
          .container04 {
            width: 100%;
            height: 300px;
            display: flex;
            opacity: 0;
            padding: 32px;
            z-index: 1;
            transition: 0.3s;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-image: linear-gradient(
              180deg,
              rgba(0, 0, 0, 0.2) 0%,
              rgba(0, 0, 0, 0.9)
            );
          }
          .container04:hover {
            opacity: 1;
          }
          .text09 {
            color: var(--dl-color-gray-white);
            font-size: 1.5rem;
            text-align: center;
            font-weight: 500;
            margin-bottom: 24px;
          }
          .text10 {
            color: var(--dl-color-gray-white);
            text-align: center;
          }
          .gallery-card3 {
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .image3 {
            top: 0px;
            left: 0px;
            right: auto;
            width: 100%;
            bottom: auto;
            height: 100%;
            position: absolute;
            object-fit: cover;
          }
          .container05 {
            width: 100%;
            height: 300px;
            display: flex;
            opacity: 0;
            padding: 32px;
            z-index: 1;
            transition: 0.3s;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .container05:hover {
            opacity: 1;
          }
          .text11 {
            color: var(--dl-color-gray-white);
            font-size: 1.5rem;
            text-align: center;
            font-weight: 500;
            margin-bottom: 24px;
          }
          .text12 {
            color: var(--dl-color-gray-white);
            text-align: center;
          }
          .gallery-card4 {
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .image4 {
            top: 0px;
            left: 0px;
            right: auto;
            width: 100%;
            bottom: auto;
            height: 100%;
            position: absolute;
            object-fit: cover;
          }
          .container06 {
            width: 100%;
            height: 300px;
            display: flex;
            opacity: 0;
            padding: 32px;
            z-index: 1;
            transition: 0.3s;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-image: linear-gradient(
              180deg,
              rgba(0, 0, 0, 0.2) 0%,
              rgba(0, 0, 0, 0.9)
            );
          }
          .container06:hover {
            opacity: 1;
          }
          .text13 {
            color: var(--dl-color-gray-white);
            font-size: 1.5rem;
            text-align: center;
            font-weight: 500;
            margin-bottom: 24px;
          }
          .text14 {
            color: var(--dl-color-gray-white);
            text-align: center;
          }
          .gallery-card5 {
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .image5 {
            top: 0px;
            left: 0px;
            right: auto;
            width: 100%;
            bottom: auto;
            height: 100%;
            position: absolute;
            object-fit: cover;
          }
          .container07 {
            width: 100%;
            height: 300px;
            display: flex;
            opacity: 0;
            padding: 32px;
            z-index: 1;
            transition: 0.3s;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-image: linear-gradient(
              180deg,
              rgba(0, 0, 0, 0.2) 0%,
              rgba(0, 0, 0, 0.9)
            );
          }
          .container07:hover {
            opacity: 1;
          }
          .text15 {
            color: var(--dl-color-gray-white);
            font-size: 1.5rem;
            text-align: center;
            font-weight: 500;
            margin-bottom: 24px;
          }
          .text16 {
            color: var(--dl-color-gray-white);
            text-align: center;
          }
          .gallery-card6 {
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .image6 {
            top: 0px;
            left: 0px;
            right: auto;
            width: 100%;
            bottom: auto;
            height: 100%;
            position: absolute;
            object-fit: cover;
          }
          .container08 {
            width: 100%;
            height: 300px;
            display: flex;
            opacity: 0;
            padding: 32px;
            z-index: 1;
            transition: 0.3s;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-image: linear-gradient(
              180deg,
              rgba(0, 0, 0, 0.2) 0%,
              rgba(0, 0, 0, 0.9)
            );
          }
          .container08:hover {
            opacity: 1;
          }
          .text17 {
            color: var(--dl-color-gray-white);
            font-size: 1.5rem;
            text-align: center;
            font-weight: 500;
            margin-bottom: 24px;
          }
          .text18 {
            color: var(--dl-color-gray-white);
            text-align: center;
          }
          .gallery-card7 {
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .image7 {
            top: 0px;
            left: 0px;
            right: auto;
            width: 100%;
            bottom: auto;
            height: 100%;
            position: absolute;
            object-fit: cover;
          }
          .container09 {
            width: 100%;
            height: 300px;
            display: flex;
            opacity: 0;
            padding: 32px;
            z-index: 1;
            transition: 0.3s;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-image: linear-gradient(
              180deg,
              rgba(0, 0, 0, 0.2) 0%,
              rgba(0, 0, 0, 0.9)
            );
          }
          .container09:hover {
            opacity: 1;
          }
          .text19 {
            color: var(--dl-color-gray-white);
            font-size: 1.5rem;
            text-align: center;
            font-weight: 500;
            margin-bottom: 24px;
          }
          .text20 {
            color: var(--dl-color-gray-white);
            text-align: center;
          }
          .gallery-card8 {
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .image8 {
            top: 0px;
            left: 0px;
            right: auto;
            width: 100%;
            bottom: auto;
            height: 100%;
            position: absolute;
            object-fit: cover;
          }
          .container10 {
            width: 100%;
            height: 300px;
            display: flex;
            opacity: 0;
            padding: 32px;
            z-index: 1;
            transition: 0.3s;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-image: linear-gradient(
              180deg,
              rgba(0, 0, 0, 0.2) 0%,
              rgba(0, 0, 0, 0.9)
            );
          }
          .container10:hover {
            opacity: 1;
          }
          .text21 {
            color: var(--dl-color-gray-white);
            font-size: 1.5rem;
            text-align: center;
            font-weight: 500;
            margin-bottom: 24px;
          }
          .text22 {
            color: var(--dl-color-gray-white);
            text-align: center;
          }
          @media (max-width: 991px) {
            .heading {
              text-align: center;
            }
            .text01 {
              text-align: center;
            }
            .container01 {
              grid-template-columns: 1fr 1fr 1fr;
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
            .gallery {
              padding-left: 32px;
              padding-right: 32px;
            }
            .text01 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .container01 {
              grid-template-columns: 1fr 1fr;
            }
          }
          @media (max-width: 479px) {
            .burger-menu {
              margin-left: var(--dl-space-space-doubleunit);
            }
            .gallery {
              padding: var(--dl-space-space-unit);
            }
            .container01 {
              grid-template-columns: 1fr;
            }
            .text05 {
              align-self: center;
              margin-bottom: var(--dl-space-space-unit);
            }
            .text07 {
              align-self: center;
              margin-bottom: var(--dl-space-space-unit);
            }
            .text09 {
              align-self: center;
              margin-bottom: var(--dl-space-space-unit);
            }
            .text11 {
              align-self: center;
              margin-bottom: var(--dl-space-space-unit);
            }
            .text13 {
              align-self: center;
              margin-bottom: var(--dl-space-space-unit);
            }
            .text15 {
              align-self: center;
              margin-bottom: var(--dl-space-space-unit);
            }
            .text17 {
              align-self: center;
              margin-bottom: var(--dl-space-space-unit);
            }
            .text19 {
              align-self: center;
              margin-bottom: var(--dl-space-space-unit);
            }
            .text21 {
              align-self: center;
              margin-bottom: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

export default VOTE
