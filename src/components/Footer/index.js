const Footer = () => (
  <>
    <div
      className="container-fluid bg-dark text-white py-5 px-sm-3 px-lg-5"
      style={{ marginTop: "90px" }}
    >
      <div className="row pt-5">
        <div className="col-lg-7 col-md-12">
          <div className="row">
            <div className="col-md-6 mb-5">
              <h5
                className="text-primary text-uppercase mb-4"
                style={{ letterSpacing: "5px" }}
              >
                Liên hệ với chúng tôi
              </h5>
              <p>
                <i className="fa fa-map-marker-alt mr-2"></i>Số 9, Khu X3, Tổ
                dân phố Ga, Văn Điển, Thanh Trì, Hà Nội
              </p>
              <p>
                <i className="fa fa-phone-alt mr-2"></i>0987514140
              </p>
              <p>
                <i className="fa fa-envelope mr-2"></i>sunroadhn@gmail.com
              </p>
              <div className="d-flex justify-content-start mt-4">
                <a className="btn btn-outline-light btn-square mr-2" href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a className="btn btn-outline-light btn-square mr-2" href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a className="btn btn-outline-light btn-square mr-2" href="#">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a className="btn btn-outline-light btn-square" href="#">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
            <div className="col-md-6 mb-5">
              <h5
                className="text-primary text-uppercase mb-4"
                style={{ letterSpacing: "5px" }}
              >
                Các khóa học
              </h5>
              <div className="d-flex flex-column justify-content-start">
                <a className="text-white mb-2" href="#">
                  <i className="fa fa-angle-right mr-2"></i>Toán
                </a>
                <a className="text-white mb-2" href="#">
                  <i className="fa fa-angle-right mr-2"></i>Ngữ Văn
                </a>
                <a className="text-white mb-2" href="#">
                  <i className="fa fa-angle-right mr-2"></i>Tiếng Anh
                </a>
                <a className="text-white mb-2" href="#">
                  <i className="fa fa-angle-right mr-2"></i>Hóa học
                </a>
                <a className="text-white" href="#">
                  <i className="fa fa-angle-right mr-2"></i>Vật lý
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-5 col-md-12 mb-5">
          <h5
            className="text-primary text-uppercase mb-4"
            style={{ letterSpacing: "5px" }}
          >
            Đăng ký nhận tin từ chúng tôi
          </h5>
          <p>
            Hãy nhập email của bạn vào ô bên dưới để không bỏ lỡ những cập nhật mới nhất từ Sunroad
          </p>
          <div className="w-100">
            <div className="input-group">
              <input
                type="text"
                className="form-control border-light"
                style={{ padding: "30px" }}
                placeholder="Email của bạn"
              />
              <div className="input-group-append">
                <button className="btn btn-primary px-4">Đăng ký</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Footer;
