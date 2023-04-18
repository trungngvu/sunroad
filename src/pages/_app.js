import "@/styles/globals.css";
import "@/styles/style.css";
import Script from "next/script";

import Layout from "../components/layout";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      {/* <!-- JavaScript Libraries --> */}
      <Script
        strategy="beforeInteractive"
        src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js"
      />
      <Script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js" />
      <Script strategy="beforeInteractive" src="/lib/jquery-3.4.1.min.js" />

      {/* <!-- Template Javascript --> */}
      <Script src="/lib/main.js" />
    </>
  );
}
