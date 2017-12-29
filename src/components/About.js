import React from 'react';

export default (props) => {
  return (
    <section id="about">
      <div className="row">
        <div className="col-md-2">
          <img src={props.picture} />
        </div>
        <div className="col-md-8">
          <h3>About Me</h3>
          <p>{props.info[0]}</p>
          <p>{props.info[1]}</p>
          <h3>Contact Detail</h3>
          
        </div>
      </div>
    </section>
  );
};