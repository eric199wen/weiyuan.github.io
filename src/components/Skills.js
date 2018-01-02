import React, { Component } from 'react';

export default class Skills extends Component {
  renderSkills(skills) {
    return (
      skills.map(skill => {
        return (
          <li key={skill.name}>
            <span className={`bar-expand percentage${skill.level}`}></span>
            <em>{skill.name}</em>
          </li>
        )
      })
    );
  }

  render() {
    return (
      <section id="skills">
        <div className="row">
          <div className="content-container">
            <div className="col-md-2 content-title">
              <h4>
                <span className="section-title">Skills</span>
              </h4>
            </div>
            <div className="col-md-10">
              <div className="section-subtitle">Programming Languages</div>
              <div className="bars">
                <ul className="skills">
                  {this.renderSkills(this.props.detail.programmingLanguage)}
                </ul>
              </div>
              <div className="section-subtitle">Tech Stack</div>
              <div className="bars">
                <ul className="skills">
                  {this.renderSkills(this.props.detail.techStack)}
                </ul>
              </div>
            </div>  
          </div>
        </div>
      </section>
    );
  }
}