import "../styles/main.scss";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Layout from "../layouts";

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


  // const lenis = useLenis(ScrollTrigger.update);

  // useEffect(() => {
  //   ScrollTrigger.refresh()
  // }, [lenis]);

  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", (e) => {
      console.log(e);
    });

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    const anchorLinks = [...document.querySelectorAll("a[href]")];
    anchorLinks
      .filter((a) => a.href.includes("/#"))
      .forEach((a) => {
        a.addEventListener("click", (e) => {
          e.preventDefault();
          const href = "#" + a.href?.split("/#").at(-1);
          console.log(href);
          lenis.scrollTo(href);
        });
      });
  },[])


  return (
    <Layout>
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
    </Layout>
  );
}

export default App;
