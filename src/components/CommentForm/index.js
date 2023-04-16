const CommentForm = () => {
  return (
    <div className="bg-secondary rounded p-5">
      <h3 className="text-uppercase mb-4" style={{letterSpacing: "5px"}}>
        Leave a comment
      </h3>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name *</label>
          <input type="text" className="form-control border-0" id="name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input type="email" className="form-control border-0" id="email" />
        </div>
        <div className="form-group">
          <label htmlFor="website">Website</label>
          <input type="url" className="form-control border-0" id="website" />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message *</label>
          <textarea
            id="message"
            cols="30"
            rows="5"
            className="form-control border-0"
          ></textarea>
        </div>
        <div className="form-group mb-0">
          <input
            type="submit"
            value="Leave Comment"
            className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold"
          />
        </div>
      </form>
    </div>
  );
};

export default CommentForm;
