import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';

export default class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  closeModal() {
    this.setState({ isOpen: false });
  }

  openModal() {
    this.setState({ isOpen: true });
  }

  renderPortfolioItem() {
    return (
      this.props.detail.map(item => {
        return (
          <div key={item.name} className="col-lg-4 col-md-4 col-sm-6">
            <div className="portfolio-item">
              {/* <img src={item.thumbnail} alt="" /> */}
              <div className="portfolio-item-data">
                <h4>{item.name}</h4>
                <i className="fa fa-tag" aria-hidden="true"></i>
                <span className="label label-success tag">{item.type}</span>
                {this.renderSkill(item.skill)}
                <p>{item.intro}</p>
              </div>
              <div className="portfolio-item-footer">
                <div className="row">
                  <div className="footer-item" />
                  <div className="footer-item portfolio-item-link">
                    {item.link.length > 0 ? (
                        <a href={item.link}>
                          <i className="fa fa-link" aria-hidden="true"></i>
                          Link
                        </a>
                      ) : (
                        <span />
                      )
                    }
                  </div>
                  <div className="footer-item portfolio-item-github">
                    <a href={item.github}>
                      <i className="fa fa-github" aria-hidden="true"></i>
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })
    )
  }

  renderSkill = (skill) => {
    return (
      skill.map(skillItem => {
        return (
          <span key={skillItem} className="label label-info tag">{skillItem}</span>
        )
      })
    )
  }

  render() {
    return (
      <section id="portfolio">
        <div className="row">
          <div className="content-container">
            <div id="portfolio-title">
              <span className="section-subtitle">Portfolio</span>
            </div>
            <div className="row">
              {this.renderPortfolioItem()}
            </div>
          </div>
        </div>
      </section>
    );
  }
}