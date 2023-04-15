const SearchForm = () => {
  return (
    <div className="mb-5">
      <form action="">
        <div className="input-group">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Keyword"
          />
          <div className="input-group-append">
            <span className="input-group-text bg-transparent text-primary">
              <i className="fa fa-search"></i>
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
