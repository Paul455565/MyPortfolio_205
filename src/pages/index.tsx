import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { FaHome, FaUser, FaCode, FaProjectDiagram, FaGraduationCap, FaEnvelope, FaFileAlt, FaLinkedin, FaGithub, FaPhone, FaMapMarkerAlt, FaRobot } from "react-icons/fa";
import emailjs from "emailjs-com";

const App = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [chatbotOpen, setChatbotOpen] = useState(false);

  // Contact form state
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [sendingStatus, setSendingStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleNavClick = (section: string) => {
    setActiveSection(section);
  };

  const toggleChatbot = () => {
    setChatbotOpen(!chatbotOpen);
  };

  const technicalSkills = [
    "HTML", "CSS", "JavaScript", "Java", "Firebase", "Vue .js",
    "Git & GitHub", "React .js", "Responsive Web Design", "REST APIs",
    "Node.js", "SQL & SQLite", "MySQL"
  ];

  const softSkills = [
    "Problem-Solving", "Teamwork", "Communication", "Adaptability",
    "Time Management", "Attention to Detail", "Creativity",
    "Continuous Learning", "Critical Thinking"
  ];

  const projects = [
    {
      title: "Travique Travel Assistant",
      description: "A smart travel planning platform built with Supabase and React, helping users plan and organize their trips efficiently.",
      technologies: ["React js", "Firebase", "JavaScript", "CSS"],
      demoLink: "https://aidan2125.github.io/Backend-testing/"
    },
    {
      title: "Digital Resource Hub",
      description: "A web application designed to provide users with access to a wide range of digital resources, built with React and Firebase. They have to ma e a request to access the resources and the admin can approve or deny the request.",
      technologies: ["React js", "CSS", "JavaScript", "Firebase"],
      demoLink: "https://paul455565.github.io/TheFiveGuys/"
    }
    ,
    {
      title: "Xolisa Portfolio(in progress)",
      description: "A personal website for a muisic artist, showcasing their music, biography, and contact information. He will do promotes ",
      technologies: ["React", "Firebase", "CSS", "JavaScript"],
      demoLink: "https://xolisa-website.vercel.app/"
    },
  ];

  // EmailJS configuration - replace these with your actual EmailJS service details
  const EMAILJS_SERVICE_ID = "service_a39yx6k";
  const EMAILJS_TEMPLATE_ID = "template_0fqfq69";
  const EMAILJS_USER_ID = "8fL_-a01ZKFqmg1xK";

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSendingStatus("sending");

    const templateParams = {
      from_name: contactName,
      from_email: contactEmail,
      message: contactMessage,
      to_email: "paulmaja14@gmail.com"
    };

    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_USER_ID)
      .then((response) => {
        setSendingStatus("success");
        setContactName("");
        setContactEmail("");
        setContactMessage("");
      }, (error) => {
        setSendingStatus("error");
        console.error("EmailJS error:", error);
      });
  };

  return (
    <>
      <nav className="navbar">
        <ul>
          <li className={activeSection === "home" ? "active" : ""} onClick={() => handleNavClick("home")}>
            <FaHome /> Home
          </li>
          <li className={activeSection === "about" ? "active" : ""} onClick={() => handleNavClick("about")}>
            <FaUser /> About Me
          </li>
          <li className={activeSection === "skills" ? "active" : ""} onClick={() => handleNavClick("skills")}>
            <FaCode /> Skills
          </li>
          <li className={activeSection === "resume" ? "active" : ""} onClick={() => handleNavClick("resume")}>
            <FaFileAlt /> Resume
          </li>
          <li className={activeSection === "projects" ? "active" : ""} onClick={() => handleNavClick("projects")}>
            <FaProjectDiagram /> Projects
          </li>
          <li className={activeSection === "education" ? "active" : ""} onClick={() => handleNavClick("education")}>
            <FaGraduationCap /> Education & Experience
          </li>
          <li className={activeSection === "contact" ? "active" : ""} onClick={() => handleNavClick("contact")}>
            <FaEnvelope /> Contact
          </li>
        </ul>
      </nav>

      {activeSection === "home" && (
        <section id="home" className="full-screen home">
          <p className="greeting">Hello, Welcome I'm</p>
          <h1 className="name-highlight">Paulose Maja</h1>
          <p className="subtitle">Fullstack Software Developer</p>
          <p className="description">A passionate FullStack Development based in South Africa</p>
          <div className="home-buttons">
            <button className="btn-primary" onClick={() => handleNavClick("projects")}>View My Work</button>
            <button className="btn-secondary" onClick={() => handleNavClick("contact")}>Get In Touch</button>
          </div>
        </section>
      )}

      {activeSection === "about" && (
        <section id="about" className="section about">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle"><i>Who is Paulose Maja?</i></p>
          <div className="about-container">
            <div className="about-img">
              <img src="/home_pic.jpeg" alt="Paulose Maja" />
            </div>
            <div className="about-text">
              <h3>Personal Introduction</h3>
              <p>
                I am a passionate Fullstack Software Developer dedicated to crafting scalable,
                maintainable, and efficient web applications.
              </p>
              <p>
                My goal is to continually grow as a developer, contribute to impactful projects,
                and collaborate in team environments that push boundaries and embrace innovation.
              </p>
              <p>
                I thrive on solving real-world problems with clean code, intuitive user experiences,
                and a commitment to lifelong learning in the tech industry.
              </p>

              <h3>Vision Statement</h3>
              <p>
                To become a leading software developer who builds inclusive, accessible, and meaningful
                digital solutions that positively impact communities and inspire innovation across Africa
                and the globe.
              </p>
            </div>
          </div>
        </section>
      )}

      {activeSection === "skills" && (
        <section id="skills" className="section skills">
          <h2 className="section-title">Skills</h2>
          <p className="section-subtitle">My technical and soft skills</p>
          <div className="skills-container">
            <div className="skills-column">
              <h3>Technical Skills</h3>
              <div className="skill-tags">
                {technicalSkills.map((skill) => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skills-column">
              <h3>Soft Skills</h3>
              <div className="skill-tags">
                {softSkills.map((skill) => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {activeSection === "resume" && (
        <section id="resume" className="section resume">
          <h2 className="section-title">Resume</h2>
          <p className="section-subtitle">
            Thank you for taking the time to explore my portfolio. My resume offers a deeper look into my background,<br />
            including the skills I've gained, and the journey that has shaped me into a<br />
            dedicated Fullstack Software Developer.<br />
            <br />
            I invite you to download it and learn more about how I can contribute to your team or project.<br />
            <br />
            Download my resume to explore my journey, skills, and experiences in greater detail.<br />
            Feel free to reach out if you have any questions or potential opportunities.
          </p>
          <a href="/Paulose Maja.pdf" download className="btn-primary">Download Resume</a>
        </section>
      )}

      {activeSection === "projects" && (
        <section id="projects" className="section projects">
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">Showcasing my technical skills and creativity</p>
          <div className="project-grid">
            {projects.map(({ title, description, technologies, demoLink }) => (
              <div key={title} className="project-card">
                <h3>{title}</h3>
                <p>{description}</p>
                <p><strong>Technologies Used:</strong></p>
                <div className="skill-tags">
                  {technologies.map((tech) => (
                    <span key={tech} className="skill-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={demoLink} target="_blank" rel="noopener noreferrer">Demo</a>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {activeSection === "education" && (
        <section id="education" className="section edu-exp full-screen-edu">
          <h5 className="section-title">Education & Experience</h5>
          <p className="section-subtitle">My academic journey and professional experience</p>
          <div className="edu-exp">
            <div className="column">
              <h3>Education</h3>
              <ul>
                <li><strong>Advanced Diploma in ICT</strong><br /><em>Cape Peninsula University of Technology</em><br />Currently Studying</li>
                <li><strong>Diploma in ICT</strong><br /><em>Cape Peninsula University of Technology</em><br />Completed 2024</li>
                <li><strong>Higher Certificate in ICT</strong><br /><em>Cape Peninsula University of Technology</em><br />Completed 2020</li>
                 <li><strong>Matric</strong><br /><em>Siphamandla Senior Secondary School</em><br />Completed 2019</li>
              </ul>
            </div>
            <div className="column">
              <h3>Experience</h3>
              <ul>
                <li><strong>Software Development Intern</strong><br />CAPACITI<br />2025 - Present<br />Working on real-world software development projects, collaborating with experienced developers, and enhancing technical skills in a professional environment.</li>
                <li><strong>FullStack Developer</strong><br />School Projects<br />2023 - Present<br />Developed custom websites and web applications for my schools projects.</li>
              </ul>
            </div>
          </div>
        </section>
      )}

      {activeSection === "contact" && (
        <section id="contact" className="section contact">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">Let's connect and discuss opportunities</p>
          <div className="section contact-content">
            <div className="contact-left">
              <h3>Contact Details</h3>
              <div className="contact-detail">
                <div className="icon-container"><FaEnvelope size={18} color="#00796b" /></div>
                <strong className="contact-label">Email</strong>
                <span className="contact-value"> paulmaja14@gmail.com</span>
              </div>
              <div className="contact-detail">
                <div className="icon-container"><FaPhone size={18} color="#00796b" /></div>
                <strong className="contact-label">Phone</strong>
                <span className="contact-value"> +27 76 298 3736</span>
              </div>
              <div className="contact-detail">
                <div className="icon-container"><FaMapMarkerAlt size={18} color="#00796b" /></div>
                <strong className="contact-label">Location</strong>
                <span className="contact-value"> Cape Town, South Africa</span>
              </div>
              <div className="social-icons">
                <a href="https://www.linkedin.com/in/paulose-maja-53b8631a2/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="icon-container">
                  <FaLinkedin />
                </a>
                <a href="https://github.com/Paul455565" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="icon-container">
                  <FaGithub />
                </a>
              </div>
            </div>
            <div className="contact-right">
              <h3>Contact Me</h3>
              <form onSubmit={sendEmail}>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                  required
                />
                <textarea
                  placeholder="Your Message"
                  rows={5}
                  value={contactMessage}
                  onChange={(e) => setContactMessage(e.target.value)}
                  required
                ></textarea>
                <button type="submit" className="btn-primary" disabled={sendingStatus === "sending"}>
                  {sendingStatus === "sending" ? "Sending..." : "Send Message"}
                </button>
              </form>
              {sendingStatus === "success" && <p className="success-message">Message sent successfully!</p>}
              {sendingStatus === "error" && <p className="error-message">Failed to send message. Please try again later.</p>}
              <div className="contact-cta">
                <h4>Ready to collaborate?</h4>
                <p>I'm always open to discussing new opportunities and interesting projects. Feel free to reach out!</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Chatbot Icon */}
      <div className="chatbot-icon" onClick={toggleChatbot} title="Chat with me">
        <FaRobot size={30} />
      </div>

      {/* Chatbot Q&A Section */}
      {chatbotOpen && (
        <section className="chatbot-section">
          <h2>About You Q&A</h2>
          <div className="chatbot-qa">
            <p><strong>Who is Paulose Maja?</strong></p>
            <p>Paulose Maja is a passionate Fullstack Software Developer dedicated to crafting scalable, maintainable, and efficient web applications.</p>

            <p><strong>What’s your current role?</strong></p>
            <p>Software Development Intern at CAPACITI, working on real-world software development projects and enhancing technical skills.</p>

            <p><strong>Where did you study?</strong></p>
            <p>Currently studying Advanced Diploma in ICT with an Application Development Focus, with previous diplomas and certificates in ICT.</p>

            <p><strong>What’s your skill set?</strong></p>
            <p>Technical skills include HTML, CSS, JavaScript, Java, Firebase, Vue.js, Git & GitHub, React.js, Responsive Web Design, REST APIs, Node.js, SQL & SQLite, MySQL. Soft skills include Problem-Solving, Teamwork, Communication, Adaptability, Time Management, Attention to Detail, Creativity, Continuous Learning, and Critical Thinking.</p>
          </div>
          <button className="btn-close" onClick={toggleChatbot}>Close</button>
        </section>
      )}

{activeSection === "contact" && (
  <footer className="footer">
    <p>© 2025 Paulose Maja. All rights reserved.</p>
  </footer>
)}
    </>
  );
};


ReactDOM.createRoot(document.getElementById("root")!).render(<App />);

export default App;
