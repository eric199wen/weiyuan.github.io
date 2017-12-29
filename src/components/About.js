import React from 'react';

export default ({ picture, contact, info }) => {
  const email_href = `mailto:${contact.email}`;

  return (
    <section id="about">
      <div className="row">
        <div className="col-md-2">
          <img src={picture} />
          <a href={email_href}>
            <i className="fa fa-envelope"></i>
          </a>
          <a href={contact.linkedin}>
            <i className="fa fa-linkedin"></i>
          </a>
          <a href={contact.github}>
            <i className="fa fa-github"></i>
          </a>
        </div>
        <div className="col-md-8">
          <h3>About Me</h3>
          <p>{info[0]}</p>
          <p>{info[1]}</p>
        </div>
      </div>
    </section>
  );
};