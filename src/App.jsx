import About from "./components/About"
import Contact from "./components/Contact"
import Education from "./components/Education"
import Experience from "./components/Experience"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Languages from "./components/Languages"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Skills from "./components/Skills"

function App() {

  return (
    <>
      <Navbar/>
      <main>
        <div id='/'>
          <Home/>
        </div>
        <div id='about'>
          <About/>
        </div>
        <div id='skills'>
          <Skills/>
        </div>
        <div id='experience'>
          <Experience/>
        </div>
        <div id='projects'>
          <Projects/>
        </div>
        <div id='education'>
          <Education/>
        </div>
        <div id='languages'>
          <Languages/>
        </div>
        <div id='contact'>
          <Contact/>
        </div>
        <div id='footer'>
          <Footer/>
        </div>
      </main>
    </>
  )
}

export default App
