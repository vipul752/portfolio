import "./App.css";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Home from "./components/Home";
import Project from "./components/Project";
import TechStack from "./components/TechStack";

function App() {
  return (
    <div className="App">
      <Header />
      <Home/>
      <AboutUs/>
      <TechStack/>
      <Project/>
      <Experience/>
      <ContactUs/>
    </div>
  );
}

export default App;
