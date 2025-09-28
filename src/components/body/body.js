import './body.scss';

import {images} from './images/index.ts'
import {Projects} from './projects.ts'

function openInNewTab(url) {
  window.open(url, '_blank', 'noopener,noreferrer');
};

function Body() {
  return (<>
    <div id="top"></div>
    <div id="background"></div>
    <div id="body-content" className="col">

      <div id="title" className="row">

        <div className="text col">
          <h1>Front-End Developer</h1>
          <p>
            I build beautiful and user-friendly websites with a focus on performance and 
            accessibility.
          </p>
        </div>

        <img src={images.Figure_1} alt=""/>

      </div>

      <div id="about" className="row">
        
        <div className="text col">
          <h2>About Me</h2>
          <p>
            I am a front-end developer with 5 years of experience in creating responsive, 
            accessible, and high-performance web applications. I have a strong foundation 
            in HTML, CSS, and JavaScript, and I am always eager to learn new technologies 
            and improve my skills.
          </p>
        </div>

        <img src={images.Calendar} alt=""/>

      </div>

      <div id="portfolio" className="col">
          
        <h2>Projects</h2>

        <section id="portfolio-list" className="col">

          {Projects.map((proj, index) => {
            return(
              <div className="item col" key={index}>

                <a className="proj-title" href={proj.url} target="_blank" rel="noreferrer">{proj.title}</a>
                
                <div className="proj-content row">

                  <img src={proj.img} alt="" onClick={() => openInNewTab(proj.url)}/>

                  <div className="proj-text col">
                    <p className="proj-desc">{proj.description}</p>
                    <div className="proj-stack row">
                      <span className="bold">Stack:</span>
                      {proj.stack.map((tech, idx) => {return (<span className="tech" key={idx}>{tech}{idx < proj.stack.length - 1 ? <span>,</span> : null}</span>)})}
                    </div>
                  </div>

                </div>

              </div>
            )
          })}
        
        </section>

      </div>

      <div id="contact" className="col">
        
        <h2>Contact</h2>

        {/* <form className="col">
          <input className="form-sect" type="text" placeholder="Name" />
          <input className="form-sect" type="email" placeholder="Email" />
          <textarea className="form-sect" placeholder="Message" style={{'min-height': '150px'}}></textarea>
          <button className="form-button" type="submit">Send</button>
        </form> */}


        <div id="socials" className="col">
          
          <div className="item row">
            <img src={images.Gmail} alt=""/>
            <a href="mailto:john.o.detsikas@gmail.com">john.o.detsikas@gmail.com</a>
          </div>
          
          <div className="item row">
            <img src={images.LI} alt=""/>
            <a href="https://www.linkedin.com/in/john-detsikas/" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>

          <div className="item row">
            <img src={images.Git} alt=""/>
            <a href="https://github.com/jdetsikas" target="_blank" rel="noreferrer">Github</a>
          </div>

        </div>

      </div>

    </div>
  </>);
};

export default Body;
