import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

export default class Portfoio extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  close() {
    this.setState({ isOpen: false });
  }

  open() {
    this.setState({ isOpen: true });
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
              <div className="col-lg-3 col-sm-6">
                <div className="portfolio-item">
                  <img src="http://i.imgur.com/qK42fUu.jpg" alt="" />
                  <div className="overlay" onClick={this.open.bind(this)}>
                    <div className="portfolio-item-data">
                      <h5>{this.props.detail[0].name}</h5>
                      <p>{this.props.detail[1].type}</p>
                    </div>
                    <div className="link-icon">
                      <i className="fa fa-angle-down" aria-hidden="true"></i>
                    </div>
                    <Modal show={this.state.isOpen} onHide={this.close.bind(this)}>
                      <Modal.Body>
                        <div className="thumbnail">
                          <img src="http://i.imgur.com/qK42fUu.jpg" alt="" />
                        </div>
                        <h4>Text in a modal</h4>
                        <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
                        <i className="fa fa-tag" aria-hidden="true"></i>
                        {this.props.detail[0].skill}
                      </Modal.Body>
                      <Modal.Footer>
                        <a href={this.props.detail[0].github}>Details</a>
                        <a onClick={this.close.bind(this)}>Close</a>
                      </Modal.Footer>
                    </Modal>
                  </div>
                </div>

              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="thumbnail">
                  <img src="http://i.imgur.com/qK42fUu.jpg" alt="" />
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="thumbnail">
                  <img src="http://i.imgur.com/qK42fUu.jpg" alt="" />
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="thumbnail">
                  <img src="http://i.imgur.com/qK42fUu.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}