import NewsCard from "./NewsCard";

const NewsContainer = ({ news }) => {
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
          {news?.map((news) => (
            <NewsCard news={news} key={news.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsContainer;
