import Link from "next/link";

const Classes = ({ classes }) => {
  return (
    <div className="container-fluid pb-5">
      <div className="container">
        <div className="row">
          {classes?.map((item) => (
            <div className="col-lg-4 col-md-6 mb-4" key={item.id}>
              <div className="rounded overflow-hidden mb-2">
                <img className="img-fluid" src="/img/course-1.jpg" alt="" />
                <div className="bg-secondary p-4">
                  <div className="d-flex justify-content-between mb-3">
                    <small className="m-0">
                      <i className="fa fa-users text-primary mr-2"></i>
                      {item.students} học sinh
                    </small>
                    <small className="m-0">
                      <i className="far fa-clock text-primary mr-2"></i>
                      {item.startDate.toLocaleDateString("vi-VN", {
                        year: "numeric",
                        month: "numeric",
                        day: "numeric",
                      })}
                      {" - "}
                      {item.endDate.toLocaleDateString("vi-VN", {
                        year: "numeric",
                        month: "numeric",
                        day: "numeric",
                      })}
                    </small>
                  </div>
                  <Link
                    className="h5"
                    href={{
                      pathname: "/registration",
                      query: { classId: item.id },
                    }}
                  >
                    {item.title}
                  </Link>
                  <div className="border-top mt-4 pt-4">
                    <div className="d-flex justify-content-between">
                      <h6 className="m-0">
                        <i className="fa fa-star text-primary mr-2"></i>5
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Classes;
