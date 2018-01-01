import React from 'react';

export default ({ detail }) => {
  return (
    <section id="portfolio">
      <div className="row">
        <div className="content-container">
          <div id="portfolio-title">
            <span className="section-subtitle">Portfolio</span>
          </div>
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="portfolio-item">
                <img src="http://i.imgur.com/qK42fUu.jpg" alt="" />
                <div className="overlay">
                  <div className="portfolio-item-data">
                    <h5>{detail[0].name}</h5>
                    <p>{detail[1].type}</p>
                  </div>
                  <div className="link-icon">
                    <i className="fa fa-angle-down" aria-hidden="true"></i>
                  </div>
                </div>
              </div>

            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="thumbnail">
                <img src="http://i.imgur.com/qK42fUu.jpg" alt="" />
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="thumbnail">
                <img src="http://i.imgur.com/qK42fUu.jpg" alt="" />
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="thumbnail">
                <img src="http://i.imgur.com/qK42fUu.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};