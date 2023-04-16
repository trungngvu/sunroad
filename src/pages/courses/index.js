import Category from "@/components/Category";
import Courses from "@/components/Courses";
import PageHeader from "@/components/PageHeader";
const CoursesPage = () => {
  return (
    <>
      <PageHeader title="Khóa học"/>
      <Category />
      <Courses />
    </>
  );
};

export default CoursesPage;
