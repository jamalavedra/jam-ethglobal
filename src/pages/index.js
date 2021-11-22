import React, { useContext } from "react";
import Link from "next/link";
import Head from "next/head";
import { Web3Context } from "../helpers/Web3Context";
import { Button } from "antd";

const Home = () => {
  const { web3Modal, logoutOfWeb3Modal, loadWeb3Modal } = useContext(Web3Context);
  const modalButtons = [];
  if (web3Modal) {
    if (!web3Modal.cachedProvider) {
      modalButtons.push(
        <Button
          className="border rounded"
          size="large"
          /* type={minimized ? "default" : "primary"}     too many people just defaulting to MM and having a bad time */
          onClick={loadWeb3Modal}
        >
          {"CONNECT WALLET"}
        </Button>,
      );
    } else {
      modalButtons.push(
        <Link href="/s-t-a-r-t1">
          <a>
            <Button size="large">GENERATE</Button>
          </a>
        </Link>,
      );
    }
  }

  return (
    <>
      <div className="w-full h-auto flex flex-col items-center">
        <Head>
          <title>Marchant</title>
          <meta property="og:title" content="Marchant" />
        </Head>

        <div
          style={{ backgroundImage: 'url("/playground_assets/main-image-900h.png")', height: "856px" }}
          className="w-full flex items-center flex-col bg-cover justify-center bg-bottom"
        >
          <div className="w-full flex m-5 items-center flex-row justify-center bg-yellow-200 p-5 bg-opacity-30">
            <div className="flex self-center items-start flex-col pb-6">
              <h1 className="heading1">
                <span>MARCHANT</span>
                <span className="text01"></span>
              </h1>
              <span className="text02 pb-4">
                <span>WEEKLY CROWDSOURCE ART FOR YOUR EYES</span>
              </span>
              {web3Modal && web3Modal.cachedProvider && (
                <input
                  type="text"
                  required="true"
                  placeholder="Write your imagination here"
                  className="px-4 py-3 w-full mb-3"
                />
              )}
              <div className="cta-btn-container">
                {web3Modal && modalButtons}
                <a href="#learn more" className="cta-btn1 button anchor">
                  <Button size="large">LEARN MORE</Button>
                </a>
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
                        __html: " ",
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
                  <span>
                    Select your preferred one
                    <span
                      dangerouslySetInnerHTML={{
                        __html: " ",
                      }}
                    />
                  </span>
                  <br></br>
                  <span>and mint in the vault</span>
                  <br></br>
                  <span></span>
                </span>
              </div>
            </div>
            <div className="container4">
              <div className="step2">
                <h1 className="text24">
                  <span>3</span>
                </h1>
                <h1 className="text26">
                  <span>Vote</span>
                </h1>
                <span className="text28">
                  <span></span>
                  <span></span>
                </span>
              </div>
              <span className="text31">
                <span></span>
                <br></br>
                <span>
                  Promote you art and
                  <span
                    dangerouslySetInnerHTML={{
                      __html: " ",
                    }}
                  />
                </span>
                <br></br>
                <span>vote others</span>
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
                  By Sunday, the most voted art piece of
                  <span
                    dangerouslySetInnerHTML={{
                      __html: " ",
                    }}
                  />
                </span>
                <br></br>
                <span>the week wins the Vault</span>
                <br></br>
                <span></span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .link {
            text-decoration: none;
          }
          .heading1 {
            font-size: 88px;
            align-self: center;
            font-weight: 900;
            line-height: 1.22;
            margin-bottom: var(--dl-space-space-tripleunit);
            text-transform: uppercase;
            text-decoration: none;
          }
          .text01 {
            text-align: center;
          }
          .text02 {
            font-size: 24px;
            align-self: center;
            font-style: normal;
            font-weight: 700;
            line-height: 1.55;
            margin-bottom: var(--dl-space-space-fiveunits);
            letter-spacing: 2;
            text-transform: none;
            text-decoration: none;
          }
          .cta-btn-container {
            display: flex;
            align-self: center;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .link2 {
            color: var(--dl-color-gray-white);
            width: 225px;
            align-self: flex-start;
            text-align: center;
            transition: 0.3s;
            padding-top: var(--dl-space-space-doubleunit);
            margin-right: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-doubleunit);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-doubleunit);
            padding-bottom: var(--dl-space-space-doubleunit);
            text-decoration: none;
            background-color: #c5a143;
          }
          .link2:hover {
            background-color: #dcc076;
          }
          .text04 {
            color: #101010;
          }
          .cta-btn1 {
            color: var(--dl-color-gray-black);
            width: 250px;
            text-align: center;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-doubleunit);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-doubleunit);
            padding-bottom: var(--dl-space-space-doubleunit);
            text-decoration: none;
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
          .container4 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            flex-direction: column;
          }
          .step2 {
            width: 162px;
            display: flex;
            padding: 24px;
            align-items: center;
            flex-direction: column;
          }
          .text24 {
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
            text-align: center;
          }
          .text31 {
            color: var(--dl-color-gray-500);
            font-size: 0.75rem;
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
            .link {
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
            .text24 {
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
            .link2 {
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
  );
};

export default Home;
