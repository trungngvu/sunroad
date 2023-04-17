import Link from "next/link";

const RecentPost = ({ news }) => {
  const recent = news.slice(0, 2);
  return (
    <div className="mb-5">
      <h3 className="text-uppercase mb-4" style={{ letterSpacing: "5px" }}>
        Tin gần đây
      </h3>

      {recent?.map((item) => (
        <Link
          className="d-flex align-items-center text-decoration-none mb-3"
          href={`/news/${item.id}`}
          key={item.id}
        >
          <img className="img-fluid rounded" src="/img/blog-80x80.jpg" alt="" />
          <div className="pl-3">
            <h6 className="m-1">{item.title}</h6>
            <small>
              {item.createdAt.toLocaleDateString(undefined, {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </small>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default RecentPost;
