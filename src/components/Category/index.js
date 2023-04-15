const Category = () => (
  <div className="container-fluid py-5">
    <div className="container pt-5 pb-3">
      <div className="text-center mb-5">
        <h5
          className="text-primary text-uppercase mb-3"
          style={{ letterSpacing: "5px" }}
        >
          Các môn học
        </h5>
        <h1>Khám phá những môn học Sunroad đang giảng dạy</h1>
      </div>
      <div className="row">
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="cat-item position-relative overflow-hidden rounded mb-2">
            <img className="img-fluid" src="img/cat-1.jpg" alt="" />
            <a className="cat-overlay text-white text-decoration-none" href="">
              <h4 className="text-white font-weight-medium">Toán</h4>
              <span>5 lớp</span>
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="cat-item position-relative overflow-hidden rounded mb-2">
            <img className="img-fluid" src="img/cat-2.jpg" alt="" />
            <a className="cat-overlay text-white text-decoration-none" href="">
              <h4 className="text-white font-weight-medium">Tiếng Anh</h4>
              <span>10 lớp</span>
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="cat-item position-relative overflow-hidden rounded mb-2">
            <img className="img-fluid" src="img/cat-3.jpg" alt="" />
            <a className="cat-overlay text-white text-decoration-none" href="">
              <h4 className="text-white font-weight-medium">Ngữ văn</h4>
              <span>20 lớp</span>
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="cat-item position-relative overflow-hidden rounded mb-2">
            <img className="img-fluid" src="img/cat-4.jpg" alt="" />
            <a className="cat-overlay text-white text-decoration-none" href="">
              <h4 className="text-white font-weight-medium">Hóa học</h4>
              <span>1 lớp</span>
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="cat-item position-relative overflow-hidden rounded mb-2">
            <img className="img-fluid" src="img/cat-5.jpg" alt="" />
            <a className="cat-overlay text-white text-decoration-none" href="">
              <h4 className="text-white font-weight-medium">Vật lý</h4>
              <span>20 lớp</span>
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="cat-item position-relative overflow-hidden rounded mb-2">
            <img className="img-fluid" src="img/cat-6.jpg" alt="" />
            <a className="cat-overlay text-white text-decoration-none" href="">
              <h4 className="text-white font-weight-medium">Tiếng Nhật</h4>
              <span>0 lớp</span>
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="cat-item position-relative overflow-hidden rounded mb-2">
            <img className="img-fluid" src="img/cat-7.jpg" alt="" />
            <a className="cat-overlay text-white text-decoration-none" href="">
              <h4 className="text-white font-weight-medium">Tiếng Hàn</h4>
              <span>0 lớp</span>
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="cat-item position-relative overflow-hidden rounded mb-2">
            <img className="img-fluid" src="img/cat-8.jpg" alt="" />
            <a className="cat-overlay text-white text-decoration-none" href="">
              <h4 className="text-white font-weight-medium">Tiếng Trung</h4>
              <span>0 lớp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Category;
