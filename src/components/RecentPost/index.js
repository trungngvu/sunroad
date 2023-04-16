const RecentPost = () => {
  return (
    <div className="mb-5">
      <h3 className="text-uppercase mb-4" style={{ letterSpacing: "5px" }}>
        Recent Post
      </h3>
      <a
        className="d-flex align-items-center text-decoration-none mb-3"
        href=""
      >
        <img className="img-fluid rounded" src="/img/blog-80x80.jpg" alt="" />
        <div className="pl-3">
          <h6 className="m-1">Diam lorem dolore justo eirmod lorem dolore</h6>
          <small>Jan 01, 2050</small>
        </div>
      </a>
      <a
        className="d-flex align-items-center text-decoration-none mb-3"
        href=""
      >
        <img className="img-fluid rounded" src="/img/blog-80x80.jpg" alt="" />
        <div className="pl-3">
          <h6 className="m-1">Diam lorem dolore justo eirmod lorem dolore</h6>
          <small>Jan 01, 2050</small>
        </div>
      </a>
      <a
        className="d-flex align-items-center text-decoration-none mb-3"
        href=""
      >
        <img className="img-fluid rounded" src="/img/blog-80x80.jpg" alt="" />
        <div className="pl-3">
          <h6 className="m-1">Diam lorem dolore justo eirmod lorem dolore</h6>
          <small>Jan 01, 2050</small>
        </div>
      </a>
    </div>
  );
};

export default RecentPost;
