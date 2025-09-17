import './header.scss';

function Header() {
  return (
    <div id="header" className="row">
          
      <h2>John Detsikas</h2>

      <div id="header-nav" className="row">
        <a className="nav-item">Home</a>
        <a className="nav-item">About</a>
        <a className="nav-item">Portfolio</a>
        <a className="nav-item">Contact</a>
      </div>

    </div>
  );
};

export default Header;
