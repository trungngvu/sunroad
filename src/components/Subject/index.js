import Link from "next/link";

const Subject = ({ subjects }) => {
  return (
    <div className="container-fluid py-5">
      <div className="container pt-5 pb-3">
        <div className="text-center mb-5">
          <h5
            className="text-primary text-uppercase mb-3"
            style={{ letterSpacing: "5px" }}
          >
            Các môn học
          </h5>
          <h1>Khám phá những môn học Sunroad đang giảng dạy</h1>
        </div>
        <div className="row">
          {subjects?.map((subject) => (
            <div className="col-lg-3 col-md-6 mb-4" key={subject.id}>
              <div className="cat-item position-relative overflow-hidden rounded mb-2">
                <img className="img-fluid" src="/img/cat-1.jpg" alt="" />
                <Link
                  className="cat-overlay text-white text-decoration-none"
                  href={`/subject/${subject.id}`}
                >
                  <h4 className="text-white font-weight-medium">
                    {subject.title}
                  </h4>
                  <span>{subject.classes.length} lớp</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Subject;
