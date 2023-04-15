import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const path = useRouter().pathname;
  console.log(path);

  return (
    <>
      <div className="container-fluid d-none d-lg-block">
        <div className="row align-items-center py-4 px-xl-5">
          <div className="col-lg-3">
            <a href="" className="text-decoration-none">
              <h1 className="m-0">
                <span className="text-primary">SUN</span>ROAD
              </h1>
            </a>
          </div>
          <div className="col-lg-3 text-right">
            <div className="d-inline-flex align-items-center">
              <i className="fa fa-2x fa-map-marker-alt text-primary mr-3"></i>
              <div className="text-left">
                <h6 className="font-weight-semi-bold mb-1">Địa chỉ</h6>
                <small>
                  Số 9, Khu X3, Tổ dân phố Ga, Văn Điển, Thanh Trì, Hà Nội
                </small>
              </div>
            </div>
          </div>
          <div className="col-lg-3 text-right">
            <div className="d-inline-flex align-items-center">
              <i className="fa fa-2x fa-envelope text-primary mr-3"></i>
              <div className="text-left">
                <h6 className="font-weight-semi-bold mb-1">Email</h6>
                <small>sunroadhn@gmail.com</small>
              </div>
            </div>
          </div>
          <div className="col-lg-3 text-right">
            <div className="d-inline-flex align-items-center">
              <i className="fa fa-2x fa-phone text-primary mr-3"></i>
              <div className="text-left">
                <h6 className="font-weight-semi-bold mb-1">Hotline</h6>
                <small>0987514140</small>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Topbar End --> */}

      {/* <!-- Navbar Start --> */}
      <div className="container-fluid">
        <div className="row border-top px-xl-5">
          <div className="col-lg-3 d-none d-lg-block">
            <a
              className="d-flex align-items-center justify-content-between bg-secondary w-100 text-decoration-none"
              data-toggle="collapse"
              href="#navbar-vertical"
              style={{ height: "67px", padding: "0 30px" }}
            >
              <h5 className="text-primary m-0">
                <i className="fa fa-book-open mr-2"></i>Bạn muốn học gì?
              </h5>
              <i className="fa fa-angle-down text-primary"></i>
            </a>
            <nav
              className="collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0 bg-light"
              id="navbar-vertical"
              style={{ width: "calc(100% - 30px)", zIndex: 9 }}
            >
              <div className="navbar-nav w-100">
                <div className="nav-item dropdown">
                  <a href="#" className="nav-link" data-toggle="dropdown">
                    Toán
                    <i className="fa fa-angle-down float-right mt-1"></i>
                  </a>
                  <div className="dropdown-menu position-absolute bg-secondary border-0 rounded-0 w-100 m-0">
                    <a href="" className="dropdown-item">
                      Toán 7
                    </a>
                    <a href="" className="dropdown-item">
                      Toán 8
                    </a>
                    <a href="" className="dropdown-item">
                      Toán 9
                    </a>
                  </div>
                </div>
                <a href="" className="nav-item nav-link">
                  Ngữ văn
                </a>
                <a href="" className="nav-item nav-link">
                  Tiếng Anh
                </a>
                <a href="" className="nav-item nav-link">
                  Hóa học
                </a>
                <a href="" className="nav-item nav-link">
                  Vật lý
                </a>
              </div>
            </nav>
          </div>
          <div className="col-lg-9">
            <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
              <a href="" className="text-decoration-none d-block d-lg-none">
                <h1 className="m-0">
                  <span className="text-primary">SUN</span>ROAD
                </h1>
              </a>
              <button
                type="button"
                className="navbar-toggler"
                data-toggle="collapse"
                data-target="#navbarCollapse"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse justify-content-between"
                id="navbarCollapse"
              >
                <div className="navbar-nav py-0">
                  <Link
                    href="/"
                    className={`nav-item nav-link font-weight-bold ${
                      path === "/" && "active"
                    }`}
                  >
                    Trang chủ
                  </Link>
                  <Link
                    href="about"
                    className={`nav-item nav-link font-weight-bold ${
                      path === "/about" && "active"
                    }`}
                  >
                    Giới thiệu
                  </Link>
                  <Link
                    href="courses"
                    className={`nav-item nav-link font-weight-bold ${
                      path === "/courses" && "active"
                    }`}
                  >
                    Khóa học
                  </Link>
                  <Link
                    href="teachers"
                    className={`nav-item nav-link font-weight-bold ${
                      path === "/teachers" && "active"
                    }`}
                  >
                    Giáo viên
                  </Link>
                  <Link
                    href="blog"
                    className={`nav-item nav-link font-weight-bold ${
                      path === "/blog" && "active"
                    }`}
                  >
                    Tin tức
                  </Link>
                  <Link
                    href="contact"
                    className={`nav-item nav-link font-weight-bold ${
                      path === "/contact" && "active"
                    }`}
                  >
                    Liên hệ
                  </Link>
                </div>
                <a
                  className="btn btn-primary py-2 px-4 ml-auto d-none d-lg-block"
                  href="contact"
                >
                  Đăng ký học ngay!
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
      {/* <!-- Navbar End --> */}
    </>
  );
};

export default Navbar;
