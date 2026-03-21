import Navbar from "../components/Navbar"
import Hero from "../sections/Hero"
import About from "../sections/About"
import Journey from "../sections/Journey"
import TechStack from "../sections/TechStack"
import Achievements from "../sections/Achievements"
import Projects from "../sections/Projects"
import Contact from "../sections/Contact"
import Github from "../sections/Github";
import Footer from "../components/Footer";

export default function Page() {
  return (
    <>
    <div className="pt-20">
      <Navbar />

<Hero />
<div className="h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent"></div>

<About />
<div className="h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent"></div>

<Journey />
<div className="h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent"></div>

<TechStack />
<div className="h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent"></div>

<Projects />
<div className="h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent"></div>

<Achievements />
<div className="h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent"></div>



<Contact />
<Footer />
      </div>
    </>
  )
}