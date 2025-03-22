const About = () => (
  <div className="container-fluid py-5">
    <div className="container py-5">
      <div className="row align-items-center gap-4">
        <div className="col-lg-5">
          <img
            className="img-fluid rounded mb-4 mb-lg-0"
            src="/img/about.jpg"
            alt=""
          />
        </div>
        <div className="col-lg-7">
          <div className="text-left mb-4">
            <h5
              className="text-primary text-uppercase mb-3"
              style={{ letterSpacing: "5px" }}
            >
              Về chúng tôi
            </h5>
            <h1>Trung tâm bồi dưỡng văn hóa Sunroad</h1>
          </div>
          <div>
            <p>
              <strong>Địa chỉ:</strong> Số 9, Khu X3, Tổ dân phố Ga, Văn Điển,
              Thanh Trì, Hà Nội
            </p>
            <p>
              <strong>Hotline:</strong> 0987 514 140
            </p>

            <h2>Tại sao chọn Sunroad?</h2>
            <ul>
              <li>
                <strong>Giảng viên giỏi, tận tâm:</strong> Đội ngũ giáo viên có
                chuyên môn cao, nhiệt huyết và luôn đồng hành cùng học sinh.
              </li>
              <li>
                <strong>Phương pháp giảng dạy hiệu quả:</strong> Kết hợp lý
                thuyết với thực hành, giúp học sinh hiểu bài nhanh và áp dụng
                linh hoạt.
              </li>
              <li>
                <strong>Lộ trình học tập cá nhân hóa:</strong> Đáp ứng nhu cầu
                của từng học sinh, giúp các em tiến bộ nhanh chóng.
              </li>
              <li>
                <strong>Môi trường học tập thân thiện:</strong> Lớp học được
                trang bị đầy đủ tiện nghi, không gian học tập thoải mái.
              </li>
            </ul>

            <h2>Các khóa học tại Sunroad</h2>
            <ul>
              <li>
                Bồi dưỡng kiến thức các môn Toán, Văn, Anh từ tiểu học đến THPT.
              </li>
              <li>Luyện thi vào lớp 10 và đại học chất lượng cao.</li>
              <li>Các khóa học bổ trợ kỹ năng học tập và tư duy logic.</li>
            </ul>

            <p class="contact">
              Hãy đến với <strong>Sunroad</strong> để chinh phục tri thức và xây
              dựng nền tảng vững chắc cho tương lai!
            </p>
          </div>
          <a
            href=""
            className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2"
          >
            Tìm hiểu ngay
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default About;
