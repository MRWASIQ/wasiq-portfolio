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
  Database,
  Globe,
  ExternalLink,
  Sparkles,
  Award,
  Monitor
} from "lucide-react";

import {
  FaGithub as Github,
  FaLinkedin as Linkedin
} from "react-icons/fa";

import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigation = [
    "Home",
    "About",
    "Skills",
    "Experience",
    "Projects",
    "Education",
    "Contact"
  ];

  const skills = [
    "Java",
    "JavaScript",
    "React.js",
    "HTML5",
    "CSS3",
    "SQL",
    "Python",
    "Database Development",
    "Web Development"
  ];

  const projects = [
    {
      number: "01",
      title: "Student Education Fellowship Platform",
      description:
        "A platform connecting students and alumni through an educational fellowship support system. Currently developing this project as my Final Year Project.",
      tech: ["React.js", "Web Development", "Database"],
      status: "In Progress",
      featured: true
    },
    {
      number: "02",
      title: "Travel Agency Website",
      description:
        "A responsive travel agency website designed to showcase travel services, destinations and essential information.",
      tech: ["HTML5", "CSS3"],
      status: "Completed"
    },
    {
      number: "03",
      title: "Student Hostel Management System",
      description:
        "An academic management system designed to organize hostel operations and maintain student records.",
      tech: ["Java", "Database"],
      status: "Completed"
    },
    {
      number: "04",
      title: "Health Management System",
      description:
        "A Java-based academic application demonstrating file handling and basic information management.",
      tech: ["Java", "File Handling"],
      status: "Completed"
    },
    {
      number: "05",
      title: "Process Scheduling System",
      description:
        "A process scheduling application developed to demonstrate priority-based scheduling and data structures.",
      tech: ["Java", "Data Structures"],
      status: "Completed"
    }
  ];

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="website">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-container">

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
                onClick={closeMenu}
              >
                {item}
              </a>
            ))}
          </div>

          <a href="#contact" className="nav-contact">
            Let's Talk <ArrowUpRight size={16} />
          </a>

        </div>
      </nav>

      {/* HOME */}
      <section className="hero section" id="home">

        <div className="hero-container">

          <div className="hero-content">

            <div className="availability">
              <span className="availability-dot"></span>
              Open to Internship Opportunities
            </div>

            <p className="small-heading">
              HELLO, I'M
            </p>

            <h1>
              Wasiq <span>Ali.</span>
            </h1>

            <h2>
              Computer Science Student
            </h2>

            <p className="hero-focus">
              Web Development <span>|</span> Database Development
            </p>

            <p className="description">
              I am a 7th-semester BS Computer Science student
              interested in building responsive web applications
              and working with databases. I enjoy learning new
              technologies and developing practical digital solutions.
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
                src="/profile.jpeg"
                alt="Wasiq Ali"
              />
            </div>

            <div className="image-tag">
              <Code2 size={21} />
              <div>
                <strong>Web Developer</strong>
                <span>Learning & Building</span>
              </div>
            </div>

            <div className="floating-icon">
              <Sparkles size={22} />
            </div>

          </div>

        </div>

        <div className="hero-bottom">
          <span>01</span>
          <div></div>
          <span>SCROLL TO EXPLORE</span>
        </div>

      </section>

      {/* ABOUT */}
      <section className="section about-section" id="about">

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
              <Code2 size={27} />
            </div>

            <h3>My Introduction</h3>

            <p>
              I am a 7th-semester BS Computer Science student at
              Barani Institute of Information Technology, Rawalpindi.
            </p>

            <p>
              My main interests are Web Development and Database
              Development. I have worked with Java, JavaScript,
              React.js, HTML, CSS, SQL and Python through academic
              coursework and practical projects.
            </p>

            <p>
              Currently, I am developing my Final Year Project,
              <strong> Student Education Fellowship Platform</strong>,
              which aims to connect students and alumni through
              an educational fellowship support system.
            </p>

            <p>
              I enjoy improving my technical skills, solving
              programming problems and building useful applications.
            </p>

          </div>

          <div className="about-side">

            <div className="info-card">
              <GraduationCap size={27} />
              <div>
                <span>Education</span>
                <h3>BS Computer Science</h3>
              </div>
            </div>

            <div className="info-card">
              <Globe size={27} />
              <div>
                <span>Career Interest</span>
                <h3>Web Development</h3>
              </div>
            </div>

            <div className="info-card">
              <Database size={27} />
              <div>
                <span>Career Interest</span>
                <h3>Database Development</h3>
              </div>
            </div>

            <div className="info-card">
              <Code2 size={27} />
              <div>
                <span>Currently Learning</span>
                <h3>React.js Development</h3>
              </div>
            </div>

          </div>

        </div>

      </section>

      {/* SKILLS */}
      <section className="section skills-section" id="skills">

        <div className="section-title">
          <p>MY TECHNICAL EXPERTISE</p>
          <h2>
            Technical <span>Skills</span>
          </h2>
          <div className="title-line"></div>
        </div>

        <p className="section-description">
          Technologies and skills I have explored through
          coursework, practical experience and academic projects.
        </p>

        <div className="skills-grid">

          {skills.map((skill, index) => (
            <div className="skill-card" key={skill}>

              <div className="skill-icon">
                {index === 5 || index === 7 ? (
                  <Database size={24} />
                ) : index === 2 || index === 3 || index === 4 ? (
                  <Globe size={24} />
                ) : (
                  <Code2 size={24} />
                )}
              </div>

              <h3>{skill}</h3>

              <span>
                {String(index + 1).padStart(2, "0")}
              </span>

            </div>
          ))}

        </div>

      </section>

      {/* EXPERIENCE */}
      <section className="section experience-section" id="experience">

        <div className="section-title">
          <p>MY PROFESSIONAL JOURNEY</p>
          <h2>
            Experience <span>& Training</span>
          </h2>
          <div className="title-line"></div>
        </div>

        <div className="experience-card">

          <div className="experience-icon">
            <BriefcaseBusiness size={28} />
          </div>

          <div className="experience-content">

            <div className="experience-heading">
              <div>
                <span className="experience-label">
                  INTERNSHIP
                </span>
                <h3>Full Stack Web Development Intern</h3>
                <h4>Datheon</h4>
              </div>

              <span className="experience-status">
                Completed
              </span>
            </div>

            <p>
              Completed a four-week remote internship focused on
              practical web development. Worked on projects involving
              portfolio development, task management, weather
              dashboards and e-commerce functionality.
            </p>

            <div className="experience-tags">
              <span>Web Development</span>
              <span>Frontend Development</span>
              <span>Practical Projects</span>
            </div>

            <div className="certificate-note">
              <Award size={18} />
              Internship Certificate Completed
            </div>

          </div>

        </div>

      </section>

      {/* PROJECTS */}
      <section className="section projects-section" id="projects">

        <div className="section-title">
          <p>MY SELECTED WORK</p>
          <h2>
            Featured <span>Projects</span>
          </h2>
          <div className="title-line"></div>
        </div>

        <p className="section-description">
          A collection of academic and practical projects
          developed during my learning journey.
        </p>

        <div className="projects-grid">

          {projects.map((project) => (
            <div
              className={`project-card ${
                project.featured ? "featured-project" : ""
              }`}
              key={project.number}
            >

              <div className="project-top">
                <span className="project-number">
                  PROJECT {project.number}
                </span>

                <ExternalLink size={20} />
              </div>

              <div className="project-icon">
                <Monitor size={25} />
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
      <section className="section education-section" id="education">

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

          <p className="contact-description">
            I am interested in internship opportunities,
            practical learning experiences and connecting
            with professionals in web and database development.
            Feel free to get in touch.
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
