export default function Header() {
  return (
      <header className="header">
        <nav className="nav-bar">
          <img className="logo-img" src="./react-logo.png" alt="logo" />
          <ul className="list-item">
            <li><a className="nav-link" href="#">Pricing</a></li>
            <li><a className="nav-link" href="#">About</a></li>
            <li><a className="nav-link" href="#">Contact</a></li>
          </ul>
        </nav>
      </header>
  );
};