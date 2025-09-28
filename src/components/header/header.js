import './header.scss';

function scrollToSection(section) {
  const element = document.getElementById(section);
  if (element) {
    const xPos = element.getBoundingClientRect().left + window.scrollX;
    const yPos = element.getBoundingClientRect().top + window.scrollY - 120;
    window.scrollTo({top: yPos, left: xPos, behavior: 'smooth'})
  };
};

function Header() {
  return (
    <div id="header" className="row">
          
      <h2>John Detsikas</h2>

      <div id="header-nav" className="row">
        <p className="nav-item" onClick={() => scrollToSection("top")}>Top</p>
        <p className="nav-item" onClick={() => scrollToSection("about")}>About</p>
        <p className="nav-item" onClick={() => scrollToSection("portfolio")}>Portfolio</p>
        <p className="nav-item" onClick={() => scrollToSection("contact")}>Contact</p>
      </div>

    </div>
  );
};

export default Header;
