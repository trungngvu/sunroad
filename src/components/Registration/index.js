const Registration = ({ classes, defaultOption }) => {
  return (
    <div
      className="container-fluid bg-registration py-5"
      style={{ margin: "90px 0" }}
    >
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-7 mb-5 mb-lg-0">
            <div className="mb-4">
              <h5
                className="text-primary text-uppercase mb-3"
                style={{ letterSpacing: "5px" }}
              >
                Đăng ký ngay
              </h5>
              <h1 className="text-white">
                Đăng ký khóa học ngay hôm nay để nhận được nhiều ưu đãi đến từ
                Sunroad
              </h1>
            </div>
            <p className="text-white">Sunroad đảm bảo cam kết chất lượng</p>
            <ul className="list-inline text-white m-0">
              <li className="py-2">
                <i className="fa fa-check text-primary mr-3"></i>Đội ngũ giáo
                viên có trình độ chuyên môn cao
              </li>
              <li className="py-2">
                <i className="fa fa-check text-primary mr-3"></i>Cơ sở vật chất
                chất lượng
              </li>
              <li className="py-2">
                <i className="fa fa-check text-primary mr-3"></i>Cam kết đầu ra
                cho học sinh
              </li>
            </ul>
          </div>
          <div className="col-lg-5">
            <div className="card border-0">
              <div className="card-header bg-light text-center p-4">
                <h1 className="m-0">Đăng ký ngay</h1>
              </div>
              <div className="card-body rounded-bottom bg-primary p-5">
                <form>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control border-0 p-4"
                      placeholder="Tên của bạn"
                      required="required"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control border-0 p-4"
                      placeholder="Email/SĐT"
                      required="required"
                    />
                  </div>
                  <div className="form-group">
                    <select
                      className="custom-select border-0 px-4"
                      style={{ height: "47px" }}
                      defaultValue={defaultOption}
                    >
                      <option value={"0"}>Chọn khóa học muốn đăng ký</option>
                      {classes?.map((item) => (
                        <option key={item.id} value={item.id}>
                          {item.title}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <button
                      className="btn btn-dark btn-block border-0 py-3"
                      type="submit"
                    >
                      Đăng ký
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
