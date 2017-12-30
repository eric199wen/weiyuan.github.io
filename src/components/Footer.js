import React from 'react';

export default ({ contact }) => {
  const email_href = `mailto:${contact.email}`;

  return (
    <footer id="footer">
      <div className="row">
        <div className="content-container">
          <div id="go-top">
            <a title="Back to Top" href="#about">
              <i className="fa fa-angle-up fa-3x" aria-hidden="true"></i>
            </a>
          </div>
          <ul className="nav navbar-nav">
            <li>
              <a href={email_href}>
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
    </footer>
  );
};