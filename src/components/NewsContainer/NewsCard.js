import Link from "next/link";

const NewsCard = ({ news }) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return (
    <Link href={`/news/${news.id}`} className="col-lg-4 mb-4">
      <div className="blog-item position-relative overflow-hidden rounded mb-2">
        <img className="img-fluid" src="/img/blog-1.jpg" alt="" />
        <div className="blog-overlay text-decoration-none">
          <h5 className="text-white mb-3">{news.title}</h5>
          <p className="text-primary m-0">
            {news.createdAt.toLocaleDateString("vi-VN", options)}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;
