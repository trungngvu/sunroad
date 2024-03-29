import "@/styles/globals.css";
import "@/styles/style.css";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";

import Layout from "../components/layout";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Analytics />

      {/* <!-- JavaScript Libraries --> */}
      <Script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js" />
      <Script src="/lib/easing.min.js" />
      <Script strategy="beforeInteractive" src="/lib/jquery-3.4.1.min.js" />

      {/* <!-- Template Javascript --> */}
      <Script src="/lib/main.js" />
    </>
  );
}
