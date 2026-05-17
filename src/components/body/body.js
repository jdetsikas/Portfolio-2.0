
import './body.scss';
import { motion } from 'framer-motion';
import { Projects } from './projects.ts';
import { images } from './images/index.ts';

function openInNewTab(url) {
  window.open(url, '_blank', 'noopener,noreferrer');
}

const skillGroups = [
  {
    label: 'Languages & Frameworks',
    chips: ['React', 'TypeScript', 'Angular', 'JavaScript', 'Python', 'SCSS', 'HTML']
  },
  {
    label: 'Backend & Cloud',
    chips: ['NodeJS', 'GraphQL', 'AWS', 'Stripe', 'WordPress']
  },
  {
    label: 'Design & UX',
    chips: ['Motion UI', 'Accessibility', 'Responsive Design', 'Figma', 'Canva', 'Performance']
  },
];

function Body() {
  return (
    <>
      <div id="top" />

      <div id="body-content" className="col">

        <section id="title">

          <motion.div className="hero-text" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8 }}>

            <div className="hero-eyebrow">
              Available for opportunities
            </div>

            <h1>
              Building
              <em>immersive</em>
              digital experiences.
            </h1>

            <p className="hero-description">
              Front-end developer with over 5 years of experience building premium UI systems,
              polished interaction design, and performant applications in both React and Angular.
            </p>

            <div className="hero-actions">
              <a href="#portfolio" className="primary-btn">
                Explore Projects
              </a>

              <a href="mailto:john.o.detsikas@gmail.com" className="secondary-btn">
                Contact Me
              </a>
            </div>
          </motion.div>

          <motion.div className="hero-visual" animate={{ y: [0, -12, 0] }} transition={{ repeat: Infinity, duration: 5 }} >
            <div className="floating-card card-1">React</div>
            <div className="floating-card card-2">TypeScript</div>
            <div className="floating-card card-3">Motion UI</div>
            <div className="floating-card card-4">Angular</div>
            <div className="floating-card card-5">HTML5</div>
            <div className="floating-card card-6">CSS</div>
            <div className="hero-orb" />
          </motion.div>

        </section>

        <section id="about">
          <div className="section-heading">
            <h2>Selected Expertise</h2>
            <p>Building modern, responsive, user-centered web experiences.</p>
          </div>

          <div className="skills-grid">
            {skillGroups.map((group) => (
              <div className="skill-card" key={group.label}>
                <h3>{group.label}</h3>

                <div className="chips">
                  {group.chips.map((chip) => (
                    <span className="chip" key={chip}>
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="portfolio">
          <div className="section-heading">
            <h2>Featured Projects</h2>
            <p>A selection of interactive products, platforms, and digital experiences.</p>
          </div>

          <div className="project-list">
            {Projects.map((proj, index) => (
              <div key={index} className="project-card" onClick={() => openInNewTab(proj.url)}>

                <div className="project-image-wrap">
                  <img src={proj.img} alt={proj.title} />
                </div>

                <div className="project-content">

                  <div className="project-text">
                    <h3>{proj.title}</h3>
                    <p>{proj.description}</p>
                  </div>

                  <div className="project-tags">
                    <div className="project-stack">
                      {proj.stack.map((tech, i) => (
                        <span className="tech-pill" key={i}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

              </div>
            ))}
          </div>
        </section>

        <section id="contact">

          <div className="section-heading">
            <h2>Let’s Build Something Great</h2>
            <p>Open to freelance work, collaborations, and full-time opportunities.</p>
          </div>

          <div className="contact-card">
            <div>
              <h3>Get in Touch</h3>
            </div>

            <div className="links">

              <a href="mailto:john.o.detsikas@gmail.com" rel="noopener noreferrer">
                <img src={images.Gmail} alt="Gmail" height="40" />
              </a>

              <a href="https://www.linkedin.com/in/john-o-detsikas/" target="_blank" rel="noopener noreferrer">
                <img src={images.LI} alt="LinkedIn" height="40" />
              </a>

              <a href="https://github.com/jdetsikas" target="_blank" rel="noopener noreferrer">
                <img src={images.Git} alt="GitHub" height="40" />
              </a>

            </div>

            <a href="mailto:john.o.detsikas@gmail.com" className="primary-btn">
              Start a Conversation
            </a>
          </div>

        </section>

      </div>
    </>
  );
}

export default Body;
