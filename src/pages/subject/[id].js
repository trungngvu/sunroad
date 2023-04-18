import Classes from "@/components/Classes";
import prisma from "@/lib/prisma";

export const getServerSideProps = async ({ params }) => {
  const subject = await prisma.subject.findUnique({
    where: {
      id: params?.id,
    },
    include: {
      classes: true,
    },
  });
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
