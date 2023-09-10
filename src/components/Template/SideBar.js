import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

// const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src="https://s3.us-east-1.amazonaws.com/kairos-uci-1/IMG_0215.jpeg" alt="" />
      </Link>
      <header>
        <h2>Suyash Ghuge</h2>
        <p><a href="mailto:ghuges@uci.edu">ghuges@uci.edu</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Suyash. I am a <a href="https://www.ics.uci.edu/">UCI Computer Science</a> grad student,
        <a href="https://www.nitk.ac.in/"> NITK Surathkal</a> alumni,
        and Senior Software Engineer at <a href="https://www.ngr.ai/">Next Generation Robotics</a>. Previously,
        I worked as a Software Engineer at AWS (<a href="https://aws.amazon.com/rds/aurora/">Aurora DB</a>),
        and <a href="https://www.postman.com/">Postman</a>.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Suyash Ghuge <Link to="/">suyashghuge.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
