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
    <div class="container-fluid page-header" style={{ marginBottom: "90px" }}>
      <div class="container">
        <div
          class="d-flex flex-column justify-content-center"
          style={{ minHeight: "300px" }}
        >
          <h3 class="display-4 text-white text-uppercase">{pageName}</h3>
          <div class="d-inline-flex text-white">
            <p class="m-0 text-uppercase">
              <Link class="text-white" href="/">
                Trang chủ
              </Link>
            </p>
            <i class="fa fa-angle-double-right pt-1 px-3"></i>
            <p class="m-0 text-uppercase">{pageName}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
