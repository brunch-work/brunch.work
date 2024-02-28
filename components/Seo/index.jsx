import { NextSeo } from "next-seo";
import Head from "next/head";

export default function Seo({currentLanguage}) {

  const {keywords, title, description, twitter} = currentLanguage;

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
        <meta name="author" content="Studio Brunch" />
        <meta name="referrer" content="no-referrer" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="geo.region" content="CA-QC" />
        <meta name="geo.placename" content="Montreal" />

        {/* START FAVICON */}
        <link rel="icon" href="/images/png/favicon.png" sizes="32x32" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.webmanifest" />
        {/* END FAVICON */}

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
