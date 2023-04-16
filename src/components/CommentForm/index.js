import { useState } from "react";
import { useRouter } from "next/router";

const CommentForm = ({ postId }) => {
  const [commentText, setCommentText] = useState("");
  const [commentAuthor, setCommentAuthor] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/add-comment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          postId,
          text: commentText,
          author: commentAuthor,
        }),
      });
      if (response.ok) {
        setCommentText("");
        setCommentAuthor("");
        alert("Đăng thành công");
        router.replace(router.asPath);
      } else {
        alert("Đăng thất bại");
      }
    } catch (error) {
      alert("Đăng thất bại");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="bg-secondary rounded p-5">
      <h3 className="text-uppercase mb-4" style={{ letterSpacing: "5px" }}>
        Để lại bình luận
      </h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Tên của bạn *</label>
          <input
            type="text"
            className="form-control border-0"
            id="name"
            disabled={isSubmitting}
            value={commentAuthor}
            onChange={(event) => setCommentAuthor(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Bình luận *</label>
          <textarea
            value={commentText}
            onChange={(event) => setCommentText(event.target.value)}
            id="message"
            cols="30"
            rows="5"
            className="form-control border-0"
            disabled={isSubmitting}
          ></textarea>
        </div>
        <div className="form-group mb-0">
          <input
            type="submit"
            value={isSubmitting ? "Đang đăng..." : "Đăng"}
            className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold"
          />
        </div>
      </form>
    </div>
  );
};

export default CommentForm;
