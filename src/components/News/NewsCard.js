const NewsCard = () => {
  return (
    <div className="col-lg-4 mb-4">
      <div className="blog-item position-relative overflow-hidden rounded mb-2">
        <img className="img-fluid" src="img/blog-1.jpg" alt="" />
        <a className="blog-overlay text-decoration-none" href="">
          <h5 className="text-white mb-3">
            Lorem elitr magna stet eirmod labore amet labore clita at ut clita
          </h5>
          <p className="text-primary m-0">Jan 01, 2050</p>
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
