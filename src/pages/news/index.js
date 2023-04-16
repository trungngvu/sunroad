import NewsContainer from "@/components/NewsContainer";
import PageHeader from "@/components/PageHeader";
import prisma from "@/lib/prisma";

export const getStaticProps = async () => {
  const news = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true },
      },
    },
  });
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
