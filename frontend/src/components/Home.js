import Navbar from "./Navbar"
import Project from "./Projects"
import Skills from "./Skills"
import About from "./About"
import React, {useRef} from "react"
import Contact from "./Contact"

const Home = () => {
    const sectionRef = useRef(null)
    const scrollToSection = (sectionId) => {
        const section = sectionRef.current.querySelector(`#${sectionId}`)
        if (section) {
            section.scrollIntoView({behavior: 'smooth'})
        }
    }


  return (
    <div className="homepage-container" id="home">
        <Navbar scrollToSection={scrollToSection} />
        <div ref={sectionRef}>
            <div className="homepage-banner">
                <h1 className="homepage-name">Carlos Rodriguez</h1>
                <h2 className="homepage-subtitle">Software Developer</h2>
            </div>
            <div id="projects">
                <Project />
            </div>
            <div id="skills">
                <Skills />
            </div>
            <div id="about">
                <About />
            </div>
            <div id="contact">
                <Contact />
            </div>
        </div>
    </div>

  )
}

export default Home
