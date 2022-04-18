import React from "react";
import myphoto from "../../images/aboutme/myphoto.png";

const AboutMe = () => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col">
            <div class="card mt-5">
              <div class="row g-0">
                <div class="col-md-2 bg-light">
                  <img src={myphoto} class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-10">
                  <div class="card-body">
                    <h5 class="card-title fs-1 text-primary">Put your best foot forward</h5>
                    <p class="card-text fs-5">
                      I'm a Comilla native and am interested in this opportunity because
                      it seems like the perfect fit for my skill set. I really like Web
                      Developing I knew about the course from my cousine, and attained
                      in it. I could see myself learning on your team specially Jhankar
                      Mahbub because it seems like a great place to learning and gethar
                      incredible knowledge about web development. I want be full stack
                      developer.I hope achive my goal very early.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutMe;
