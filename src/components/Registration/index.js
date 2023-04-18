import Select from "react-select";
import { useState, useId } from "react";

const Registration = ({ classes, defaultOption }) => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const option = classes?.map(({ id, title }) => ({ value: id, label: title }));
  const [reClass, setReClass] = useState([
    option?.find((item) => item.value === parseInt(defaultOption)),
  ]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    const classes =
      reClass.length > 0
        ? reClass?.map(({ value }) => ({
            id: value,
          }))
        : [];
    event.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          contact,
          classes,
        }),
      });
      if (response.ok) {
        setName("");
        setContact("");
        setReClass();
        alert("Gửi đăng ký thành công");
      } else {
        alert("Gửi đăng ký thất bại");
      }
    } catch (error) {
      alert("Gửi đăng ký thất bại");
    } finally {
      setIsSubmitting(false);
    }
  };

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
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control border-0 p-4"
                      placeholder="Tên của bạn"
                      required="required"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control border-0 p-4"
                      placeholder="Email/SĐT"
                      required="required"
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <Select
                      className="rounded"
                      instanceId={useId()}
                      options={option}
                      isMulti
                      value={reClass}
                      onChange={(e) => {
                        setReClass(e);
                      }}
                      placeholder="Chọn môn học"
                    />
                  </div>
                  <div>
                    <button
                      className="btn btn-dark btn-block border-0 py-3"
                      type="submit"
                    >
                      {isSubmitting ? "Đang đăng ký..." : "Đăng ký"}
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
