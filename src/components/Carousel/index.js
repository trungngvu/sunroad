import { useEffect, useState } from "react";

const Carousel = () => {
  const [activeItem, setActiveItem] = useState(1);
  useEffect(() => {
    async function loopNumbers() {
      while (true) {
        await new Promise((resolve) => setTimeout(resolve, 5000));
        setActiveItem(1);
        await new Promise((resolve) => setTimeout(resolve, 5000));
        setActiveItem(2);
        await new Promise((resolve) => setTimeout(resolve, 5000));
        setActiveItem(3);
      }
    }
    loopNumbers();
  }, []);

  return (
    <div className="container-fluid p-0 pb-5 mb-5">
      <div
        id="header-carousel"
        className="carousel slide carousel-fade"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#header-carousel"
            data-slide-to="0"
            key={1}
            className={`${activeItem === 1 && "active"}`}
          ></li>
          <li
            className={`${activeItem === 2 && "active"}`}
            data-target="#header-carousel"
            key={2}
            data-slide-to="1"
          ></li>
          <li
            className={`${activeItem === 3 && "active"}`}
            data-target="#header-carousel"
            key={3}
            data-slide-to="2"
          ></li>
        </ol>
        <div className="carousel-inner">
          <div
            className={`carousel-item ${activeItem === 1 && "active"}`}
            style={{ minHeight: "300px" }}
            key={4}
          >
            <img
              className="position-relative w-100"
              src="img/carousel-1.jpg"
              style={{ minHeight: "300px", objectFit: "cover" }}
            />
            <div className="carousel-caption d-flex align-items-center justify-content-center">
              <div className="p-5" style={{ width: "100%", maxWidth: "900px" }}>
                <h5 className="text-white text-uppercase mb-md-3">
                  Trung tâm bồi dưỡng văn hóa Sunroad
                </h5>
                <h1 className="display-3 text-white mb-md-4">
                  Bạn tìm kiếm trung tâm uy tín cho con em mình?
                </h1>
                <a
                  href=""
                  className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2"
                >
                  Tìm hiểu ngay
                </a>
              </div>
            </div>
          </div>
          <div
            className={`carousel-item ${activeItem === 2 && "active"}`}
            style={{ minHeight: "300px" }}
            key={5}
          >
            <img
              className="position-relative w-100"
              src="img/carousel-2.jpg"
              style={{ minHeight: "300px", objectFit: "cover" }}
            />
            <div className="carousel-caption d-flex align-items-center justify-content-center">
              <div className="p-5" style={{ width: "100%", maxWidth: "900px" }}>
                <h5 className="text-white text-uppercase mb-md-3">
                  Trung tâm bồi dường văn hóa Sunroad
                </h5>
                <h1 className="display-3 text-white mb-md-4">
                  Best Online Learning Platform
                </h1>
                <a
                  href=""
                  className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div
            className={`carousel-item ${activeItem === 3 && "active"}`}
            style={{ minHeight: "300px" }}
            key={6}
          >
            <img
              className="position-relative w-100"
              src="img/carousel-3.jpg"
              style={{ minHeight: "300px", objectFit: "cover" }}
            />
            <div className="carousel-caption d-flex align-items-center justify-content-center">
              <div className="p-5" style={{ width: "100%", maxWidth: "900px" }}>
                <h5 className="text-white text-uppercase mb-md-3">
                  Best Online Courses
                </h5>
                <h1 className="display-3 text-white mb-md-4">
                  New Way To Learn From Home
                </h1>
                <a
                  href=""
                  className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2"
                >
                  Learn More
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
