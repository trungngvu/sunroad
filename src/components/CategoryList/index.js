const CategoryList = () => {
  return (
    <div className="mb-5">
      <h3 className="text-uppercase mb-4" style={{ letterSpacing: "5px" }}>
        Categories
      </h3>
      <ul className="list-group list-group-flush">
        <li className="list-group-item d-flex justify-content-between align-items-center px-0">
          <a href="" className="text-decoration-none h6 m-0">
            Web Design
          </a>
          <span className="badge badge-primary badge-pill">150</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center px-0">
          <a href="" className="text-decoration-none h6 m-0">
            Web Development
          </a>
          <span className="badge badge-primary badge-pill">131</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center px-0">
          <a href="" className="text-decoration-none h6 m-0">
            Online Marketing
          </a>
          <span className="badge badge-primary badge-pill">78</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center px-0">
          <a href="" className="text-decoration-none h6 m-0">
            Keyword Research
          </a>
          <span className="badge badge-primary badge-pill">56</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center px-0">
          <a href="" className="text-decoration-none h6 m-0">
            Email Marketing
          </a>
          <span className="badge badge-primary badge-pill">98</span>
        </li>
      </ul>
    </div>
  );
};

export default CategoryList;
