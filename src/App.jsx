import React, { useState } from "react";
import {
  ArrowDown, ArrowUpRight, BarChart3, BriefcaseBusiness, Check,
  ChevronRight, Code2, Database, Download, ExternalLink, Github,
  GraduationCap, Linkedin, Mail, Menu, PieChart, Send, Sparkles,
  Terminal, TrendingUp, X
} from "lucide-react";

const skills = [
  { title: "Data analysis", items: ["SQL", "Python", "Statistics", "Exploratory Data Analysis"], icon: BarChart3 },
  { title: "BI & visualization", items: ["Power BI", "DAX", "Excel", "Dashboard Design"], icon: PieChart },
  { title: "Development", items: ["React.js", "JavaScript", "Node.js", "FastAPI", "REST APIs"], icon: Code2 },
  { title: "Databases & tools", items: ["MongoDB", "PostgreSQL", "Git", "GitHub"], icon: Database }
];

const projects = [
  {
    number: "01",
    type: "Full-stack • AI / Career Tech",
    title: "CareerSync AI",
    description: "An AI-powered job application tracker and resume analyzer designed to help candidates organize applications and evaluate resume relevance.",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Python", "FastAPI"],
    live: "https://career-sync-ai-delta.vercel.app/",
    github: "https://github.com/varshakumari03",
    accent: "blue",
    metric: "Resume analysis + application tracking"
  },
  {
    number: "02",
    type: "Data analytics • Telecom",
    title: "Customer Churn & Retention Analytics",
    description: "An end-to-end telecom customer analytics project using a 5,000-record dataset to explore churn patterns, retention drivers and business performance through Python, SQL, Excel and Power BI preparation.",
    stack: ["Python", "SQL", "Excel", "Power BI", "DAX", "Statistics"],
    live: "",
    github: "https://github.com/varshakumari03",
    accent: "violet",
    metric: "5,000 simulated customer records"
  }
];

const navItems = [
  ["About", "#about"], ["Skills", "#skills"], ["Projects", "#projects"],
  ["Education", "#education"], ["Contact", "#contact"]
];

