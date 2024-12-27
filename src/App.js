import "./App.css";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

import Home from "./components/Home";
import Project from "./components/Project";
import { Contact } from "./components/Project";

function App() {
  return (
    <div className="App">
      <Home />

      <Project />
      <Experience />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
