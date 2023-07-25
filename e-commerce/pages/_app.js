import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/styles/globals.css";
import Layout from "@/layout/Layout";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider>
      <Layout>
        <Toaster position="top-center" reverseOrder={false} />
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}
