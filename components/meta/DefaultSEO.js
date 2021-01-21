import React from "react";
import Head from "next/head";

const DefaultSEO = () => {
  const name = "Auction Template";
  const city = "Minden";
  const latitude = 52.30219;
  const longitude = 8.86036;
  const region = "DE-NW";
  const keywords = [
    "auction",
    "template",
    "auction template",
    "ebay",
    "free",
    "kostenlos",
    "product",
    "item",
    "listing",
    "ad",
    "inserat",
    "anzeige",
    "template",
    "description",
    "description template",
    "description editor",
    "beschreibung template",
    "beschreibung editor",
    "web",
    "editor",
    "online-editor",
    "web-editor",
    "builder",
    "online-builder",
    "web-builder",
    "ebayshop",
    "ebay-shop",
    "shop-design",
    "ebay design",
    "https",
    "ssl",
    "responsive",
    "ebay-template",
    "ebay template",
    "auktionsvorlage",
    "verkaufsvorlage",
  ];
  const googleSiteVerification = "zkClEiO2CXbLVQ9ROLHO1F4D9AAqMjk9wWfN60340r0";
  const url = "https://auction-template.de";
  const favicon = "/favicon.ico";
  const image = `${url}${favicon}`;

  return (
    <Head>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Mukta:wght@200;300;400;500;600;700;800&display=swap"
        rel="stylesheet"
      />
      <meta charSet="utf-8" />
      <meta property="content-type" content="text/html; charset=UTF-8" />
      <meta name="keywords" content={keywords.join(",")} />
      <meta name="author" content={name} />
      <meta name="copyright" content={name} />
      <meta name="robots" content="index,follow" />
      <meta name="geo.region" content={region} />
      <meta name="geo.placename" content={city} />
      <meta name="geo.position" content={`${latitude};${longitude}`} />
      <meta name="ICBM" content={`${latitude}, ${longitude}`} />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
      />
      <meta property="og:site_name" content={name} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="business.business" />
      <meta property="og:latitude" content={String(latitude)} />
      <meta property="og:longitude" content={String(longitude)} />
      <meta property="og:locality" content={city} />
      <meta property="og:region" content={region} />
      <meta
        property="google-site-verification"
        content={googleSiteVerification}
      />
      <meta property="HandheldFriendly" content="yes" />
      <meta property="audience" content="all" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="/apple-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="/apple-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/apple-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/apple-icon-152x152.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/manifest.json" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
  );
};

export default DefaultSEO;
