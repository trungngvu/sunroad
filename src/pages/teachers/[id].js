import PageHeader from "@/components/PageHeader";
import RecentPost from "@/components/RecentPost";

import { teacherApi } from "../api/teacher/[id]";
import { postsApi } from "../api/post";

export const getServerSideProps = async ({ params }) => {
  const teacher = await teacherApi(params?.id);
  const news = await postsApi();
  return {
    props: { teacher, news },
  };
};

const News = ({ teacher, news }) => {
  return (
    <>
      <PageHeader title={teacher?.name} />
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-8">
              <div className="mb-5">
                <h1 className="mb-5">{teacher?.name}</h1>
                <img src={teacher?.image} alt={teacher?.name} className="img-fluid rounded mb-5" />
                <p className="mb-5">{teacher?.description}</p>
                </div>
            </div>
            <div className="col-lg-4 mt-5 mt-lg-0">
              {/* <SearchForm /> */}
              {/* <SubjectList /> */}
              <RecentPost
                news={news.slice(0, 3).filter(({ id }) => id !== teacher?.id)}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
