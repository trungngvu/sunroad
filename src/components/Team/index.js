import Link from "next/link";

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
            <Link
              className="col-md-6 col-lg-3 text-center team mb-4 "
              key={teacher.id}
              href={`/teachers/${teacher.id}`}
            >
              <div className="team-item rounded overflow-hidden mb-2">
                <div className="team-img position-relative">
                  <img className="img-fluid w-600" src={teacher?.image} alt="" />
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
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
