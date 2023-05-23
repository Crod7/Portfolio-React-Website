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
    <div>
        <div>
            <Navbar scrollToSection={scrollToSection} />
        </div>
        <div className="main-container" >
        <div ref={sectionRef}>
            <div className="homepage-banner" id="home">
                <button>Resume</button>
                <div className="homepage-name">
                    <h1>Carlos</h1>
                    <h2>Rodriguez</h2>
                    <h3>Software Developer</h3>
                </div>
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
    </div>


  )
}

export default Home
