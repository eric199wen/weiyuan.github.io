import React from 'react';

export default ({ detail }) => {
  return (
    <section id="education">
      <div className="row">
        <div className="content-container">
          <div className="col-md-2 content-title">
            <h4>
              <span className="section-title">Education</span>
            </h4>
          </div>
          <div className="col-md-10">
            <div className="section-subtitle">{detail[0].institution}</div>
            <p className="area">
              {`${detail[0].studyType} in ${detail[0].area}`}<span className="bullet">&#8226;</span>
              {detail[0].location}<span className="bullet">&#8226;</span>
              {`${detail[0].startDate} - ${detail[0].endDate}`}
            </p>
            {/* <hr /> */}
            <div className="section-subtitle">{detail[1].institution}</div>
            <p className="area">
              {`${detail[1].studyType} in ${detail[1].area}`}<span className="bullet">&#8226;</span>
              {detail[1].location}<span className="bullet">&#8226;</span>
              {`${detail[1].startDate} - ${detail[1].endDate}`}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};