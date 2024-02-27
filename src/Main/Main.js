import React from 'react';
import { Element } from 'react-scroll';
import ProjectCard from '../ProjectCard';
import './Main.css';
import sideImage from './pic.jpg';

function Main() {
  const projects = [
    { title: "Project 1", description: "This is Project 1" },
    { title: "Project 2", description: "This is Project 2" },
    { title: "Project 3", description: "This is Project 3" },
    { title: "Project 4", description: "This is Project 4" }
  ];

  return (
    <main>
    <Element name="landing" className="element intro">
      <img src={sideImage} alt="Side" className="side-image" />
      <div className="content">
        <h2><span className="name">Amin</span> <span className="surname">Mirabdolvahabi</span></h2>
        <p>A tech and engineering lover interested in applied math, physics, and programming.</p>
      </div>
    </Element>
    <Element name="about" className="element about">
        <h2>About</h2>
        
        <div className="section">
            <div className="text-section">
                <h3>Interest</h3>
                <p>A tech and engineering lover interested in applied math, physics, and programming.</p>
            </div>
            <div className="image-section">
                <img src="interest.jpg" alt="Interest" />
            </div>
        </div>

        <div className="section reverse">
            <div className="text-section">
                <h3>Programming Skills</h3>
                <p>Experience: C#(Both WinForms and Console App), HTML CSS, JavaScript(express, mongoose, node),Database(MongoDB, Microsoft Access)</p>
            </div>
            <div className="image-section">
                <img src="programming.jpg" alt="Programming" />
            </div>
        </div>

        <div className="section">
            <div className="text-section">
                <h3>3D Modeling Experience</h3>
                <p>Have experience with solid works and AutoCAD. Worked as an intern at Saderat Bank of Iran.</p>
            </div>
            <div className="image-section">
                <img src="3dmodeling.jpg" alt="3D Modeling" />
            </div>
        </div>

        <div className="section reverse">
            <div className="text-section">
                <h3>Languages</h3>
                <p>Bilingual: Persian, English (also familiar with French(3 years) and Arabic(5 years))</p>
            </div>
            <div className="image-section">
                <img src="languages.jpg" alt="Languages" />
            </div>
        </div>
        
        <h3>Other achievements</h3>
        <p>Winner of the International Student Academic scholarship from Waterloo Catholic District School Board. 
        Member of St. Davids, high school's ambassador and the receiver of the honours degree of the international certificate program of WCDSB.
        A player in D8 Volleyball League and Wrestling League. With over two years of experience in global citizenship and international activities in WCDSB.</p>
    </Element>

    <Element name="projects" className="element projs">
        <h2>Projects</h2>
        <div className="grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} title={project.title} description={project.description} />
          ))}
        </div>
      </Element>

      <Element name="contact" className="element contact">
        <h2>Contact Me</h2>
        <form>
          <input type="text" name="name" placeholder="Your name" />
          <input type="email" name="email" placeholder="Your email" />
          <textarea name="message" placeholder="Your message"></textarea>
          <button type="submit">Send</button>
        </form>
      </Element>
    </main>
  );
}

export default Main;
