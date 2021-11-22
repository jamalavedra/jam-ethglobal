import Header from "../components/Header";
import DevUI from "../components/DevUI";
import { Web3Provider } from "../helpers/Web3Context";
import "../styles/globals.css";
import "../styles/theme.css";

function MyApp({ Component, pageProps }) {

  return (
    <Web3Provider network="matic">
      <>
        <Header />
        <DevUI />
        <Component {...pageProps} />
      </>
    </Web3Provider>
  );
}


export default MyApp;
