// App.tsx - Example for Option 3 (Dedicated Video Section)
// This shows how to integrate the VideoIntro component

import { Navbar } from './components/Navbar'
import { Hero } from './sections/Hero'
import { VideoIntro } from './sections/VideoIntro'  // ← ADD THIS LINE
import { About } from './sections/About'
import { Skills } from './sections/Skills'
import { Projects } from './sections/Projects'
import { Experience } from './sections/Experience'
import { Resume } from './sections/Resume'
import { Contact } from './sections/Contact'
import { Footer } from './sections/Footer'

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <VideoIntro />  {/* ← ADD THIS LINE */}
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
