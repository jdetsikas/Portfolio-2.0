import './footer.scss';

function Footer() {
  return (
    <footer className="row">
      <span className="footer-name">John Detsikas</span>
      <span className="footer-copy">© {new Date().getFullYear()} · Front-End Developer</span>
    </footer>
  );
}

export default Footer;
