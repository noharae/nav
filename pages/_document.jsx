import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html suppressHydrationWarning={true}>
      <Head>
        <link
          rel="icon"
          href="https://gcore.jsdelivr.net/gh/xjh22222228/public@gh-pages/nav/logo.svg"
        />
        <script
          charset="UTF-8"
          id="LA_COLLECT"
          src="//sdk.51.la/js-sdk-pro.min.js"
        ></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
