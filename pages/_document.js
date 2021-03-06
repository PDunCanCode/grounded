import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang='zxx'>
        <Head>
          <meta charSet='utf-8' />
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1'
          />
          <link
            rel='icon'
            href='https://res.cloudinary.com/pauseprogramming/image/upload/v1592696908/grounded/favicon_xszaa3.png'
            type='image/x-icon'
          />
          <meta name='theme-color' content='#00df94' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
