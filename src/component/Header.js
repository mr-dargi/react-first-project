export default function Header() {
  return (
      <header className="header">
        <nav className="nav-bar">
          <img className="logo-img" src="./images/react-logo.png" alt="logo" />
          <ul className="nav-item">
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
  );
};