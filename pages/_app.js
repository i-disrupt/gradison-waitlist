import 'aos/dist/aos.css';
import '../styles/globals.scss'
import Head from "next/head";

import useWindowSize from "../hooks/useWindowDimensions";
import {useEffect} from "react";

import AOS from "aos";

function App({ Component, pageProps }) {
  const { height, width } = useWindowSize();

  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: "smooth",
      once: true,
      mirror: true
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=no,viewport-fit=cover" />

        <title>Gradison - Coming soon</title>
        <meta name="title" content="Gradison - We're in development!" />
        <meta name="description" content="" />
        <meta name="keywords" content="Gradison, AI, Artificial Intelligence, GPT, Tech, 2023" />

        <meta property="og:site_name" content="Gradison" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gradison.net/" />
        <meta property="og:title" content="Gradison - We're in development!" />
        <meta property="og:description" content="" />
        <meta property="og:image" content="/thumbnail.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://gradison.net/" />
        <meta property="twitter:title" content="Gradison - We're in development!" />
        <meta property="twitter:description" content="" />
        <meta property="twitter:image" content="/thumbnail.png" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App
