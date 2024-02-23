import "../styles/main.scss";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";
import { useEffect } from "react";

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
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🍳</text></svg>"
        />
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </div>
  );
}

export default App;
