import React from 'react';

export default ({ detail }) => {
  return (
    <section id="education">
      <div className="row">
        <div className="col-md-2">
          <h3 className="section-title">Education</h3>
        </div>
        <div className="col-md-8">
          {detail[0].institution}
          <hr />
          {detail[1].institution}
        </div>
      </div>
    </section>
  );
};