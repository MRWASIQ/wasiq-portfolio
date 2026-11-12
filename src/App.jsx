    import { useState } from "react";
import {
  Mail,
  Menu,
  X,
  ArrowUpRight,
  Code2,
  GraduationCap,
  MapPin,
  BriefcaseBusiness,
  Sparkles
} from "lucide-react";

import {
  FaGithub as Github,
  FaLinkedin as Linkedin
} from "react-icons/fa";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const skills = [
    "Java",
    "JavaScript",
    "React.js",
    "HTML5",
    "CSS3",
    "SQL",
    "Python",
    "Web Development",
    "Problem Solving"
  ];

  const projects = [
    {
      number: "01",
      title: "Student Education Fellowship Platform",
      description:
        "A platform designed to connect students and alumni through an educational fellowship support system.",
      tech: ["React.js", "Web Development", "Database"],
      status: "Currently Working",
      featured: true
    },
    {
      number: "02",
      title: "Travel Agency Website",
      description:
        "A responsive travel agency website designed to present travel services and destinations.",
      tech: ["HTML", "CSS"],
      status: "Completed"
    },
    {
      number: "03",
      title: "Student Hostel Management System",
      description:
        "A management system developed to organize hostel operations and maintain student records.",
      tech: ["Java", "Database"],
      status: "Completed"
    },
    {
      number: "04",
      title: "Health Management System",
      description:
        "A Java-based academic application demonstrating file handling and basic data management.",
      tech: ["Java", "File Handling"],
      status: "Completed"
    },
    {
      number: "05",
      title: "Process Scheduling System",
      description:
        "A priority-based process scheduling application developed using linked list concepts.",
      tech: ["Java", "Data Structures"],
      status: "Completed"
    }
  ];

  const navigation = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Education",
    "Contact"
  ];

  return (
    <div className="website">

      {/* NAVBAR */}
      <nav className="navbar">
        <a href="#home" className="logo">
          WA<span>.</span>
        </a>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          {navigation.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>

        <a href="#contact" className="nav-contact">
          Let's Talk <ArrowUpRight size={16} />
        </a>
      </nav>

      {/* HOME */}
      <section className="hero section" id="home">

        <div className="hero-content">

          <div className="availability">
            <span className="availability-dot"></span>
            Open to Internship Opportunities
          </div>

          <p className="small-heading">
            WELCOME TO MY PORTFOLIO
          </p>

          <h1>
            Hi, I'm <span>Wasiq Ali.</span>
          </h1>

          <h2>
            Computer Science Student
          </h2>

          <p className="description">
            I am a 7th-semester BS Computer Science student
            passionate about software development, web technologies,
            and building practical digital solutions.
            Currently learning React.js and improving my development skills.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              Explore My Work
              <ArrowUpRight size={18} />
            </a>

            <a href="#contact" className="secondary-btn">
              Contact Me
            </a>
          </div>

          <div className="hero-info">
            <div className="location">
              <MapPin size={17} />
              Rawalpindi, Pakistan
            </div>

            <div className="hero-socials">
              <a
                href="https://github.com/MRWASIQ"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <Github />
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin />
              </a>
            </div>
          </div>

        </div>

        <div className="hero-image">

          <div className="image-glow"></div>

          <div className="image-border">
            <img
              src="/profile.jpg"
              alt="Wasiq Ali"
            />
          </div>

          <div className="image-tag">
            <Code2 size={19} />
            <div>
              <strong>React.js</strong>
              <span>Currently Learning</span>
            </div>
          </div>

          <div className="floating-icon">
            <Sparkles size={22} />
          </div>

        </div>

      </section>

      {/* ABOUT */}
      <section className="section" id="about">

        <div className="section-title">
          <p>GET TO KNOW ME</p>
          <h2>
            About <span>Me</span>
          </h2>
          <div className="title-line"></div>
        </div>

        <div className="about-layout">

          <div className="about-card">
            <div className="about-icon">
              <Code2 size={25} />
            </div>

            <h3>My Introduction</h3>

            <p>
              I am a 7th-semester BS Computer Science student at
              Barani Institute of Information Technology, Rawalpindi.
            </p>

            <p>
              I have academic and practical experience in Java,
              HTML, CSS, SQL, Python, and web development.
              Currently, I am learning React.js to strengthen
              my frontend development skills.
            </p>

            <p>
              I am also developing my Final Year Project,
              <strong> Student Education Fellowship Platform</strong>,
              which focuses on connecting students and alumni
              through an educational fellowship support system.
            </p>

            <p>
              My goal is to gain practical experience, keep learning
              modern technologies, and grow as a professional
              software developer.
            </p>
          </div>

          <div className="about-side">

            <div className="info-card">
              <GraduationCap size={25} />
              <div>
                <span>Education</span>
                <h3>BS Computer Science</h3>
              </div>
            </div>

            <div className="info-card">
              <BriefcaseBusiness size={25} />
              <div>
                <span>Career Interest</span>
                <h3>Software Development</h3>
              </div>
            </div>

            <div className="info-card">
              <Code2 size={25} />
              <div>
                <span>Currently Learning</span>
                <h3>React.js Development</h3>
              </div>
            </div>

          </div>

        </div>

      </section>

      {/* SKILLS */}
      <section className="section" id="skills">

        <div className="section-title">
          <p>WHAT I WORK WITH</p>
          <h2>
            Technical <span>Skills</span>
          </h2>
          <div className="title-line"></div>
        </div>

        <p className="section-description">
          Technologies and skills I have explored through
          coursework, practice, and academic projects.
        </p>

        <div className="skills-grid">

          {skills.map((skill, index) => (
            <div className="skill-card" key={skill}>

              <div className="skill-icon">
                <Code2 size={23} />
              </div>

              <h3>{skill}</h3>

              <span>0{index + 1}</span>

            </div>
          ))}

        </div>

      </section>

      {/* PROJECTS */}
      <section className="section" id="projects">

        <div className="section-title">
          <p>MY RECENT WORK</p>
          <h2>
            Featured <span>Projects</span>
          </h2>
          <div className="title-line"></div>
        </div>

        <p className="section-description">
          A selection of academic and practical projects
          I have worked on during my learning journey.
        </p>

        <div className="projects-grid">

          {projects.map((project) => (
            <div
              className={`project-card ${project.featured ? "featured-project" : ""}`}
              key={project.number}
            >

              <div className="project-top">
                <span className="project-number">
                  PROJECT {project.number}
                </span>

                <ArrowUpRight size={21} />
              </div>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-tech">
                {project.tech.map((technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                ))}
              </div>

              <div className="project-bottom">
                <span className="project-status">
                  <span className="status-dot"></span>
                  {project.status}
                </span>
              </div>

            </div>
          ))}

        </div>

      </section>

      {/* EDUCATION */}
      <section className="section" id="education">

        <div className="section-title">
          <p>MY ACADEMIC JOURNEY</p>
          <h2>
            My <span>Education</span>
          </h2>
          <div className="title-line"></div>
        </div>

        <div className="education-card">

          <div className="education-icon">
            <GraduationCap size={35} />
          </div>

          <div className="education-content">
            <span className="education-label">
              CURRENTLY STUDYING
            </span>

            <h3>BS Computer Science</h3>

            <h4>
              Barani Institute of Information Technology
            </h4>

            <p>Rawalpindi, Pakistan</p>

            <div className="education-footer">
              <span>7th Semester</span>
              <span>Undergraduate Degree</span>
            </div>
          </div>

        </div>

      </section>

      {/* CONTACT */}
      <section className="section contact-section" id="contact">

        <div className="contact-box">

          <div className="section-title">
            <p>LET'S CONNECT</p>
            <h2>
              Get In <span>Touch</span>
            </h2>
            <div className="title-line"></div>
          </div>

          <p>
            I am interested in internship opportunities,
            learning experiences, and connecting with
            developers and technology professionals.
          </p>

          <a
            href="mailto:wasiqa298@gmail.com"
            className="contact-email"
          >
            <Mail size={20} />
            wasiqa298@gmail.com
            <ArrowUpRight size={18} />
          </a>

          <div className="contact-links">

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>

            <a
              href="https://github.com/MRWASIQ"
              target="_blank"
              rel="noreferrer"
            >
              <Github size={20} />
              GitHub
            </a>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="footer">

        <a href="#home" className="footer-logo">
          WA<span>.</span>
        </a>

        <p>
          © 2026 Wasiq Ali. All Rights Reserved.
        </p>

        <a href="#home" className="back-top">
          Back to Top <ArrowUpRight size={16} />
        </a>

      </footer>

    </div>
  );
}
export default App;