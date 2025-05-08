import About from "../aboutPage/About";
import Projects from "../projectsPage/Projects";
import Services from "../servicesPage/ServicesItems";
import Hero from "./Hero";
import HeroImg from "./HeroImg";


export default function Home() {
    return (
        <div>
            <Hero />
            <HeroImg />
            <About />
            <Services />
            <Projects />
        </div>
    )
}