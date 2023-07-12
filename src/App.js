import './App.css';

function Header() {
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

function Footer() {
  return (
    <footer>
      © 2023 mr.d development. All rights reserved.
    </footer>
  )
}

function MainContent() {
  return (
    <div>
      <h1>The reasons I'm excited to learn react:</h1>
      <ol>
        <li>
          It's a popular library, so I'll be 
          able to fit in with the cool kids!
        </li>
        <li>
          I'm more likely to get a job as a developer
          if I know React
        </li>
      </ol>
    </div>
  );
};


function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
