import About from "./components/About"
import Contact from "./components/Contact"
import Experience from "./components/Experience"
import Home from "./components/Home"
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
        <div id='contact'>
          <Contact/>
        </div>
      </main>
    </>
  )
}

export default App
