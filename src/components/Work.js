import React from 'react';

export default ({ detail }) => {
  return (
    <section id="work">
      <div className="row">
        <div className="content-container">
          <div className="col-md-2 content-title">
            <h4>
              <span className="section-title">Work</span>
            </h4>
          </div>
          <div className="col-md-8">
            <div className="company">{detail[0].company}</div>
            <p className="area">
              {detail[0].position}<span className="bullet">&#8226;</span>
              {`${detail[0].startDate} - ${detail[0].endDate}`}
            </p>
            <hr />
            <div className="company">{detail[1].company}</div>
            <p className="area">
              {detail[1].position}<span className="bullet">&#8226;</span>
              {`${detail[1].startDate} - ${detail[1].endDate}`}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};