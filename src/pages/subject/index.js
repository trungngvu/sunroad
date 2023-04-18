import Subject from "@/components/Subject";
import Classes from "@/components/Classes";
import PageHeader from "@/components/PageHeader";
import { subjectsApi } from "../api/subject";

export const getStaticProps = async () => {
  const subjects = await subjectsApi();
  return {
    props: { subjects },
    revalidate: 10,
  };
};

const ClassesPage = ({ subjects }) => {
  return (
    <>
      <PageHeader title="Khóa học" />
      <Subject subjects={subjects} />
      <Classes />
    </>
  );
};

export default ClassesPage;
