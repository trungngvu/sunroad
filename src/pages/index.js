import Head from "next/head";
import Carousel from "@/components/Carousel";
import About from "@/components/About";
import Subject from "@/components/Subject";
import Classes from "@/components/Classes";
import Registration from "@/components/Registration";
import Team from "@/components/Team";
import Testimonial from "@/components/Testimonial";
import News from "@/components/NewsContainer";

import { subjectsApi } from "./api/subject";
import { teachersApi } from "./api/teacher";
import { postsApi } from "./api/post";

export const getStaticProps = async () => {
  const news = await postsApi();
  const teachers = await teachersApi();
  const subjects = await subjectsApi();
  let classes = [];
  subjects?.map((subject) => (classes = [...classes, ...subject.classes]));
  return {
    props: { subjects, classes, teachers, news },
    revalidate: 10,
  };
};

export default function Home({ subjects, classes, teachers, news }) {
  return (
    <>
      <Head>
        <title>SunRoad</title>
        <meta name="description" content="Kiến tạo tri thức - Chắp cánh tương lai!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Carousel />
      <About />
      <Subject subjects={subjects} />
      <div className="text-center mb-5">
        <h5
          className="text-primary text-uppercase mb-3"
          style={{ letterSpacing: "5px" }}
        >
          Các lớp học của chúng tôi
        </h5>
        <h1>Rất nhiều đánh giá tích cực</h1>
      </div>
      <Classes classes={classes.slice(0, 5)} />
      <Registration classes={classes} />
      <Team teachers={teachers.slice(0, 4)} />
      <Testimonial />
      <News news={news.slice(0, 3)} />
    </>
  );
}
