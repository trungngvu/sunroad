const Testimonial = () => {
  return (
    <div className="container-fluid py-5">
      <div className="container py-5">
        <div className="text-center mb-5">
          <h5
            className="text-primary text-uppercase mb-3"
            style={{ letterSpacing: "5px" }}
          >
            Đánh giá
          </h5>
          <h1>Học sinh/Phụ huynh nghĩ gì về Sunroad</h1>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div
              className="carousel slide"
              data-ride="carousel"
              id="testimonial-carousel"
            >
              <div className="carousel-inner">
                <div className="text-center carousel-item active">
                  <i className="fa fa-3x fa-quote-left text-primary mb-4"></i>
                  <h4 className="font-weight-normal mb-4">
                    Dolor eirmod diam stet kasd sed. Aliqu rebum est eos. Rebum
                    elitr dolore et eos labore, stet justo sed est sed. Diam sed
                    sed dolor stet amet eirmod eos labore diam
                  </h4>
                  <img
                    className="img-fluid mx-auto mb-3"
                    src="/img/testimonial-1.jpg"
                    alt=""
                  />
                  <h5 className="m-0">Client Name</h5>
                  <span>Profession</span>
                </div>
                <div className="text-center carousel-item">
                  <i className="fa fa-3x fa-quote-left text-primary mb-4"></i>
                  <h4 className="font-weight-normal mb-4">
                    Dolor eirmod diam stet kasd sed. Aliqu rebum est eos. Rebum
                    elitr dolore et eos labore, stet justo sed est sed. Diam sed
                    sed dolor stet amet eirmod eos labore diam
                  </h4>
                  <img
                    className="img-fluid mx-auto mb-3"
                    src="/img/testimonial-2.jpg"
                    alt=""
                  />
                  <h5 className="m-0">Client Name</h5>
                  <span>Profession</span>
                </div>
                <div className="text-center carousel-item">
                  <i className="fa fa-3x fa-quote-left text-primary mb-4"></i>
                  <h4 className="font-weight-normal mb-4">
                    Dolor eirmod diam stet kasd sed. Aliqu rebum est eos. Rebum
                    elitr dolore et eos labore, stet justo sed est sed. Diam sed
                    sed dolor stet amet eirmod eos labore diam
                  </h4>
                  <img
                    className="img-fluid mx-auto mb-3"
                    src="/img/testimonial-3.jpg"
                    alt=""
                  />
                  <h5 className="m-0">Client Name</h5>
                  <span>Profession</span>
                </div>
                <a
                  className="carousel-control-next"
                  href="#carouselExampleControls"
                  role="button"
                  data-slide="next"
                >
                  <span
                    className="carousel-control-next-icon text-dark"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
