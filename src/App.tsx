import React, { Suspense, useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Hero } from './sections/Hero'
import { InteractiveDesk } from './sections/InteractiveDesk'
import { Contact } from './sections/Contact'
import { Footer } from './sections/Footer'
import { BootSequence } from './components/BootSequence'
import { LiveHUD } from './components/LiveHUD'

const AIAssistant = React.lazy(() => import('./components/AIAssistant').then(m => ({ default: m.AIAssistant })))
const ProductPlayground = React.lazy(() => import('./sections/ProductPlayground').then(m => ({ default: m.ProductPlayground })))
const CaseStudies = React.lazy(() => import('./sections/CaseStudies').then(m => ({ default: m.CaseStudies })))
const ClientSolutions = React.lazy(() => import('./sections/ClientSolutions').then(m => ({ default: m.ClientSolutions })))
const JourneyTimeline = React.lazy(() => import('./sections/JourneyTimeline').then(m => ({ default: m.JourneyTimeline })))
const OpenSourceWall = React.lazy(() => import('./sections/OpenSourceWall').then(m => ({ default: m.OpenSourceWall })))
const EngineeringPrinciples = React.lazy(() => import('./sections/EngineeringPrinciples').then(m => ({ default: m.EngineeringPrinciples })))
import { CommandPalette } from './components/CommandPalette'
import { TelemetryStats } from './components/TelemetryStats'
import type { TelemetryLogs } from './components/TelemetryStats'
import { projectsManifest } from './data/projectsManifest'
import { Toaster, toast } from 'sonner'
import { Download, Github, Linkedin, Mail, ArrowRight } from 'lucide-react'

