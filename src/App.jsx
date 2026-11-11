
import { useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  ArrowUpRight,
  Code,
  GraduationCap,
  MapPin
} from "lucide-react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const skills = [
    "Java",
    "JavaScript",
    "React.js",
    "HTML",
    "CSS",
    "SQL",
    "Python",
    "Web Development",
    "Problem Solving"
  ];

  const projects = [
    {
      title: "Student Education Fellowship Platform",
      description:
        "A platform connecting students and alumni through an educational fellowship support system.",
      tech: "React.js | Web Development | Database",
      status: "Currently Working"
    },
    {
      title: "Travel Agency Website",
      description:
        "A responsive travel agency website developed using HTML and CSS.",
      tech: "HTML | CSS",
      status: "Completed"
    },
    {
      title: "Student Hostel Management System",
      description:
        "A system designed to manage hostel operations and student records.",
      tech: "Java | Database",
      status: "Completed"
    },
    {
      title: "Health Management System",
      description:
        "A Java-based application demonstrating file handling concepts.",
      tech: "Java | File Handling",
      status: "Completed"
    },
    {
      title: "Process Scheduling System",
      description:
        "A priority-based process scheduling system using linked lists.",
      tech: "Java | Data Structures",
      status: "Completed"
    }
  ];

  return (
    <div className="website">

      {/* NAVBAR */}
      <nav className="navbar">
        <a href="#home" className="logo">WA<span>.</span></a>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#education" onClick={() => setMenuOpen(false)}>Education</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>
      </nav>

      {/* HOME */}
      <section className="hero section" id="home">

        <div className="hero-content">
          <p className="small-heading">WELCOME TO MY PORTFOLIO</p>

          <h1>
            Hi, I'm <span>Wasiq Ali</span>
          </h1>

          <h2>Computer Science Student</h2>

          <p className="description">
            I am a 7th-semester BS Computer Science student
            interested in software development, web technologies,
            and modern programming.
            Currently learning React.js and building practical projects.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              View Projects <ArrowUpRight size={18} />
            </a>

            <a href="#contact" className="secondary-btn">
              Contact Me
            </a>
          </div>

          <div className="location">
            <MapPin size={17} />
            Rawalpindi, Pakistan
          </div>
        </div>

        <div className="hero-image">
          <div className="image-border">
            <img src="/profile.jpg" alt="Wasiq Ali" />
          </div>
          <div className="image-tag">
            <Code size={20} />
            React.js Learner
          </div>
        </div>

      </section>

      {/* ABOUT */}
      <section className="section" id="about">
        <div className="section-title">
          <p>INTRODUCTION</p>
          <h2>About <span>Me</span></h2>
        </div>

        <div className="about-card">
          <p>
            I am a 7th-semester BS Computer Science student at
            Barani Institute of Information Technology, Rawalpindi.
          </p>

          <p>
            I have academic and practical experience in Java,
            HTML, CSS, SQL, and web development. Currently,
            I am learning React.js to improve my frontend
            development skills.
          </p>

          <p>
            I am also working on my Final Year Project,
            <strong> Student Education Fellowship Platform</strong>,
            which focuses on connecting students and alumni
            through an educational fellowship support system.
          </p>

          <p>
            My goal is to improve my technical skills,
            gain practical experience, and grow as a software developer.
          </p>
        </div>
      </section>

      {/* SKILLS */}
      <section className="section" id="skills">
        <div className="section-title">
          <p>MY TECHNICAL KNOWLEDGE</p>
          <h2>Technical <span>Skills</span></h2>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <Code size={22} />
              <h3>{skill}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section" id="projects">
        <div className="section-title">
          <p>MY RECENT WORK</p>
          <h2>My <span>Projects</span></h2>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>

              <div className="project-number">
                PROJECT 0{index + 1}
              </div>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-tech">
                {project.tech}
              </div>

              <span className="project-status">
                {project.status}
              </span>

            </div>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section className="section" id="education">
        <div className="section-title">
          <p>MY ACADEMIC BACKGROUND</p>
          <h2>My <span>Education</span></h2>
        </div>

        <div className="education-card">
          <GraduationCap size={35} />

          <div>
            <h3>BS Computer Science</h3>
            <h4>Barani Institute of Information Technology</h4>
            <p>Rawalpindi, Pakistan</p>
            <span>7th Semester | Currently Studying</span>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section contact-section" id="contact">
        <div className="section-title">
          <p>GET IN TOUCH</p>
          <h2>Contact <span>Me</span></h2>
        </div>

        <p>
          I am interested in internships, learning opportunities,
          and connecting with other developers.
        </p>

        <div className="contact-links">

          <a href="mailto:wasiqa298@gmail.com">
            <Mail /> Email Me
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin /> LinkedIn
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
          >
            <Github /> GitHub
          </a>

        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <h3>WA<span>.</span></h3>
        <p>© 2026 Wasiq Ali. All Rights Reserved.</p>
      </footer>

    </div>
  );
}

export default App;
