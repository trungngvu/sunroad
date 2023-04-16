const CommentList = ({ comments }) => {
  return (
    <div className="mb-5">
      <h3 className="text-uppercase mb-4" style={{ letterSpacing: "5px" }}>
        {comments.length} Bình luận
      </h3>
      {comments.map((comment) => (
        <div className="media mb-4" key={comment.id}>
          <img
            src="/img/user.jpg"
            alt="Image"
            className="img-fluid rounded-circle mr-3 mt-1"
            style={{ width: "45px" }}
          />
          <div className="media-body">
            <h6>
              {`${comment.author} `}
              <small>
                <i>
                  {comment.createdAt.toLocaleDateString(undefined, {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </i>
              </small>
            </h6>
            <p>{comment.text}</p>
            <button className="btn btn-sm btn-secondary">Trả lời</button>
            {comment.replies.map((reply) => (
              <div className="media mt-4" key={reply.id}>
                <img
                  src="/img/user.jpg"
                  alt="Image"
                  className="img-fluid rounded-circle mr-3 mt-1"
                  style={{ width: "45px" }}
                />
                <div className="media-body">
                  <h6>
                    {reply.author}{" "}
                    <small>
                      <i>
                        {reply.createdAt.toLocaleDateString(undefined, {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </i>
                    </small>
                  </h6>
                  <p>{reply.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentList;
