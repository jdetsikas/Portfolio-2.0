import { useEffect, useRef } from 'react';
import './body.scss';

import { images } from './images/index.ts';
import { Projects } from './projects.ts';

function openInNewTab(url) {
  window.open(url, '_blank', 'noopener,noreferrer');
}

const skillGroups = [
  {
    label: 'Languages & Frameworks',
    chips: ['HTML5', 'CSS / SCSS', 'JavaScript', 'TypeScript', 'React', 'Angular'],
  },
  {
    label: 'Backend & Cloud',
    chips: ['NodeJS', 'GraphQL', 'AWS', 'Stripe'],
  },
  {
    label: 'Tooling & Craft',
    chips: ['WordPress', 'D3', 'Responsive Design', 'Web Accessibility', 'Performance'],
  },
];

function Body() {
  const revealRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const addReveal = (delay = '') => ({
    ref: (el) => { if (el) revealRefs.current.push(el); },
    className: `reveal${delay ? ' ' + delay : ''}`,
  });

  return (
    <>
      <div id="top" />
      <div id="background" />
      <div id="body-content" className="col">

        {/* ── Hero ── */}
        <div id="title" className="row">
          <div className="hero-text col">
            <p className="hero-eyebrow">Front-End Developer</p>
            <h1>
              Precision-built<br />
              <em>for the web.</em>
            </h1>
            <p className="hero-desc">
              I specialise in building fast, accessible, and maintainable web applications — translating design intent into polished, production-ready interfaces.
            </p>
            <div className="hero-meta">
              <div className="meta-item">
                <span className="meta-num">5+</span>
                <span className="meta-label">Years exp.</span>
              </div>
              <div className="meta-item">
                <span className="meta-num">3</span>
                <span className="meta-label">Projects</span>
              </div>
            </div>
            <a
              className="hero-cta"
              href="#portfolio"
              onClick={(e) => { e.preventDefault(); document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' }); }}
            >
              View my work <span className="arrow">→</span>
            </a>
          </div>
          <img className="hero-illustration" src={images.Figure_1} alt="" />
        </div>

        {/* ── About ── */}
        <div id="about">
          <div className="col">
            <p className="section-label">About me</p>
            <h2 {...addReveal()}>Thoughtful code.<br />Measurable results.</h2>
            <p className="about-body" {...addReveal('d1')}>
              I'm a front-end developer with over five years of experience delivering responsive, accessible web applications across a range of industries. I hold a strong command of HTML, CSS, and JavaScript, and bring that same rigour to TypeScript, React, and Angular.
            </p>
            <p className="about-body" {...addReveal('d2')}><br/>
              I take pride in writing clean, maintainable code and in staying current with evolving standards — whether that means integrating a GraphQL API, optimising a build pipeline, or crafting an accessible data visualisation with D3.
            </p>
          </div>
          <div className="skills-grid" {...addReveal('d1')}>
            {skillGroups.map((group, i) => (
              <div className="skill-group" key={i}>
                <p className="skill-group-label">{group.label}</p>
                <div className="skill-chips">
                  {group.chips.map((chip, j) => (
                    <span className="chip" key={j}>{chip}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Portfolio ── */}
        <div id="portfolio" className="col">
          <div className="portfolio-header" {...addReveal()}>
            <div>
              <p className="section-label">Selected work</p>
              <h2>Projects</h2>
            </div>
          </div>

          <div id="portfolio-list" className="col" {...addReveal('d1')}>
            {Projects.map((proj, index) => (
              <div
                className="item col"
                key={index}
                onClick={() => openInNewTab(proj.url)}
              >
                <div className="proj-header">
                  <div className="proj-title-wrap">
                    <span className="proj-num">0{index + 1}</span>
                    <h3 className="proj-title">{proj.title}</h3>
                  </div>
                  <span className="proj-arrow">↗</span>
                </div>
                <div className="proj-body">
                  <img src={proj.img} alt={proj.title} />
                  <div className="proj-text col">
                    <p className="proj-desc">{proj.description}</p>
                    <div className="proj-stack row">
                      {proj.stack.map((tech, idx) => (
                        <span className="chip" key={idx}>{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Contact ── */}
        <div id="contact">
          <div className="col">
            <p className="section-label">Let's talk</p>
            <h2 {...addReveal()}>Let's build<br /><em>something great.</em></h2>
            <p className="contact-sub" {...addReveal('d1')}>
              I'm currently open to new opportunities — whether that's a full-time role, a contract engagement, or a collaborative project. I'd welcome the chance to connect.
            </p>
          </div>

          <div id="socials" {...addReveal('d2')}>
            <a className="item" href="mailto:john.o.detsikas@gmail.com">
              <div className="item-icon"><img src={images.Gmail} alt="Gmail" /></div>
              <div className="item-content">
                <span className="item-platform">Email</span>
                <span className="item-label">john.o.detsikas@gmail.com</span>
              </div>
              <span className="item-arrow">↗</span>
            </a>
            <a className="item" href="https://www.linkedin.com/in/john-detsikas/" target="_blank" rel="noreferrer">
              <div className="item-icon"><img src={images.LI} alt="LinkedIn" /></div>
              <div className="item-content">
                <span className="item-platform">LinkedIn</span>
                <span className="item-label">John Detsikas</span>
              </div>
              <span className="item-arrow">↗</span>
            </a>
            <a className="item" href="https://github.com/jdetsikas" target="_blank" rel="noreferrer">
              <div className="item-icon"><img src={images.Git} alt="GitHub" /></div>
              <div className="item-content">
                <span className="item-platform">GitHub</span>
                <span className="item-label">jdetsikas</span>
              </div>
              <span className="item-arrow">↗</span>
            </a>
          </div>
        </div>

      </div>
    </>
  );
}

export default Body;
