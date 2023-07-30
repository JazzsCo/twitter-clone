/* eslint-disable @next/next/no-title-in-document-head */
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Twitter Clone</title>
        <meta name="description" content="Build Twitter-Clone By JazzsCo." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Twitter.svg" className="rounded-full" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
