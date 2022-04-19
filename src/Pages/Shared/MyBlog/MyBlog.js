import React from "react";
import image2 from "../../../images/myblog/image2.jpg";
import image3 from "../../../images/myblog/image3.jpg";

const MyBlog = () => {
  return (
    <section className="blog py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 py-5 text-center">
            <h2>My Blog</h2>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col">
            <div className="card">
              <img src={image2} alt="" />
              <div className="card-body">
                <h4 className="card-title mb-4 text-info">
                  Wedding Day
                </h4>
                <p className="card-text">
                  This is a wider card with supporting text below as an natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={image3} alt="" />
              <div className="card-body">
                <h4 className="card-title mb-4 text-info">
                  Happy Time
                </h4>
                <p className="card-text">
                  This is a wider card with supporting text below as an natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyBlog;
