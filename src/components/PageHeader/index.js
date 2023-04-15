import Link from "next/link";
import { useRouter } from "next/router";

const PageHeader = () => {
  const path = useRouter().pathname;
  let pageName = "";
  if (path === "/about") pageName = "Giới thiệu";
  if (path === "/courses") pageName = "Khóa học";
  if (path === "/teachers") pageName = "Giáo viên";
  if (path === "/blog") pageName = "Tin tức";
  if (path === "/contact") pageName = "Liên hệ";

  return (
    <div className="container-fluid page-header" style={{ marginBottom: "90px" }}>
      <div className="container">
        <div
          className="d-flex flex-column justify-content-center"
          style={{ minHeight: "300px" }}
        >
          <h3 className="display-4 text-white text-uppercase">{pageName}</h3>
          <div className="d-inline-flex text-white">
            <p className="m-0 text-uppercase">
              <Link className="text-white" href="/">
                Trang chủ
              </Link>
            </p>
            <i className="fa fa-angle-double-right pt-1 px-3"></i>
            <p className="m-0 text-uppercase">{pageName}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
