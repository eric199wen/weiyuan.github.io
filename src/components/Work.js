import React from 'react';

export default ({ detail }) => {
  return (
    <section id="work">
      <div className="row">
        <div className="col-md-2">
          <h3 className="section-title">Work</h3>
        </div>
        <div className="col-md-8">
          {detail[0].company}
          <hr />
          {detail[1].company}
        </div>
      </div>
    </section>
  );
};