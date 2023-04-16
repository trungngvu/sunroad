const AuthorBio = () => {
  return (
    <div className="d-flex flex-column text-center bg-dark rounded mb-5 py-5 px-4">
      <img
        src="/img/user.jpg"
        className="img-fluid rounded-circle mx-auto mb-3"
        style={{ width: "100px" }}
      />
      <h3 className="text-primary mb-3">John Doe</h3>
      <h3 className="text-uppercase mb-4" style={{ letterSpacing: "5px" }}>
        Tag Cloud
      </h3>
      <p className="text-white m-0">
        Conset elitr erat vero dolor ipsum et diam, eos dolor lorem, ipsum sit
        no ut est ipsum erat kasd amet elitr
      </p>
    </div>
  );
};

export default AuthorBio;
