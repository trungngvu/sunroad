import NewsCard from "./NewsCard";

const News = () => {
  return (
    <div className="container-fluid py-5">
      <div className="container pt-5 pb-3">
        <div className="text-center mb-5">
          <h5
            className="text-primary text-uppercase mb-3"
            style={{ letterSpacing: "5px" }}
          >
            Tin tức
          </h5>
          <h1>Các hoạt động của trung tâm</h1>
        </div>
        <div className="row pb-3">
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </div>
      </div>
    </div>
  );
};

export default News;
