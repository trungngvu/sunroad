import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          contact,
          subject,
          content,
        }),
      });
      if (response.ok) {
        setContact("");
        setSubject("");
        setName("");
        setContent("");
        alert("Gửi thành công");
      } else {
        alert("Gửi thất bại");
      }
    } catch (error) {
      alert("Gửi thất bại");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container-fluid py-5">
      <div className="container py-5">
        <div className="text-center mb-5">
          <h5
            className="text-primary text-uppercase mb-3"
            style={{ letterSpacing: "5px" }}
          >
            Liên hệ
          </h5>
          <h1>Để lại lời nhắn cho chúng tôi</h1>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="contact-form bg-secondary rounded p-5">
              <div id="success"></div>
              <form name="sentMessage" id="contactForm" onSubmit={handleSubmit}>
                <div className="control-group">
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    className="form-control border-0 p-4"
                    id="name"
                    placeholder="Tên của bạn"
                    required="required"
                    data-validation-required-message="Vui lòng nhập tên"
                  />
                  <p className="help-block text-danger"></p>
                </div>
                <div className="control-group">
                  <input
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    type="text"
                    className="form-control border-0 p-4"
                    id="email"
                    placeholder="Email/SĐT"
                    required="required"
                    data-validation-required-message="Vui lòng nhập email"
                  />
                  <p className="help-block text-danger"></p>
                </div>
                <div className="control-group">
                  <input
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    type="text"
                    className="form-control border-0 p-4"
                    id="subject"
                    placeholder="Môn bạn muốn học"
                    data-validation-required-message="Vui lòng nhập môn bạn muốn học"
                  />
                  <p className="help-block text-danger"></p>
                </div>
                <div className="control-group">
                  <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="form-control border-0 py-3 px-4"
                    rows="5"
                    id="message"
                    placeholder="Ghi chú"
                    data-validation-required-message="Please enter your message"
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div className="text-center">
                  <button
                    className="btn btn-primary py-3 px-5"
                    type="submit"
                    id="sendMessageButton"
                  >
                    {isSubmitting ? "Đang gửi..." : "Gửi"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
