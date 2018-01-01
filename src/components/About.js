import React from 'react';

export default ({ picture, contact, info }) => {
  return (
    <section id="about">
      <div className="row">
        <div className="content-container">
          <div className="col-md-2">
            <img src={picture} />
          </div>
          <div className="col-md-8">
            <span>
              <div className="section-subtitle">About Me</div>
            </span>
            <p>{info[0]}</p>
            <p>{info[1]}</p>
            <div className="section-subtitle">Contact</div>
            <ul className="nav navbar-nav">
              <li>
                <a href={`mailto:${contact.email}`}>
                  <i className="fa fa-envelope fa-2x"></i>
                </a>
              </li>
              <li>
                <a href={contact.linkedin}>
                  <i className="fa fa-linkedin fa-2x"></i>
                </a>
              </li>
              <li>
              <a href={contact.github}>
                <i className="fa fa-github fa-2x"></i>
              </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};