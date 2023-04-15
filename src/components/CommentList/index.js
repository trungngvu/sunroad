const CommentList = () => {
  return (
    <div className="mb-5">
      <h3 className="text-uppercase mb-4" style={{ letterSpacing: "5px" }}>
        3 Comments
      </h3>
      <div className="media mb-4">
        <img
          src="img/user.jpg"
          alt="Image"
          className="img-fluid rounded-circle mr-3 mt-1"
          style={{ width: "45px" }}
        />
        <div className="media-body">
          <h6>
            John Doe{" "}
            <small>
              <i>01 Jan 2045 at 12:00pm</i>
            </small>
          </h6>
          <p>
            Diam amet duo labore stet elitr ea clita ipsum, tempor labore
            accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed
            eirmod ipsum. Gubergren clita aliquyam consetetur sadipscing, at
            tempor amet ipsum diam tempor consetetur at sit.
          </p>
          <button className="btn btn-sm btn-secondary">Reply</button>
        </div>
      </div>
      <div className="media mb-4">
        <img
          src="img/user.jpg"
          alt="Image"
          className="img-fluid rounded-circle mr-3 mt-1"
          style={{ width: "45px" }}
        />
        <div className="media-body">
          <h6>
            John Doe{" "}
            <small>
              <i>01 Jan 2045 at 12:00pm</i>
            </small>
          </h6>
          <p>
            Diam amet duo labore stet elitr ea clita ipsum, tempor labore
            accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed
            eirmod ipsum. Gubergren clita aliquyam consetetur sadipscing, at
            tempor amet ipsum diam tempor consetetur at sit.
          </p>
          <button className="btn btn-sm btn-secondary">Reply</button>
          <div className="media mt-4">
            <img
              src="img/user.jpg"
              alt="Image"
              className="img-fluid rounded-circle mr-3 mt-1"
              style={{ width: "45px" }}
            />
            <div className="media-body">
              <h6>
                John Doe{" "}
                <small>
                  <i>01 Jan 2045 at 12:00pm</i>
                </small>
              </h6>
              <p>
                Diam amet duo labore stet elitr ea clita ipsum, tempor labore
                accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed
                sed eirmod ipsum. Gubergren clita aliquyam consetetur, at tempor
                amet ipsum diam tempor at sit.
              </p>
              <button className="btn btn-sm btn-secondary">Reply</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentList;
