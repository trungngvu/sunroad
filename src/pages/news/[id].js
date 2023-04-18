import PageHeader from "@/components/PageHeader";
import CommentList from "@/components/CommentList";
import CommentForm from "@/components/CommentForm";
import AuthorBio from "@/components/AuthorBio";
import SearchForm from "@/components/SearchForm";
import SubjectList from "@/components/SubjectList";
import RecentPost from "@/components/RecentPost";
import TagCloud from "@/components/TagCloud";

import { postApi } from "../api/post/[id]";
import { postsApi } from "../api/post";

export const getServerSideProps = async ({ params }) => {
  const news = await postsApi();
  const post = await postApi(params?.id);
  return {
    props: { post, news },
  };
};

const News = ({ post, news }) => {
  return (
    <>
      <PageHeader title={post.title} />
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-8">
              <div className="mb-5">
                <h6 className="text-primary mb-3">
                  {post.createdAt.toLocaleDateString("vi-VN", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </h6>
                <h1 className="mb-5">{post.title}</h1>
                <div>{post.content}</div>
              </div>
              <CommentList comments={post.comments} />
              <CommentForm postId={post.id} />
            </div>
            <div className="col-lg-4 mt-5 mt-lg-0">
              <AuthorBio author={post.author} />
              <SearchForm />
              <SubjectList />
              <RecentPost news={news} />
              <TagCloud tags={post.tags} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
