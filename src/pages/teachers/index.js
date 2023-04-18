import PageHeader from "@/components/PageHeader";
import Team from "@/components/Team";
import { teachersApi } from "../api/teacher";

export const getStaticProps = async () => {
  const teachers = await teachersApi();
  return {
    props: { teachers },
    revalidate: 10,
  };
};

const TeachersPage = ({ teachers }) => {
  return (
    <>
      <PageHeader title="Giáo viên" />
      <Team teachers={teachers} />
    </>
  );
};

export default TeachersPage;
