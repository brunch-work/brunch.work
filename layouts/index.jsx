"use client";
import dynamic from "next/dynamic";
import { useEffect } from "react";

export default function Layout({children}) {


    // const PageTransition = dynamic(
    //   () =>
    //     import("components/page-transition").then((mod) => mod.PageTransition),
    //   { ssr: false }
    // );

    //  useEffect(() => {
    //    const anchorLinks = [...document.querySelectorAll("a[href]")];
    //    anchorLinks
    //      .filter((a) => a.href.includes("/#"))
    //      .forEach((a) => {
    //        a.addEventListener("click", (e) => {
    //          e.preventDefault();
    //          const href = "#" + a.href?.split("/#").at(-1);
    //          console.log(href);
    //          lenis.scrollTo(href);
    //        });
    //      });
    //  }, []);

    return (
      <>
        {/* <CustomHead {...seo} /> */}
        {/* <div className={cn(`theme-${theme}`, s.layout, className)}> */}
          {/* <PageTransition /> */}
          {/* <Intro />
          <Cursor />
          <Scrollbar /> */}
          <main>{children}</main>
          {/* <Footer /> */}
        {/* </div> */}
      </>
    );
}