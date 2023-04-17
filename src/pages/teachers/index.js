import PageHeader from "@/components/PageHeader";
import Team from "@/components/Team";
import prisma from "@/lib/prisma";

export const getStaticProps = async () => {
  const teachers = await prisma.teacher.findMany({
    include: {
      subject: true,
    },
  });
  return {
    props: { teachers },
    revalidate: 10,
  };
};

const TeachersPage = ({ teachers }) => {
  return (
    <>
      <PageHeader title="Giáo viên" />
      <Team teachers={teachers}/>
    </>
  );
};

export default TeachersPage;
