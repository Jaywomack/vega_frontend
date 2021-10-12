import Head from "next/head";
const Meta = (props) => (
  <Head>
    <title>VegaCloud | {props.title}</title>
    <meta name="description" content={props.desc} />
    <meta property="og:type" content="website" />
    <meta name="og:title" property="og:title" content="VegaCloud" />
    <meta
      name="og:description"
      property="og:description"
      content={props.desc}
    />
    <meta property="og:site_name" content="VegaCloud" />
    <meta property="og:url" content="https://www.vegacloud.io/" />
    <meta name="twitter:card" content="VegaCloud" />
    <meta name="og:image:alt" content="VegaCloud" />
    <meta property="og:image" content="/static/images/vega_logo.webp" />
    <meta name="twitter:title" content="VegaCloud LLC" />
    <meta name="twitter:description" content={props.desc} />
    <meta name="twitter:site" content="" />
    <meta name="twitter:creator" content="@vegacloud" />

    <meta name="twitter:image" content="/static/images/vega_logo.webp" />
    <link rel="canonical" href="https://www.vegacloud.io/" />
    <meta name="robots" content="index" follow="true" />
    {/* Raleway fonts.google */}
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link
      rel="preconnect"
      href="https://fonts.gstatic.com"
      crossOrigin="true"
    />

    <link rel="icon" type="image/x-icon" href="/static/images/vega_logo.webp" />
    <link
      rel="apple-touch-icon"
      type="image/png"
      href="/static/images/vega_logo.webp-icon.png"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
      integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ=="
      crossOrigin="anonymous"
      referrerPolicy="no-referrer"
    />
  </Head>
);
export default Meta;
