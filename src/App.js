import "./App.css";
import Header from "./Components/Header.js";
import IntroductionPanel from "./Components/IntroductionPanel.js";
import ProjectsPanel from "./Components/ProjectsPanel.js";
import Skills from "./Components/Skills.js";
import RandomComponent from "./Components/RandomComponent";
import RandomStatementComponent from "./Components/RandomStatementComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <IntroductionPanel />
        <Skills />
        <ProjectsPanel />
        <RandomComponent />
        <RandomStatementComponent />
      </header>
    </div>
  );
}

export default App;
