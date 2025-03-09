const TagCloud = ({ tags }) => {
  return (
    <div className="mb-5">
      <h3 className="text-uppercase mb-4" style={{ letterSpacing: "5px" }}>
        Từ khóa
      </h3>
      <div className="d-flex flex-wrap m-n1">
        {tags?.split(",").map((tag) => (
          <div key={tag} href="" className="btn btn-outline-primary m-1">
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TagCloud;
