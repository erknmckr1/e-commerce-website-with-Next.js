import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/styles/globals.css";
import Layout from "@/layout/Layout";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import nProgress from "nprogress";
import "nprogress/nprogress.css";
import Router from "next/router";
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {

  Router.events.on("routeChangeStart",()=>nProgress.start());
  Router.events.on("routeChangeComplete",()=>nProgress.done());
  Router.events.on("routeChangeError",()=>nProgress.done());
  
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <Layout>
          <Toaster position="top-center" reverseOrder={false} />
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </SessionProvider>
  );
}
