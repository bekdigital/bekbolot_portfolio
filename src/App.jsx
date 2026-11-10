import { useApp } from './context/AppContext'
import { ui } from './data/content'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Experience from './sections/Experience'
import Education from './sections/Education'
import Languages from './sections/Languages'
import Skills from './sections/Skills'
import Contact from './sections/Contact'

export default function App() {
  const { t } = useApp()
  return (
    <>
      <a href="#main" className="skip-link">
        {t(ui.skipToContent)}
      </a>
      <Navbar />
      <main id="main" tabIndex={-1}>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Languages />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
