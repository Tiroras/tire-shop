import '../styles/globals.css'
import type { AppProps /*, AppContext */ } from 'next/app'
import {Provider} from "react-redux";
import wrapper from "../src/redux/reducer";
import React from "react";
import NextNProgress from "nextjs-progressbar";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress
        color={"white"}
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
      />
      <Component {...pageProps} />
    </>
    )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default wrapper.withRedux(App)
