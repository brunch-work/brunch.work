import { NextSeo } from "next-seo";
import Head from "next/head";

export default function Seo({ currentLanguage }) {
  const { keywords, title, description, twitter } = currentLanguage;

  return (
    <>
      <Head>
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=2"
        />
        <meta
          name="robots"
          content={
            process.env.NODE_ENV !== "development"
              ? "index,follow"
              : "noindex,nofollow"
          }
        />
        <meta
          name="googlebot"
          content={
            process.env.NODE_ENV !== "development"
              ? "index,follow"
              : "noindex,nofollow"
          }
        />
        <meta
          name="keywords"
          content={keywords && keywords.length ? keywords.join(",") : keywords}
        />
        <meta name="author" content="Brunch" />
        <meta name="referrer" content="no-referrer" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="geo.region" content="CA-QC" />
        <meta name="geo.placename" content="Montreal" />

        {/* START FAVICON */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/png/apple-touch-icon.png"
        />
        <link rel="icon" href="/images/png/favicon.png" sizes="32x32" />
        <link rel="icon" href="/images/svg/icon.svg" type="image/svg+xml" />
        <link rel="icon" href="/images/favicon.ico" />
        <link
          rel="mask-icon"
          href="/images/svg/safari-pinned-tab.svg"
          color="#ff98a2"
        />
        <meta name="msapplication-TileColor" content="#1C1F2A" />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: light)"
          content="#D7D2CB"
        />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: dark)"
          content="#1C1F2A"
        />
        <script
          defer
          data-domain="brunch.work"
          src="https://plausible.brunch.work/js/script.js"
        ></script>
        <title>{title}</title>
      </Head>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          title,
          description,
          type: "website",
          locale: "en_US",
          images: [
            {
              url: "/images/png/opengraph.png",
              width: 1200,
              height: 630,
              alt: title,
            },
            {
              url: "https://brunch.work/images/png/opengraph.png",
              width: 1200,
              height: 630,
              alt: title,
            },
          ],
          defaultImageWidth: 1200,
          defaultImageHeight: 708,
          site_name: title,
        }}
        twitter={{
          handle: twitter.handle,
          cardType: "summary_large_image",
        }}
      />
    </>
  );
}
