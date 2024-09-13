import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head title="Rocket AI Web Chat">
        <meta
          name="description"
          content="Small full stack application built with Next.Js and Node.Js by Mukhammadali"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Rocket AI Web Chat" />
        <meta
          property="og:description"
          content="Small full stack application built with Next.Js and Node.Js by Mukhammadali"
        />
        <meta property="og:type" content="website" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
