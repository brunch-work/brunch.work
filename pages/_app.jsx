import "../styles/main.scss";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";
import { useLenis } from "@studio-freight/react-lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";

if (typeof window !== "undefined") {
  // reset scroll position
  window.scrollTo(0, 0);
  window.history.scrollRestoration = "manual";

  gsap.defaults({
    ease: "none",
 });

  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.clearScrollMemory(window.history.scrollRestoration);
  ScrollTrigger.defaults({ markers: process.env.NODE_ENV === "development" });
}

function App({ Component, pageProps }) {

  const lenis = useLenis(ScrollTrigger.update);

  useEffect(() => ScrollTrigger.refresh(), [lenis]);

  return (
    <>
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
    </>
  );
}

export default App;
