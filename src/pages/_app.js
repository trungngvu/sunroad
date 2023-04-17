import "@/styles/globals.css";
import "@/styles/style.css";
import Script from "next/script";

import Layout from "../components/layout";
import Context from "@/context";

export default function App({ Component, pageProps, subjects }) {
  const updatedSubjects = subjects.map((subject) => ({
    ...subject,
    classes: subject.classes.map((cls) => ({
      ...cls,
      startDate: new Date(cls.startDate),
      endDate: new Date(cls.endDate),
    })),
    startDate: subject.startDate ? new Date(subject.startDate) : null,
    endDate: subject.endDate ? new Date(subject.endDate) : null,
  }));

  return (
    <>
      <Context data={updatedSubjects}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Context>
      {/* <!-- JavaScript Libraries --> */}
      <Script
        strategy="beforeInteractive"
        src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js"
      />
      <Script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js" />
      <Script strategy="beforeInteractive" src="/lib/jquery-3.4.1.min.js" />
      <Script strategy="beforeInteractive" src="/lib/easing/easing.min.js" />
      <Script
        strategy="beforeInteractive"
        src="/lib/owlcarousel/owl.carousel.min.js"
      />

      {/* <!-- Template Javascript --> */}
      <Script src="/lib/main.js" />
    </>
  );
}

App.getInitialProps = async () => {
  const res = await fetch("http://localhost:3000/api/subjects");
  const subjects = await res.json();
  return { subjects };
};
