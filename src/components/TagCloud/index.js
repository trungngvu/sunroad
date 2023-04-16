const TagCloud = ({ tags }) => {
  return (
    <div className="mb-5">
      <h3 className="text-uppercase mb-4" style={{ letterSpacing: "5px" }}>
        Tag Cloud
      </h3>
      <div className="d-flex flex-wrap m-n1">
        {tags.map((tag) => (
          <div href="" className="btn btn-outline-primary m-1">
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TagCloud;
