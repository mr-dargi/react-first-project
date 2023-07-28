export default function Header() {
  return (
      <header className="header dark">
        <nav className="nav-bar">
          <img className="logo-img" src="./images/react-logo.png" alt="logo" />
          <div className="switch-section">
            <p>light</p>
            <label className="switch">
              <input type="checkbox" checked />
              <span className="slider round"></span>
            </label>
            <p>dark</p>
          </div>
        </nav>
      </header>
  );
};