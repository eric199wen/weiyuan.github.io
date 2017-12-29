import React, { Component } from 'react';
import resume from '../resume';
import About from './About';
import Education from './Education';
import Work from './Work';
import Skills from './Skills';
import Portfolio from './Portfolio';

export default class App extends Component {
  onClick() {
    console.log("click");
  }
  render() {
    const { about, education, work, skills, portfolio, contact } = resume;

    return (
      <div>
        <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="container-fluid">
            {/* Brand and toggle get grouped for better mobile display */}
            <div className="navbar-header">
              <button onClick={this.onClick} type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
            </div>

            {/* Collect the nav links, forms, and other content for toggling */}
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li className="navbar-item"><a href="#home">Home<span className="sr-only">(current)</span></a></li>
                <li className="navbar-item"><a href="#about">About</a></li>
                <li className="navbar-item"><a href="#education">Education</a></li>
                <li className="navbar-item"><a href="#work">Work</a></li>
                <li className="navbar-item"><a href="#skills">Skills</a></li>
                <li className="navbar-item"><a href="#portfolio">Portfolio</a></li>
              </ul>
            </div> {/* /.navbar-collapse */}
          </div>{/* /.container-fluid */}
        </nav>
        <div className="container">
          <About picture={about.picture} info={about.info} contact={contact} />
          <Education detail={education}/>
          <Work detail={work}/>
          <Skills detail={skills}/>
          <Portfolio detail={portfolio}/>
        </div>
      </div>
    );
  }
}
