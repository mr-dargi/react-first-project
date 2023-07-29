import React from "react";
import Header from "./component/Header";
import MainContent from "./component/MainContent";
import './App.css';

function App() {
  const [darkMode, setDarkMode] = React.useState(true);

  const toggleDarkMode = () => {
    setDarkMode(prevState => !prevState);
  }

  console.log(darkMode);

  return (
    <div className="App">
        <Header
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />
        <MainContent
          darkMode={darkMode}
        />
    </div>
  );
}

export default App;
