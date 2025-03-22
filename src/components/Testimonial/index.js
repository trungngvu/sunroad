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
                    Mình cho con học tại Sunroad được gần một năm và rất hài
                    lòng với sự tiến bộ rõ rệt của con. Các thầy cô ở đây không
                    chỉ giỏi về chuyên môn mà còn rất tận tình, luôn động viên
                    và hỗ trợ các em trong quá trình học tập. Con mình trước đây
                    hay sợ học môn Toán, nhưng giờ đã tự tin hơn rất nhiều. Cảm
                    ơn Sunroad vì đã giúp con mình vượt qua khó khăn và cải
                    thiện thành tích học tập!
                  </h4>
                  <img
                  // small image
                    className="img-fluid mx-auto mb-3 w-5"
                    src="/img/nghia.png"
                    alt=""
                  />
                  <h5 className="m-0">Anh Nghĩa</h5>
                  <span>Chuyên viên IT</span>
                </div>
                <div className="text-center carousel-item">
                  <i className="fa fa-3x fa-quote-left text-primary mb-4"></i>
                  <h4 className="font-weight-normal mb-4">
                    Sunroad là trung tâm mà mình tin tưởng lựa chọn để chuẩn bị
                    cho kỳ thi vào lớp 10. Điều mình ấn tượng nhất là phương
                    pháp giảng dạy rất logic và dễ hiểu. Các buổi học không chỉ
                    tập trung vào việc giảng bài mà còn giúp học sinh rèn luyện
                    kỹ năng làm bài tập và tư duy. Nhờ đó, kết quả học tập của
                    mình đã cải thiện đáng kể. Sunroad đúng là sự lựa chọn hoàn
                    hảo cho các bạn học sinh muốn nâng cao kiến thức!
                  </h4>
                  <img
                    className="img-fluid mx-auto mb-3"
                    src="/img/nghia.png"
                    alt=""
                  />
                  <h5 className="m-0">Cô Yến Nhi</h5>
                  <span>Nhân viên văn phòng</span>
                </div>
                <div className="text-center carousel-item">
                  <i className="fa fa-3x fa-quote-left text-primary mb-4"></i>
                  <h4 className="font-weight-normal mb-4">
                    Sunroad có môi trường học tập rất thân thiện và thoải mái.
                    Các lớp học được bố trí gọn gàng, sạch sẽ và đầy đủ trang
                    thiết bị. Đội ngũ giáo viên luôn tạo cảm giác gần gũi, sẵn
                    sàng lắng nghe và giải đáp mọi thắc mắc của học sinh. Mình
                    cảm thấy rất yên tâm khi cho con học ở đây, vì không chỉ
                    kiến thức mà cả sự tự tin của con cũng được cải thiện rõ
                    rệt. Xin cảm ơn Sunroad đã đồng hành cùng gia đình mình!
                  </h4>
                  <img
                    className="img-fluid mx-auto mb-3"
                    src="/img/testimonial-3.jpg"
                    alt=""
                  />
                  <h5 className="m-0">Chị Hiền</h5>
                  <span>Kế toán</span>
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
