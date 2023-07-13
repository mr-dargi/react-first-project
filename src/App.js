import Header from "./component/Header";
import Footer from "./component/Footer";
import MainContent from "./component/MainContent";
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <MainContent />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