function App() {
  const navigate = useNavigate()
  const [booting, setBooting] = useState(true)
  const [isCyberMode, setIsCyberMode] = useState(true)
  const [isRecruiterMode, setIsRecruiterMode] = useState(false)
  
  // Modals Toggles
  const [isPaletteOpen, setIsPaletteOpen] = useState(false)
  const [isTelemetryOpen, setIsTelemetryOpen] = useState(false)

  // Telemetry logs tracking state
  const [telemetry, setTelemetry] = useState<TelemetryLogs>({
    commandsExecuted: 0,
    sandboxesRun: [],
    nodesInspected: [],
    aiQuestions: 0,
    resumeDownloaded: false,
    recruiterSwaps: 0
  })
  
  const [deskItemsClicked, setDeskItemsClicked] = useState<string[]>([])

  // Global Keyboard listener for Ctrl+K
  useEffect(() => {
    const handleGlobalKeys = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault()
        setIsPaletteOpen((prev) => !prev)
      }
    }
    window.addEventListener('keydown', handleGlobalKeys)
    return () => window.removeEventListener('keydown', handleGlobalKeys)
  }, [])

  // Telemetry updates tracking functions
  const trackDeskClick = (itemId: string) => {
    if (!deskItemsClicked.includes(itemId)) {
      setDeskItemsClicked((prev) => [...prev, itemId])
    }
  }

  const trackSandboxRun = (sandboxId: string) => {
    setTelemetry((prev) => {
      if (prev.sandboxesRun.includes(sandboxId)) return prev
      return { ...prev, sandboxesRun: [...prev.sandboxesRun, sandboxId] }
    })
  }

  const trackNodeInspected = (nodeId: string) => {
    setTelemetry((prev) => {
      if (prev.nodesInspected.includes(nodeId)) return prev
      return { ...prev, nodesInspected: [...prev.nodesInspected, nodeId] }
    })
  }

  const incrementCommands = () => {
    setTelemetry((prev) => ({ ...prev, commandsExecuted: prev.commandsExecuted + 1 }))
  }

  const incrementAIQuestions = () => {
    setTelemetry((prev) => ({ ...prev, aiQuestions: prev.aiQuestions + 1 }))
  }

  const trackResumeDownloaded = () => {
    setTelemetry((prev) => ({ ...prev, resumeDownloaded: true }))
    toast.success('Downloading Dhruv_Vira_Resume.pdf...')

    const link = document.createElement('a')
    link.href = '/Dhruv_Vira_Resume.pdf'
    link.download = 'Dhruv_Vira_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const toggleRecruiterMode = () => {
    setIsRecruiterMode((prev) => !prev)
    setTelemetry((prev) => ({ ...prev, recruiterSwaps: prev.recruiterSwaps + 1 }))
    toast.info(`Swapped to ${!isRecruiterMode ? 'Recruiter' : 'DhruvOS'} view.`)
  }

  // Calculate factual exploration progress (0 - 100%)
  const calculateProgress = () => {
    const aiVal = telemetry.aiQuestions > 0 ? 15 : 0
    const deskVal = Math.min(18, deskItemsClicked.length * 3)
    const sandboxVal = Math.min(25, telemetry.sandboxesRun.length * 5)
    const nodeVal = telemetry.nodesInspected.length > 0 ? 15 : 0
    const cmdVal = telemetry.commandsExecuted > 0 ? 12 : 0
    const resVal = telemetry.resumeDownloaded ? 15 : 0
    return aiVal + deskVal + sandboxVal + nodeVal + cmdVal + resVal
  }

  const progress = calculateProgress()

  // Command palette action mapping
  const executePaletteAction = (action: string) => {
    incrementCommands()
    if (action.startsWith('scroll-')) {
      const targetId = action.replace('scroll-', '')
      const routeMap: Record<string, string> = {
        'assistant': '/concierge',
        'desk': '/workspace',
        'sandbox': '/sandbox-lab',
        'build-logs': '/build-logs',
        'specs': '/tech-specs',
        'connect': '/connect'
      }
      if (routeMap[targetId]) {
        navigate(routeMap[targetId])
      }
    } else if (action === 'open-github') {
      window.open('https://github.com/dhruvv16-hash', '_blank')
    } else if (action === 'download-resume') {
      trackResumeDownloaded()
    } else if (action === 'reboot') {
      localStorage.removeItem('dhruvos_booted')
      window.location.reload()
    } else if (action === 'matrix-mode') {
      document.body.style.filter = 'hue-rotate(90deg) contrast(1.2)'
      toast.success('Matrix mode engaged.')
    } else if (action === 'hire-now') {
      import('canvas-confetti').then((confetti) => {
        confetti.default({ particleCount: 150, spread: 70, origin: { y: 0.6 } })
      })
      navigate('/connect')
    } else if (action === 'print-resume') {
      toast.info('Terminal print function activated.', { description: 'ASCII Resume loaded.' })
      console.log(`
      ========================================
                 DHRUV VIRA RESUME
      ========================================
      Email: dhruvvira17@gmail.com
      Skills: Python, Next.js, FastAPI, ML
      ========================================
      `)
    }
  }

  // Session Report Print compiling
  const printSessionReport = () => {
    const printWindow = window.open('', '_blank')
    if (!printWindow) return

    const summaryHTML = `
      <html>
        <head>
          <title>DhruvOS - Session Briefing Report</title>
          <style>
            body { font-family: monospace; padding: 40px; color: #111; line-height: 1.6; }
            h1, h2 { border-bottom: 2px solid #000; padding-bottom: 5px; }
            .meta { color: #555; font-size: 12px; margin-bottom: 30px; }
            .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 30px; }
            .block { border: 1px solid #ddd; padding: 15px; border-radius: 5px; }
            ul { padding-left: 20px; }
            .footer { margin-top: 50px; text-align: center; font-size: 11px; color: #777; border-top: 1px solid #ddd; pt: 20px; }
          </style>
        </head>
        <body>
          <h1>DHRUVOS SYSTEM EXPLORATION REPORT</h1>
          <div class="meta">Report compiled on: ${new Date().toLocaleString()}<br/>Handshake Node: dhruvv16-hash</div>
          
          <div class="grid">
            <div class="block">
              <h3>SYSTEM TELEMETRY SUMMARY</h3>
              <ul>
                <li>Commands Typed: ${telemetry.commandsExecuted}</li>
                <li>AI assistant questions: ${telemetry.aiQuestions}</li>
                <li>Explored Sandboxes: ${telemetry.sandboxesRun.length} / 5</li>
                <li>Architecture Nodes inspected: ${telemetry.nodesInspected.length}</li>
                <li>Credentials Downloaded: ${telemetry.resumeDownloaded ? 'Yes' : 'No'}</li>
              </ul>
            </div>
            <div class="block">
              <h3>EXPLORER DETAILS</h3>
              <ul>
                <li>Active Sandboxes: ${telemetry.sandboxesRun.join(', ') || 'None'}</li>
                <li>Inspected layers: ${telemetry.nodesInspected.join(', ') || 'None'}</li>
                <li>Engagement status: ${progress}% total system coordinates loaded</li>
              </ul>
            </div>
          </div>

          <h2>ENGINEER INVENTORY OVERVIEW</h2>
          <p><strong>Dhruv Vira</strong> - AI Engineer & Backend Developer</p>
          <p>Building multi-agent reasoning loops, quant financial indicators, Chrome DOM Mutation observers, and FastAPI caching pipelines.</p>
          
          <h3>Primary Credentials Contacts:</h3>
          <ul>
            <li>Github: github.com/dhruvv16-hash</li>
            <li>LinkedIn: linkedin.com/in/dhruv-mayur-vira-5428b031b</li>
            <li>Email: dhruvvira17@gmail.com</li>
          </ul>

          <div class="footer">
            Compiled by DhruvOS Telemetry Daemon. Scan QR in online portal to re-sync.
          </div>
          <script>window.print();</script>
        </body>
      </html>
    `
    printWindow.document.write(summaryHTML)
    printWindow.document.close()
  }

  // Ensure page starts at the very top (Hero section) on load / after boot sequence
  useEffect(() => {
    if (!booting) {
      if (typeof window !== 'undefined') {
        if ('scrollRestoration' in window.history) {
          window.history.scrollRestoration = 'manual'
        }

        // Clear any auto-scrolling hash from URL on initial landing
        if (window.location.hash) {
          window.history.replaceState(null, '', window.location.pathname)
        }

        const startTime = performance.now()
        let frameId: number

        const lockTop = () => {
          window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
          document.documentElement.scrollTop = 0
          document.body.scrollTop = 0

          if (performance.now() - startTime < 600) {
            frameId = requestAnimationFrame(lockTop)
          }
        }

        frameId = requestAnimationFrame(lockTop)

        return () => {
          if (frameId) cancelAnimationFrame(frameId)
        }
      }
    }
  }, [booting])

  // Trigger 100% exploration completion notification once
  useEffect(() => {
    if (progress === 100) {
      toast.success('Congratulations! 100% Coordinates loaded. Session summary briefing is unlocked!')
    }
  }, [progress])

  if (booting) {
    return <BootSequence onComplete={() => setBooting(false)} />
  }

  return (
    <>
      <Toaster richColors position="bottom-right" />
      
      {!isRecruiterMode && (
        <>
          <LiveHUD
            explorationProgress={progress}
            isRecruiterMode={isRecruiterMode}
            onToggleRecruiterMode={toggleRecruiterMode}
            onOpenPalette={() => setIsPaletteOpen(true)}
            onOpenTelemetry={() => setIsTelemetryOpen(true)}
          />
          <Navbar onOpenPalette={() => setIsPaletteOpen(true)} />
        </>
      )}

      {/* Global Command Palette search dialog */}
      <CommandPalette
        isOpen={isPaletteOpen}
        onClose={() => setIsPaletteOpen(false)}
        onActionTriggered={executePaletteAction}
      />

      {/* Global Telemetry Dashboard dialog */}
      <TelemetryStats
        logs={telemetry}
        isOpen={isTelemetryOpen}
        onClose={() => setIsTelemetryOpen(false)}
        onDownloadReport={printSessionReport}
      />

      <div className={`min-h-screen bg-black transition-all ${isCyberMode && !isRecruiterMode ? 'cyber-hud' : ''}`}>
        
        {isRecruiterMode ? (
          <div className="bg-black min-h-screen font-sans text-zinc-300">
            {/* 1. MINIMAL HEADER */}
            <div className="sticky top-0 z-50 bg-black/90 backdrop-blur-md border-b border-zinc-900 px-4 py-4">
              <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-xl font-bold text-white font-mono tracking-wider">
                  DHRUV_OS<span className="text-red-500">.</span>
                </div>
                <div className="flex flex-wrap justify-center gap-4 text-xs font-semibold tracking-wide text-zinc-400">
                  <a href="#about" className="hover:text-white transition-colors">About</a>
                  <a href="#projects" className="hover:text-white transition-colors">Projects</a>
                  <a href="#opensource" className="hover:text-white transition-colors">Open Source</a>
                  <a href="/Dhruv_Vira_Resume.pdf" download onClick={trackResumeDownloaded} className="hover:text-white transition-colors">Resume</a>
                  <a href="#contact" className="hover:text-white transition-colors">Contact</a>
                </div>
                <button
                  onClick={toggleRecruiterMode}
                  className="flex items-center gap-2 px-4 py-1.5 bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-bold rounded border border-zinc-800 transition-colors"
                >
                  Exit Recruiter Mode <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 pt-16 pb-24 space-y-20">
              
              {/* 2. HERO */}
              <section id="about" className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">DHRUV VIRA</h1>
                <p className="text-red-500 font-bold tracking-widest text-sm uppercase">AI SYSTEMS & BACKEND ENGINEER</p>
                <div className="text-base text-zinc-400 leading-relaxed max-w-2xl space-y-4">
                  <p>B.Tech CSE @ VIT Chennai.</p>
                  <p>Building multi-agent AI systems, backend infrastructure, and quantitative trading systems. Active open-source contributor.</p>
                </div>
                <div className="pt-2 flex flex-wrap gap-4">
                  <a
                    href="/Dhruv_Vira_Resume.pdf"
                    download="Dhruv_Vira_Resume.pdf"
                    onClick={trackResumeDownloaded}
                    className="px-5 py-2.5 bg-white hover:bg-zinc-200 text-black text-sm font-bold rounded flex items-center gap-2 transition-colors"
                  >
                    <Download className="w-4 h-4" /> Download Resume
                  </a>
                  <a
                    href="https://github.com/dhruvv16-hash"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 border border-zinc-800 hover:border-zinc-600 hover:text-white text-zinc-300 text-sm font-semibold rounded flex items-center gap-2 transition-colors"
                  >
                    <Github className="w-4 h-4" /> GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/dhruv-vira-33bb19439"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 border border-zinc-800 hover:border-zinc-600 hover:text-white text-zinc-300 text-sm font-semibold rounded flex items-center gap-2 transition-colors"
                  >
                    <Linkedin className="w-4 h-4" /> LinkedIn
                  </a>
                </div>
              </section>

              {/* 3. TECHNICAL STACK */}
              <section className="space-y-6">
                <h2 className="text-xl font-bold text-white border-b border-zinc-900 pb-3">TECHNICAL STACK</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
                  <div>
                    <h3 className="text-white font-bold mb-2">AI / ML</h3>
                    <p className="text-zinc-400">Python &middot; XGBoost &middot; LLMs &middot; RAG &middot; Agentic AI</p>
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-2">BACKEND</h3>
                    <p className="text-zinc-400">FastAPI &middot; PostgreSQL &middot; Supabase &middot; Spring Boot &middot; REST APIs</p>
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-2">FRONTEND</h3>
                    <p className="text-zinc-400">Next.js &middot; React &middot; TypeScript &middot; Tailwind</p>
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-2">SYSTEMS</h3>
                    <p className="text-zinc-400">C++ &middot; Java &middot; Docker &middot; Kubernetes</p>
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-2">QUANT / FINANCE</h3>
                    <p className="text-zinc-400">Python &middot; Pine Script &middot; Backtesting &middot; Market Data</p>
                  </div>
                </div>
              </section>

              {/* 4. EXPERIENCE / BACKGROUND */}
              <section className="space-y-6">
                <h2 className="text-xl font-bold text-white border-b border-zinc-900 pb-3">EXPERIENCE / BACKGROUND</h2>
                <div className="space-y-8">
                  <div>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-1 mb-2">
                      <h3 className="text-base font-bold text-white">Open Source & Competitive Engineering</h3>
                      <span className="text-zinc-500 text-sm font-mono">2024 &mdash; Present</span>
                    </div>
                    <ul className="space-y-2 text-sm text-zinc-400 list-disc pl-5">
                      <li>iQOO Hackathon Winner</li>
                      <li>Open-source contributions across Supabase, omegaup, Kubernetes, OpenBB</li>
                      <li>Active in algorithmic problem solving and competitive coding</li>
                    </ul>
                  </div>
                  
                  <div>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-1 mb-2">
                      <h3 className="text-base font-bold text-white">B.Tech Computer Science & Engineering</h3>
                      <span className="text-zinc-500 text-sm font-mono">2024 &mdash; 2028</span>
                    </div>
                    <p className="text-sm text-zinc-400">VIT Chennai</p>
                    <ul className="space-y-2 text-sm text-zinc-400 list-disc pl-5 mt-2">
                      <li>Core coursework: Data Structures & Algorithms, Object-Oriented Programming (C++/Java)</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* 5. KEY PROJECTS */}
              <section id="projects" className="space-y-6">
                <h2 className="text-xl font-bold text-white border-b border-zinc-900 pb-3">KEY PROJECTS</h2>
                <div className="space-y-10">
                  {projectsManifest.projects.map(proj => (
                    <div key={proj.id} className="space-y-3">
                      <div className="flex items-center gap-3">
                        <h3 className="text-lg font-bold text-white">{proj.title}</h3>
                        <a href={proj.link} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-zinc-500 hover:text-white flex items-center gap-1 transition-colors">
                          GitHub <ArrowRight className="w-3 h-3" />
                        </a>
                      </div>
                      <p className="text-sm text-zinc-400 leading-relaxed max-w-3xl">{proj.description}</p>
                      <div className="text-xs text-zinc-500 font-mono">
                        <span className="font-bold text-zinc-400">Stack:</span> {proj.tech.join(' · ')}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* 6. OPEN SOURCE */}
              <section id="opensource" className="space-y-6">
                <h2 className="text-xl font-bold text-white border-b border-zinc-900 pb-3">OPEN SOURCE</h2>
                <div className="space-y-8">
                  {projectsManifest.openSourceTimeline.map((pr, idx) => (
                    <div key={idx} className="space-y-2">
                      <h3 className="text-base font-bold text-white">{pr.repo}</h3>
                      <p className="text-sm text-zinc-400 leading-relaxed">{pr.details}</p>
                      <a href={pr.link} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-zinc-500 hover:text-white flex items-center gap-1 transition-colors pt-1">
                        View PR <ArrowRight className="w-3 h-3" />
                      </a>
                    </div>
                  ))}
                </div>
              </section>

              {/* 7. CONTACT & 8. FOOTER */}
              <section id="contact" className="pt-12 border-t border-zinc-900">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                  <div className="space-y-2">
                    <h2 className="text-lg font-bold text-white">DHRUV VIRA</h2>
                    <p className="text-sm text-zinc-500">AI Systems &middot; Backend &middot; Quant</p>
                  </div>
                  <div className="flex flex-wrap gap-6 text-sm font-semibold">
                    <a href="https://github.com/dhruvv16-hash" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white flex items-center gap-2 transition-colors">
                      <Github className="w-4 h-4" /> GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/dhruv-vira-33bb19439" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white flex items-center gap-2 transition-colors">
                      <Linkedin className="w-4 h-4" /> LinkedIn
                    </a>
                    <a href="mailto:dhruvvira17@gmail.com" className="text-zinc-400 hover:text-white flex items-center gap-2 transition-colors">
                      <Mail className="w-4 h-4" /> Email
                    </a>
                  </div>
                </div>
                <div className="mt-16 text-center text-xs text-zinc-600">
                  &copy; 2026 Dhruv Vira
                </div>
              </section>

            </div>
          </div>
        ) : (
          <main className="pt-28">
            <Routes>
              <Route path="/" element={
                <>
                  <Hero
                    onExplore={() => navigate('/concierge')}
                    onSkip={() => navigate('/build-logs')}
                    onHire={() => navigate('/connect')}
                  />
                  {/* Keep some elements on home page if needed, or just hero */}
                  <Suspense fallback={<div className="py-12 bg-zinc-950/20 text-center text-xs text-zinc-650">Loading...</div>}>
                     <EngineeringPrinciples />
                  </Suspense>
                </>
              } />
              
              <Route path="/concierge" element={
                <Suspense fallback={<div className="py-12 bg-zinc-950/20 text-center text-xs text-zinc-650">Loading...</div>}>
                  <AIAssistant onInteraction={incrementAIQuestions} />
                </Suspense>
              } />

              <Route path="/workspace" element={
                <InteractiveDesk
                  onInteraction={trackDeskClick}
                  isCyberMode={isCyberMode}
                  onToggleTheme={() => setIsCyberMode(!isCyberMode)}
                />
              } />

              <Route path="/sandbox-lab" element={
                <Suspense fallback={<div className="py-12 bg-zinc-950/20 text-center text-xs text-zinc-650">Loading...</div>}>
                  <ClientSolutions />
                  <ProductPlayground onSandboxRun={trackSandboxRun} />
                </Suspense>
              } />

              <Route path="/build-logs" element={
                <Suspense fallback={<div className="py-12 bg-zinc-950/20 text-center text-xs text-zinc-650">Loading...</div>}>
                  <CaseStudies onNodeClicked={trackNodeInspected} />
                  <OpenSourceWall />
                  <JourneyTimeline />
                </Suspense>
              } />

              <Route path="/tech-specs" element={
                <Suspense fallback={<div className="py-12 bg-zinc-950/20 text-center text-xs text-zinc-650">Loading...</div>}>
                  <EngineeringPrinciples />
                </Suspense>
              } />

              <Route path="/connect" element={
                <Contact onFormSubmitted={incrementCommands} />
              } />
            </Routes>
          </main>
        )}

        <Footer />
      </div>
    </>
  )
}

export default App