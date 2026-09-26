import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Education from "./component/Education";
import Projects from "./component/Projects";
import Skills from "./component/Skills";
import About from "./component/About";
import "./index.css";
import Navbar from "./component/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <section className="hero" id="hero">
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
        <Footer />
        <img src="/profile.jpg" className="profile" alt="Sumit" />

        <h1>Sumit Kumar Singh</h1>

        <h3>Web Developer</h3>

        <p>
          B.Tech Information Technology Student at Chandigarh Engineering College
          (CGC Landran)
        </p>

        <a href="/resume.pdf" className="btn">
          Download Resume
        </a>
      </section>
    </>
  );
}

export default App;