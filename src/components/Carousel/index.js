// import { useEffect, useState } from "react";

const Carousel = () => {
  // const [activeItem, setActiveItem] = useState(1);
  // useEffect(() => {
  //   async function loopNumbers() {
  //     while (true) {
  //       await new Promise((resolve) => setTimeout(resolve, 5000));
  //       setActiveItem(1);
  //       await new Promise((resolve) => setTimeout(resolve, 5000));
  //       setActiveItem(2);
  //       await new Promise((resolve) => setTimeout(resolve, 5000));
  //       setActiveItem(3);
  //     }
  //   }
  //   loopNumbers();
  // }, []);

  return (
    <div className="container-fluid p-0 pb-5 mb-5">
      <div
        id="header-carousel"
        className="carousel slide carousel-fade"
        data-ride="carousel"
        data-interval="3000"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#header-carousel"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#header-carousel" data-slide-to="1"></li>
          <li data-target="#header-carousel" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active" style={{ minHeight: "300px" }}>
            <img
              className="position-relative w-100"
              src="/img/carousel-1.jpg"
              style={{ minHeight: "300px", objectFit: "cover" }}
            />
            <div className="carousel-caption d-flex align-items-center justify-content-center">
              <div className="p-5" style={{ width: "100%", maxWidth: "900px" }}>
                <h5 className="text-white text-uppercase mb-md-3">
                  Trung tâm bồi dưỡng văn hoá Sunroad
                </h5>
                <h1 className="display-3 text-white mb-md-4">
                  Kiến tạo tri thức - Chắp cánh tương lai!
                </h1>
                <a
                  href="/about"
                  className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2"
                >
                  Tìm hiểu thêm
                </a>
              </div>
            </div>
          </div>
          <div className="carousel-item" style={{ minHeight: "300px" }}>
            <img
              className="position-relative w-100"
              src="/img/carousel-2.jpg"
              style={{ minHeight: "300px", objectFit: "cover" }}
            />
            <div className="carousel-caption d-flex align-items-center justify-content-center">
              <div className="p-5" style={{ width: "100%", maxWidth: "900px" }}>
                <h5 className="text-white text-uppercase mb-md-3">
                  Trung tâm bồi dưỡng văn hoá Sunroad
                </h5>
                <h1 className="display-3 text-white mb-md-4">
                  Giáo dục chất lượng, thành công bền vững!
                </h1>
                <a
                  href="/about"
                  className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2"
                >
                  Tìm hiểu thêm
                </a>
              </div>
            </div>
          </div>
          <div className="carousel-item" style={{ minHeight: "300px" }}>
            <img
              className="position-relative w-100"
              src="/img/carousel-3.jpg"
              style={{ minHeight: "300px", objectFit: "cover" }}
            />
            <div className="carousel-caption d-flex align-items-center justify-content-center">
              <div className="p-5" style={{ width: "100%", maxWidth: "900px" }}>
                <h5 className="text-white text-uppercase mb-md-3">
                  Trung tâm bồi dưỡng văn hoá Sunroad
                </h5>
                <h1 className="display-3 text-white mb-md-4">
                  Học hôm nay, dẫn lối ngày mai!
                </h1>
                <a
                  href="/about"
                  className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2"
                >
                  Tìm hiểu thêm
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
