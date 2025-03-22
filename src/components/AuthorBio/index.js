const AuthorBio = ({ author }) => {
  return (
    <div className="d-flex flex-column text-center bg-dark rounded mb-5 py-5 px-4">
      <img
        src="/img/logo.png"
        className="img-fluid rounded-circle mx-auto mb-3"
        style={{ width: "100px" }}
      />
      <h3 className="text-primary mb-3">{author.name}</h3>
      <p className="text-white m-0">Liên hệ với tôi tại {author.email}</p>
    </div>
  );
};

export default AuthorBio;
