import NewsContainer from "@/components/NewsContainer";
import PageHeader from "@/components/PageHeader";
import { postsApi } from "../api/post";

export const getStaticProps = async () => {
  const news = await postsApi();
  return {
    props: { news },
    revalidate: 10,
  };
};

const NewsPage = ({ news }) => {
  return (
    <>
      <PageHeader title="Tin tức" />
      <NewsContainer news={news} />
    </>
  );
};

export default NewsPage;
