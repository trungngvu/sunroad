import Navbar from "./Navbar";
import Footer from "./Footer";
import BackToTop from "./BackToTop";
import { useEffect, useState } from "react";

export default function Layout({ children }) {
  const [subjects, setSubjects] = useState();
  useEffect(() => {
    fetch("/api/subject")
      .then((res) => res.json())
      .then((res) => setSubjects(res));
  }, []);
  return (
    <>
      <Navbar subjects={subjects} />
      <main>{children}</main>
      <BackToTop />
      <Footer subjects={subjects} />
    </>
  );
}
