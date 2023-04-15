const Contact = () => {
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
              <form name="sentMessage" id="contactForm" novalidate="novalidate">
                <div className="control-group">
                  <input
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
                    type="email"
                    className="form-control border-0 p-4"
                    id="email"
                    placeholder="Email"
                    required="required"
                    data-validation-required-message="Vui lòng nhập email"
                  />
                  <p className="help-block text-danger"></p>
                </div>
                <div className="control-group">
                  <input
                    type="text"
                    className="form-control border-0 p-4"
                    id="subject"
                    placeholder="Môn bạn muốn học"
                    required="required"
                    data-validation-required-message="Vui lòng nhập môn bạn muốn học"
                  />
                  <p className="help-block text-danger"></p>
                </div>
                <div className="control-group">
                  <textarea
                    className="form-control border-0 py-3 px-4"
                    rows="5"
                    id="message"
                    placeholder="Ghi chú"
                    required="required"
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
                    Gửi
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
