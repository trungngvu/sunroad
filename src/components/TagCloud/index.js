const TagCloud = () => {
  return (
    <div className="mb-5">
      <h3 className="text-uppercase mb-4" style={{ letterSpacing: "5px" }}>
        Tag Cloud
      </h3>
      <div className="d-flex flex-wrap m-n1">
        <a href="" className="btn btn-outline-primary m-1">
          Design
        </a>
        <a href="" className="btn btn-outline-primary m-1">
          Development
        </a>
        <a href="" className="btn btn-outline-primary m-1">
          Marketing
        </a>
        <a href="" className="btn btn-outline-primary m-1">
          SEO
        </a>
        <a href="" className="btn btn-outline-primary m-1">
          Writing
        </a>
        <a href="" className="btn btn-outline-primary m-1">
          Consulting
        </a>
      </div>
    </div>
  );
};

export default TagCloud;