function SectionHeading({ eyebrow, title, description }) {
  return <div className="section-heading">
    <span className="eyebrow">{eyebrow}</span>
    <h2>{title}</h2>
    {description && <p>{description}</p>}
  </div>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("varshakumari72959@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = "mailto:varshakumari72959@gmail.com";
    }
  };

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <header className="topbar">
        <a className="brand" href="#home" aria-label="Varsha home"><span>V</span><b>Varsha Kumari</b><i>.</i></a>
        <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X size={21}/> : <Menu size={21}/>}
        </button>
        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {navItems.map(([label, href]) => <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
          <a className="nav-cta" href="/resume.pdf" download>Resume <Download size={14}/></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="availability"><span className="pulse-dot"/> OPEN TO DATA ANALYST OPPORTUNITIES</div>
            <p className="hero-intro">Hello, I'm</p>
            <h1>Varsha <span>Kumari</span></h1>
            <h2 className="hero-role">Aspiring Data Analyst <span className="role-divider">/</span> CSE Undergraduate</h2>
            <p className="hero-description">I turn raw data into meaningful insights. I enjoy exploring datasets, finding patterns and building clear, useful solutions that support better decisions.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17}/></a>
              <a className="button button-secondary" href="/resume.pdf" download><Download size={16}/> Download resume</a>
            </div>
            <div className="social-row">
              <a href="https://github.com/varshakumari03" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18}/></a>
              <a href="https://www.linkedin.com/in/varshakumari03/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18}/></a>
              <a href="mailto:varshakumari72959@gmail.com" aria-label="Email"><Mail size={18}/></a>
              <span className="social-caption">Let's connect</span>
            </div>
          </div>
          <div className="hero-visual" aria-label="Decorative data analytics illustration">
            <div className="visual-orbit orbit-a"/><div className="visual-orbit orbit-b"/>
            <div className="visual-card main-visual-card">
              <div className="visual-card-top"><span><span className="tiny-dot"/> DATA OVERVIEW</span><span className="live-label">LIVE CONCEPT</span></div>
              <div className="visual-title">Insights in focus</div>
              <div className="chart-summary"><div><small>ANALYZE</small><b>01</b></div><div><small>DISCOVER</small><b>02</b></div><div><small>DELIVER</small><b>03</b></div></div>
              <div className="bar-chart">
                {[34, 52, 43, 68, 55, 83, 63, 94, 72, 88, 60, 100].map((h, i) => <span key={i} style={{height: `${h}%`}} />)}
              </div>
              <div className="chart-foot"><span>DATA → DECISIONS</span><TrendingUp size={15}/></div>
            </div>
            <div className="float-chip chip-sql"><Database size={15}/> SQL</div>
            <div className="float-chip chip-python"><Terminal size={15}/> Python</div>
            <div className="float-chip chip-power"><BarChart3 size={15}/> Power BI</div>
            <div className="visual-spark"><Sparkles size={22}/></div>
          </div>
          <a href="#about" className="scroll-cue"><ArrowDown size={14}/> SCROLL TO EXPLORE</a>
        </section>

        <section className="about-section section-wrap" id="about">
          <SectionHeading eyebrow="A LITTLE ABOUT ME" title="Curious mind. Analytical approach." description="I’m a Computer Science and Engineering student building practical skills in data analytics and software development."/>
          <div className="about-grid">
            <div className="about-copy panel">
              <span className="panel-index">01 / PROFILE</span>
              <h3>Making data easier to understand — and act on.</h3>
              <p>My interests sit at the intersection of data, technology and problem-solving. I work with tools such as SQL and Python to explore information, while developing my ability to communicate findings through reports and dashboards.</p>
              <p>I’m currently pursuing my B.Tech in Computer Science and Engineering at Silicon Institute of Technology, Sambalpur, and preparing for opportunities where I can learn, contribute and grow as a data professional.</p>
              <a className="text-link" href="mailto:varshakumari72959@gmail.com">Connect with me <ChevronRight size={16}/></a>
            </div>
            <div className="about-stats">
              <div className="stat-card"><span className="stat-icon"><GraduationCap size={19}/></span><strong>2027</strong><small>Expected graduation</small></div>
              <div className="stat-card"><span className="stat-icon"><Database size={19}/></span><strong>SQL + Python</strong><small>Analytics foundations</small></div>
              <div className="stat-card stat-wide"><span className="stat-icon"><BriefcaseBusiness size={19}/></span><strong>Internships & entry-level roles</strong><small>Open to learning and contributing</small></div>
            </div>
          </div>
        </section>

        <section className="skills-section section-wrap" id="skills">
          <SectionHeading eyebrow="MY TOOLKIT" title="Skills & technologies" description="A growing toolkit for querying, analyzing, visualizing and presenting data."/>
          <div className="skills-grid">
            {skills.map(({title, items, icon: Icon}, i) => <article className="skill-card" key={title}>
              <div className="skill-card-head"><span className="skill-icon"><Icon size={20}/></span><span className="skill-number">0{i+1}</span></div>
              <h3>{title}</h3>
              <div className="tag-list">{items.map(item => <span className="tag" key={item}>{item}</span>)}</div>
            </article>)}
          </div>
          <p className="skills-note">Skills shown represent my current toolkit and learning focus. Proficiency grows through hands-on projects.</p>
        </section>

        <section className="projects-section section-wrap" id="projects">
          <SectionHeading eyebrow="SELECTED WORK" title="Projects that put data to work" description="A selection of practical projects combining analytical thinking, technology and problem-solving."/>
          <div className="projects-list">
            {projects.map(project => <article className={`project-card ${project.accent}`} key={project.number}>
              <div className="project-art">
                <div className="project-art-top"><span>PROJECT / {project.number}</span><span className="art-square"><ArrowUpRight size={17}/></span></div>
                {project.number === "01" ? <div className="career-art">
                  <div className="career-mini-window"><div className="mini-window-head"><i/><i/><i/></div><div className="mini-dashboard"><div className="mini-side"/><div className="mini-content"><div className="mini-line"/><div className="mini-kpis"><i/><i/><i/></div><div className="mini-bars"><i/><i/><i/><i/><i/></div></div></div></div>
                  <div className="art-floating"><Sparkles size={16}/> AI RESUME INSIGHTS</div>
                </div> : <div className="churn-art">
                  <div className="donut"><div className="donut-inner"><b>5K</b><small>RECORDS</small></div></div>
                  <div className="churn-bars">{[40,72,56,88,65,100,76].map((v,i)=><i key={i} style={{height:`${v}%`}}/>)}</div>
                  <div className="art-floating"><TrendingUp size={15}/> RETENTION ANALYSIS</div>
                </div>}
              </div>
              <div className="project-content">
                <div className="project-meta"><span>{project.type}</span><span>{project.number}</span></div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tag-list project-tags">{project.stack.map(t => <span className="tag" key={t}>{t}</span>)}</div>
                <div className="project-bottom"><span className="project-metric"><Check size={14}/>{project.metric}</span><div className="project-links">
                  {project.live && <a href={project.live} target="_blank" rel="noreferrer" aria-label="Open live project"><ExternalLink size={17}/></a>}
                  <a href={project.github} target="_blank" rel="noreferrer" aria-label="Open GitHub profile"><Github size={17}/></a>
                </div></div>
              </div>
            </article>)}
          </div>
          <p className="project-note">GitHub links currently point to my profile. Individual repository links can be added when the projects are published there.</p>
        </section>

        <section className="education-section section-wrap" id="education">
          <SectionHeading eyebrow="EDUCATION" title="Building a strong foundation"/>
          <div className="education-card panel">
            <div className="education-icon"><GraduationCap size={24}/></div>
            <div className="education-info"><span className="eyebrow">BACHELOR'S DEGREE</span><h3>B.Tech — Computer Science and Engineering</h3><p>Silicon Institute of Technology, Sambalpur</p></div>
            <div className="education-year">2023 — 2027 <small>Expected</small></div>
          </div>
        </section>

        <section className="contact-section section-wrap" id="contact">
          <div className="contact-panel">
            <div className="contact-glow"/>
            <span className="eyebrow">HAVE AN OPPORTUNITY?</span>
            <h2>Let's turn good questions<br/><span>into meaningful insights.</span></h2>
            <p>I’m open to Data Analyst internships, entry-level opportunities and collaborative projects. Feel free to reach out.</p>
            <a className="contact-email" href="mailto:varshakumari72959@gmail.com">varshakumari72959@gmail.com</a>
            <div className="contact-actions">
              <a className="button button-primary" href="mailto:varshakumari72959@gmail.com"><Mail size={16}/> Send me an email <ArrowUpRight size={16}/></a>
              <button className="button button-secondary" onClick={copyEmail}>{copied ? <Check size={16}/> : <Send size={16}/>} {copied ? "Email copied" : "Copy email"}</button>
            </div>
            <div className="contact-socials">
              <a href="https://www.linkedin.com/in/varshakumari03/" target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn <ArrowUpRight size={13}/></a>
              <a href="https://github.com/varshakumari03" target="_blank" rel="noreferrer"><Github size={17}/> GitHub <ArrowUpRight size={13}/></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap"><a className="brand" href="#home"><span>V</span><b>Varsha Kumari</b><i>.</i></a><p>Designed & built with curiosity. © {new Date().getFullYear()} Varsha Kumari.</p><a href="#home" className="back-top">Back to top ↑</a></footer>
    </div>
  );
}

export default App;
