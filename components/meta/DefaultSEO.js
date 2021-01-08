import React from "react";
import Head from "next/head";

const DefaultSEO = () => {
  const name = "Auction Template";
  const city = "Minden";
  const latitude = 52.30219;
  const longitude = 8.86036;
  const region = "DE-NW";
  const keywords = [
    "ebay",
    "free",
    "for free",
    "no cost",
    "auction",
    "listing",
    "ad",
    "template",
    "description",
    "online",
    "web,editor",
    "online-editor",
    "web-editor",
    "builder",
    "online-builder",
    "web-builder",
    "ebayshop",
    "ebay-shop",
    "shop-design",
    "ebay design",
    "ebay-template",
    "https",
    "ssl",
    "responsive",
    "ebay-template",
    "ebay template",
    "simple",
    "easy to use",
    "auction template",
    "auktionsvorlage",
    "verkaufsvorlage",
    "template",
    "ebay",
    "ebayshop",
    "ebay-shop",
    "shop-design",
    "designvorlage",
    "design",
    "vorlage",
    "ebay design",
    "ebayvorlage",
    "ebay-template",
    "template",
    "artikelbeschreibung",
  ];
  const language = "de";
  const googleSiteVerification = "";
  const url = "https://auction-template.de";
  const favicon = "/favicon.ico";
  const image = `${url}${favicon}`;

  return (
    <Head>
      <meta charSet="utf-8" />
      <meta property="content-type" content="text/html; charset=UTF-8" />
      <meta httpEquiv="language" content={language} />
      <meta name="language" content={language} />
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
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
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
    </Head>
  );
};

export default DefaultSEO;
