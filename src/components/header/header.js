import './header.scss';

function scrollToSection(section) {
  const element = document.getElementById(section);
  if (element) {
    const yPos = element.getBoundingClientRect().top + window.scrollY - 100;
    window.scrollTo({ top: yPos, behavior: 'smooth' });
  }
}

function Header() {
  return (
    <div id="header" className="row">
      <span className="logo">John Detsikas</span>
      <nav id="header-nav" className="row">
        <p className="nav-item" onClick={() => scrollToSection("top")}>Top</p>
        <p className="nav-item" onClick={() => scrollToSection("about")}>About</p>
        <p className="nav-item" onClick={() => scrollToSection("portfolio")}>Work</p>
        <p className="nav-item" onClick={() => scrollToSection("contact")}>Contact</p>
      </nav>
    </div>
  );
}

export default Header;
