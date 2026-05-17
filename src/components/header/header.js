
import './header.scss';
import { motion } from 'framer-motion';

const navItems = [
  ['top', 'Top'],
  ['about', 'About'],
  ['portfolio', 'Work'],
  ['contact', 'Contact']
];

function scrollToSection(section) {
  const element = document.getElementById(section);
  if (element) {
    const yPos = element.getBoundingClientRect().top + window.scrollY - 90;
    window.scrollTo({ top: yPos, behavior: 'smooth' });
  }
}

function Header() {
  return (
    <motion.header
      id="header"
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="logo-wrap">
        <span className="logo-dot" />
        <span className="logo">John Detsikas</span>
      </div>

      <nav id="header-nav">
        {navItems.map(([id, label]) => (
          <button
            key={id}
            className="nav-item"
            onClick={() => scrollToSection(id)}
          >
            {label}
          </button>
        ))}
      </nav>
    </motion.header>
  );
}

export default Header;
