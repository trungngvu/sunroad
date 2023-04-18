import Classes from "@/components/Classes";
import { subjectApi } from "../api/subject/[id]";

export const getServerSideProps = async ({ params }) => {
  const subject = await subjectApi(params?.id)
  return {
    props: { subject },
  };
};

const SubjectPage = ({ subject }) => {
  return (
    <>
      <div className="text-center mb-5 pt-4">
        <h3
          className="text-primary text-uppercase mb-3"
          style={{ letterSpacing: "5px" }}
        >
          Các lớp học của môn {subject.title}
        </h3>
      </div>
      <Classes classes={subject.classes} />
    </>
  );
};

export default SubjectPage;
