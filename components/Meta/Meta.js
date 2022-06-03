import React from "react";

const Meta = (props) => {
  return (
    <Head>
      <meta name="viewpoint" content="width=device-width,initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <title>{props.title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "Poke-App",
  keywords: "programming, pokemon",
  description: "Check the pokemon info",
};

export default Meta;
