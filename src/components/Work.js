import React, { Component } from 'react';

export default class Work extends Component {
  renderBullets(highlights) {
    return (
      highlights.map((bullet, index) => {
        return (
          <p key={index} className="highlight">
            <span className="highlight-bullet">&#8226;</span>
            {bullet}
          </p>
        )
      })
    )
  }

  render() {
    return (
      <section id="work">
        <div className="row">
          <div className="content-container">
            <div className="col-md-2 content-title">
              <h4>
                <span className="section-title">Work</span>
              </h4>
            </div>
            <div className="col-md-10">
              <div className="section-subtitle">{this.props.detail[0].company}</div>
              <p className="area">
                {this.props.detail[0].position}<span className="bullet">&#8226;</span>
                {`${this.props.detail[0].startDate} - ${this.props.detail[0].endDate}`}
              </p>
              {this.renderBullets(this.props.detail[0].highlights)}
              <hr />
              <div className="section-subtitle">{this.props.detail[1].company}</div>
              <p className="area">
                {this.props.detail[1].position}<span className="bullet">&#8226;</span>
                {`${this.props.detail[1].startDate} - ${this.props.detail[1].endDate}`}
              </p>
              {this.renderBullets(this.props.detail[1].highlights)}
            </div>
          </div>
        </div>
      </section>
    );
  }
}