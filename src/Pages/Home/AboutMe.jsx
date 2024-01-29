import React from 'react';
import data from '../../data/index.json';

const AboutMe = () => (
  <section id="AboutMe" className="about--section">
    <div className="hero--section--content--box about--section--box">
      <div className="hero--section--content">
        <h1 className="skills-section--heading">About Me</h1>
        <p className="hero--section-description">
          I&apos;m Margaret Kojo-Musa, a computer science graduate and full stack web developer
          passionate about software development and remote collaboration. Skilled in HTML, CSS,
          JavaScript, React, Redux, Ruby, Ruby on Rails, and databases. Experienced in teamwork,
          communication, and meeting deadlines. Committed to creating impactful and user-friendly
          web applications.
        </p>
        <p className="connect">LET&apos;S CONNECT</p>
        <div className="skills-container">
          {data?.social?.map((item) => (
            <div key={item.id}>
              <a href={item.link} target="_blank" rel="noreferrer">
                <img className="social" src={item.src} alt="skills" />
              </a>
            </div>
          ))}
        </div>
        <a href="https://www.dropbox.com/scl/fi/kycblotd0twbf021v9db5/Margaret_Kojo_Musa_Resume.pdf?rlkey=pl1h9h69qscbyqxotwfl1bo8w&dl=0" className="btn btn-primary" target="_blank" rel="noreferrer">Get My Resume</a>
      </div>
    </div>
    <div className="about--section--img">
      <h2 className="skills-heading">My Skills</h2>
      <p className="tech-skill-title">Languages:</p>
      <div className="skills-container">
        {data?.language?.map((item) => (
          <div key={item.id} className="tech-skill">
            <img src={item.src} alt="skills" />
          </div>
        ))}
      </div>
      <p className="tech-skill-title">Framework:</p>
      <div className="skills-container">
        {data?.framework?.map((item) => (
          <div key={item.id} className="tech-skill">
            <img src={item.src} alt="skills" />
          </div>
        ))}
      </div>
      <p className="tech-skill-title">Other Skills:</p>
      <div className="skills-container">
        {data?.otherskills?.map((item) => (
          <div key={item.id} className="tech-skill">
            <img src={item.src} alt="skills" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutMe;
