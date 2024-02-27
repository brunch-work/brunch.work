import "../styles/main.scss";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";

function App({ Component, pageProps }) {

  return (
    <div className="app">
      <Head>
        <title>brunch</title>
        <meta name="robots" content="all" />
        <meta property="og:title" content="brunch" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="🔨" />
        <meta property="og:url" content="https://www.brunch.work" />
        <link rel="icon" href="/images/png/favicon.png" sizes="any" />
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </div>
  );
}

export default App;
