const Team = ({ teachers }) => {
  return (
    <div className="container-fluid py-5">
      <div className="container pt-5 pb-3">
        <div className="text-center mb-5">
          <h5
            className="text-primary text-uppercase mb-3"
            style={{ letterSpacing: "5px" }}
          >
            Giáo viên
          </h5>
          <h1>Đội ngũ giáo viên của chúng tôi</h1>
        </div>

        <div className="row">
          {teachers?.map((teacher) => (
            <div
              className="col-md-6 col-lg-3 text-center team mb-4"
              key={teacher.id}
            >
              <div className="team-item rounded overflow-hidden mb-2">
                <div className="team-img position-relative">
                  <img className="img-fluid" src="/img/team-1.jpg" alt="" />
                  <div className="team-social">
                    <a
                      className="btn btn-outline-light btn-square mx-1"
                      href="#"
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a
                      className="btn btn-outline-light btn-square mx-1"
                      href="#"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a
                      className="btn btn-outline-light btn-square mx-1"
                      href="#"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
                <div className="bg-secondary p-4">
                  <h5>{teacher.name}</h5>
                  <p className="m-0">
                    {teacher.subjects
                      .map((subject) => subject.title)
                      .join(", ")}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
