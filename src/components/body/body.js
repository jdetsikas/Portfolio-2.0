import './body.scss';

function Body() {
  return (
    <div id="body" className="col">

      <div id="title" className="row">

        <div className="col">
          <h1>Front-End Developer</h1>
          <p>
            I build beautiful and user-friendly websites with a focus on performance and 
            accessibility.
          </p>
        </div>

        <div className="col">
          <img/>
        </div>

      </div>

      <div id="about" className="row">
        
        <div className="col">
          <h2>About Me</h2>
          <p>
            I am a front-end developer with 5 years of experience in creating responsive, 
            accessible, and high-performance web applications. I have a strong foundation 
            in HTML, CSS, and JavaSctipt, and I am always eager to learn new technologies 
            and improve my skills.
          </p>
        </div>

        <div className="col">
          <img/>
        </div>

      </div>

      <div id="portfolio" className="col">
          
        <h2>Projects</h2>

        <section id="portfolio-list" className="row">
        
          <div className="item row">

            <img/>
            
            <div className="col">
              <p>Portfolio Website</p>
              <p>Lorem ipsum dolor sit amet</p>
            </div>

          </div>
          
          <div className="item row">

            <img/>
            
            <div className="col">
              <p>Portfolio Website</p>
              <p>Lorem ipsum dolor sit amet</p>
            </div>

          </div>
          
          <div className="item row">

            <img/>
            
            <div className="col">
              <p>Portfolio Website</p>
              <p>Lorem ipsum dolor sit amet</p>
            </div>

          </div>
        
        </section>

      </div>

      <div id="contact" className="col"></div>
        
        <h2>Contact Me</h2>
        <p>If you would like to work together, please feel free to reach out!</p>
        <form className="col">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
        </form>

    </div>
  );
};

export default Body;
