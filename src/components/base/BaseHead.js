/* eslint-disable @next/next/no-sync-scripts */
import Head from "next/head";

const BaseHead = ( { title = "TelePIX", children } ) => {
  return (
    <div>
      <Head>
        <title>{ `TelePIX ERP : ${ title.toUpperCase () }` }</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
        />
      </Head>
      { children }
    </div>
  );
};

export default BaseHead;
