import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

const START = () => {
  return (
    <>
      <div className="container">
        <Head>
          <title>START - Portfolio Page</title>
          <meta property="og:title" content="START - Portfolio Page" />
        </Head>
        <div className="navbar-container">
          <div className="navbar">
            <span className="card-Heading heading">MARCHANT</span>
            <div className="links-container">
              <Link href="/s-t-a-r-t">
                <a className="link1 navbar-Link">START</a>
              </Link>
              <Link href="/v-o-t-e">
                <a className="link3 navbar-Link">VOTE</a>
              </Link>
              <Link href="/l-e-a-d-e-r-b-o-a-r-d">
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
        <div className="container1">
          <div className="hero">
            <div className="hero-text-container">
              <h1 className="heading1 section-Heading">
                <span>MARCHANT</span>
                <span className="text01"></span>
              </h1>
              <span className="text02 section-Text">
                <span>WEEKLY CROWDSOURCE ART FOR YOUR EYES</span>
              </span>
              <input
                type="text"
                required="true"
                placeholder="Write your imagination here"
                className="input"
              />
              <div className="cta-btn-container">
                <Link href="/s-t-a-r-t1">
                  <a className="link7 button anchor">
                    <span className="text04">GENERATE</span>
                  </a>
                </Link>
                <button className="cta-btn1 anchor button">LEARN MORE</button>
              </div>
            </div>
          </div>
        </div>
        <div id="learn more" className="steps">
          <h1 className="text05">How it Works</h1>
          <div className="container2">
            <div className="container3">
              <div className="step">
                <h1 className="text06">
                  <span>1</span>
                </h1>
                <h1 className="text08">
                  <span></span>
                  <span>Concept</span>
                </h1>
                <span className="text11">
                  <span>
                    Each week generate art based
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>of your imagination</span>
                </span>
              </div>
              <div className="step1">
                <h1 className="text15">
                  <span>2</span>
                </h1>
                <h1 className="text17">
                  <span>Mint</span>
                </h1>
                <span className="text19">
                  <span>Select your favorite generative</span>
                  <br></br>
                  <span>
                    art
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>and mint the NFT to particiapte</span>
                  <br></br>
                  <span></span>
                </span>
              </div>
              <div className="step2">
                <h1 className="text25">3</h1>
                <h1 className="text26">
                  <span>Vote</span>
                </h1>
                <span className="text28">
                  <span></span>
                  <span></span>
                  <span>Starting on the weekend, vote</span>
                  <br></br>
                  <span>the piece of art you most like</span>
                  <br></br>
                  <span>and promote your own!</span>
                  <br></br>
                  <span></span>
                </span>
              </div>
              <div className="step3">
                <h1 className="text37">
                  <span>4</span>
                </h1>
                <h1 className="text39">
                  <span>Win</span>
                </h1>
                <span className="text41">
                  <span></span>
                  <span></span>
                  <span>
                    By Sunday, the most voted art
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>
                    piece of
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>the week wins the Vault</span>
                  <br></br>
                  <span></span>
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
          .container1 {
            width: 100%;
            height: 707px;
            display: flex;
            align-items: center;
            flex-direction: column;
            background-size: cover;
            justify-content: center;
            background-image: url('/playground_assets/main-image-800h.png');
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
            background-color: rgba(241, 241, 241, 0.25);
          }
          .hero-text-container {
            width: 45%;
            display: flex;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
          }
          .heading1 {
            color: #040404;
            align-self: center;
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .text01 {
            text-align: center;
          }
          .text02 {
            color: var(--dl-color-gray-black);
            align-self: center;
            margin-bottom: var(--dl-space-space-fiveunits);
          }
          .input {
            width: 100%;
            padding: var(--dl-space-space-doubleunit);
            margin-bottom: var(--dl-space-space-doubleunit);
          }
          .cta-btn-container {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .link7 {
            color: var(--dl-color-gray-white);
            text-align: center;
            transition: 0.3s;
            padding-top: var(--dl-space-space-doubleunit);
            margin-right: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-tenunits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-tenunits);
            padding-bottom: var(--dl-space-space-doubleunit);
            text-decoration: none;
            background-color: #c5a143;
          }
          .link7:hover {
            background-color: #e0a2a2;
          }
          .text04 {
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
          .steps {
            width: 100%;
            display: flex;
            padding: 48px;
            max-width: 1400px;
            align-items: center;
            flex-direction: column;
          }
          .text05 {
            color: var(--dl-color-gray-black);
            font-size: 3rem;
            margin-bottom: var(--dl-space-space-unit);
          }
          .container2 {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .container3 {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .step {
            display: flex;
            padding: 24px;
            align-items: center;
            flex-direction: column;
          }
          .text06 {
            color: var(--dl-color-gray-900);
            font-size: 4rem;
            text-align: center;
            font-weight: 900;
            margin-bottom: -30px;
          }
          .text08 {
            font-size: 1.15rem;
            font-weight: 500;
          }
          .text11 {
            color: var(--dl-color-gray-500);
            font-size: 0.75rem;
            margin-top: 24px;
            text-align: center;
          }
          .step1 {
            display: flex;
            padding: 24px;
            align-items: center;
            flex-direction: column;
          }
          .text15 {
            color: var(--dl-color-gray-900);
            font-size: 4rem;
            text-align: center;
            font-weight: 900;
            margin-bottom: -30px;
          }
          .text17 {
            font-size: 1.15rem;
            font-weight: 500;
          }
          .text19 {
            color: var(--dl-color-gray-500);
            font-size: 0.75rem;
            margin-top: 24px;
            text-align: center;
          }
          .step2 {
            display: flex;
            padding: 24px;
            align-items: center;
            flex-direction: column;
          }
          .text25 {
            color: var(--dl-color-gray-900);
            font-size: 4rem;
            text-align: center;
            font-weight: 900;
            margin-bottom: -30px;
          }
          .text26 {
            font-size: 1.15rem;
            font-weight: 500;
          }
          .text28 {
            color: var(--dl-color-gray-500);
            font-size: 0.75rem;
            margin-top: 24px;
            text-align: center;
          }
          .step3 {
            display: flex;
            padding: 24px;
            align-items: center;
            flex-direction: column;
          }
          .text37 {
            color: var(--dl-color-gray-900);
            font-size: 4rem;
            text-align: center;
            font-weight: 900;
            margin-bottom: -30px;
          }
          .text39 {
            font-size: 1.15rem;
            font-weight: 500;
          }
          .text41 {
            color: var(--dl-color-gray-500);
            font-size: 0.75rem;
            margin-top: 24px;
            text-align: center;
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
            .heading1 {
              text-align: center;
            }
            .text02 {
              text-align: center;
            }
            .text05 {
              text-align: center;
            }
            .text06 {
              text-align: center;
            }
            .text08 {
              text-align: center;
            }
            .text15 {
              text-align: center;
            }
            .text17 {
              text-align: center;
            }
            .text25 {
              text-align: center;
            }
            .text26 {
              text-align: center;
            }
            .text37 {
              text-align: center;
            }
            .text39 {
              text-align: center;
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
            .link7 {
              padding-left: var(--dl-space-space-fourunits);
              padding-right: var(--dl-space-space-fourunits);
            }
            .cta-btn1 {
              padding-left: var(--dl-space-space-fourunits);
              padding-right: var(--dl-space-space-fourunits);
            }
            .steps {
              padding-left: 32px;
              padding-right: 32px;
            }
            .container2 {
              flex-direction: column;
            }
            .step {
              padding: var(--dl-space-space-unit);
            }
            .step1 {
              padding: var(--dl-space-space-unit);
            }
            .step2 {
              padding: var(--dl-space-space-unit);
            }
            .step3 {
              padding: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 479px) {
            .burger-menu {
              margin-left: var(--dl-space-space-doubleunit);
            }
            .hero-text-container {
              width: 100%;
            }
            .steps {
              padding-top: 32px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: 32px;
            }
            .container3 {
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

export default START
