import React, { Component } from 'react';

export default class About extends Component {
  renderInfo() {
    return (
      this.props.info.map((paragraph, index) => {
        return (
          <p key={index}>{paragraph}</p>
        )
      })
    )
  }
  render() {
    return (
      <section id="about">
        <div className="row">
          <div className="content-container">
            <div className="col-md-2">
              <img src={this.props.picture} />
            </div>
            <div className="col-md-10">
              <span>
                <div className="section-subtitle">About Me</div>
              </span>
              {this.renderInfo()}
              <div className="section-subtitle">Contact</div>
              <ul className="nav navbar-nav">
                <li>
                  <a href={`mailto:${this.props.contact.email}`}>
                    <i className="fa fa-envelope fa-2x"></i>
                  </a>
                </li>
                <li>
                  <a href={this.props.contact.linkedin}>
                    <i className="fa fa-linkedin fa-2x"></i>
                  </a>
                </li>
                <li>
                <a href={this.props.contact.github}>
                  <i className="fa fa-github fa-2x"></i>
                </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}