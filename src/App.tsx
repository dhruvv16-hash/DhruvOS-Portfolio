import React, { Suspense, useState, useEffect } from 'react'
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
import { Download, ExternalLink } from 'lucide-react'

function App() {
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
    toast.success('Resume download initiated.')
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
      const el = document.getElementById(targetId)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    } else if (action === 'open-github') {
      window.open('https://github.com/dhruvv16-hash', '_blank')
    } else if (action === 'download-resume') {
      trackResumeDownloaded()
      window.open('/Dhruv_Resume_ATS_Optimized_1.docx')
    } else if (action === 'reboot') {
      localStorage.removeItem('dhruvos_booted')
      window.location.reload()
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
      
      {/* Top Header Live Stats HUD */}
      <LiveHUD
        explorationProgress={progress}
        isRecruiterMode={isRecruiterMode}
        onToggleRecruiterMode={toggleRecruiterMode}
        onOpenPalette={() => setIsPaletteOpen(true)}
        onOpenTelemetry={() => setIsTelemetryOpen(true)}
      />

      <Navbar onOpenPalette={() => setIsPaletteOpen(true)} />

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

      <div className={`min-h-screen bg-black transition-all ${isCyberMode ? 'cyber-hud' : ''}`}>
        
        {/* Recruiter Mode view swap */}
        {isRecruiterMode ? (
          <div className="pt-32 pb-24 max-w-4xl mx-auto px-4 space-y-16 font-mono text-zinc-300">
            
            {/* ATS Header Bio */}
            <div className="border-b border-zinc-900 pb-8 space-y-3">
              <h1 className="text-4xl font-bold text-white uppercase font-sans">Dhruv Vira</h1>
              <p className="text-red-500 font-bold tracking-wider text-xs">AI ENGINEER & BACKEND DEVELOPER</p>
              <p className="text-sm text-zinc-400 leading-relaxed font-sans">
                Computer Science Undergrad at VIT Chennai. Specialized in multi-agent LLM systems, REST service caching, and quantitative ETH/USD indicator backtests. Active contributor to omegaUp open source platforms.
              </p>
              
              <div className="pt-4 flex flex-wrap gap-4 select-none">
                <button
                  onClick={trackResumeDownloaded}
                  className="px-4 py-2 bg-white hover:bg-zinc-200 text-black text-xs font-semibold rounded flex items-center gap-1.5 font-sans"
                >
                  <Download className="w-3.5 h-3.5" /> Download Resume (DOCX)
                </button>
                <a
                  href="https://github.com/dhruvv16-hash"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900 text-zinc-300 text-xs rounded flex items-center gap-1.5"
                >
                  <ExternalLink className="w-3.5 h-3.5" /> Github profile
                </a>
              </div>
            </div>

            {/* ATS Skills inventory */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white border-b border-zinc-900 pb-2">TECHNICAL SPECS</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs">
                <div>
                  <span className="text-red-500 font-bold block mb-2">Expert (Fluent):</span>
                  <div className="flex flex-col gap-1.5 text-zinc-400">
                    {projectsManifest.skills.filter(s => s.level === 'Expert').map(s => (
                      <span key={s.name}>• {s.name}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <span className="text-zinc-300 font-bold block mb-2">Advanced:</span>
                  <div className="flex flex-col gap-1.5 text-zinc-500">
                    {projectsManifest.skills.filter(s => s.level === 'Advanced').map(s => (
                      <span key={s.name}>• {s.name}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <span className="text-zinc-500 font-bold block mb-2">Learning:</span>
                  <div className="flex flex-col gap-1.5 text-zinc-655">
                    {projectsManifest.skills.filter(s => s.level === 'Learning').map(s => (
                      <span key={s.name}>• {s.name}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* ATS Experience Timeline */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-white border-b border-zinc-900 pb-2">CHRONOLOGICAL BACKGROUND</h3>
              <div className="space-y-6 text-xs">
                {projectsManifest.experienceList.map((exp, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between font-bold text-white">
                      <span>{exp.title}</span>
                      <span className="text-red-500">{exp.period}</span>
                    </div>
                    <span className="text-zinc-500 block text-xxs uppercase tracking-wider">{exp.subtitle}</span>
                    <ul className="space-y-1.5 text-zinc-400 list-disc pl-5 font-sans text-sm leading-relaxed">
                      {exp.details.map((bullet, bIdx) => (
                        <li key={bIdx}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* ATS Projects details */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-white border-b border-zinc-900 pb-2">KEY DEVELOPMENTS</h3>
              <div className="space-y-6 text-xs">
                {projectsManifest.projects.map((proj) => (
                  <div key={proj.id} className="space-y-2">
                    <div className="flex justify-between font-bold text-white">
                      <span>{proj.title}</span>
                      <a href={proj.link} className="text-red-500 hover:underline">Codebase</a>
                    </div>
                    <p className="text-zinc-500 leading-relaxed font-sans text-sm">{proj.description}</p>
                    <div className="flex flex-wrap gap-2 pt-1.5">
                      {proj.tech.map(t => (
                        <span key={t} className="px-2 py-0.5 bg-zinc-900 border border-zinc-800 text-zinc-500 rounded text-xxs">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ATS Connect details */}
            <div className="border-t border-zinc-900 pt-8 text-center text-xs space-y-4">
              <p>For immediate opportunities: dhruvvira17@gmail.com | +91 9303000832</p>
              <button
                onClick={toggleRecruiterMode}
                className="px-4 py-2 border border-red-500/30 hover:border-red-500 text-red-500 rounded bg-red-950/10 font-bold"
              >
                Return to DhruvOS Dashboard
              </button>
            </div>

          </div>
        ) : (
          <main className="pt-28">
            {/* Identity Layer */}
            <Hero
              onExplore={() => {
                const el = document.getElementById('assistant')
                el?.scrollIntoView({ behavior: 'smooth' })
              }}
              onSkip={() => {
                const el = document.getElementById('build-logs')
                el?.scrollIntoView({ behavior: 'smooth' })
              }}
              onHire={() => {
                const el = document.getElementById('connect')
                el?.scrollIntoView({ behavior: 'smooth' })
              }}
            />

            {/* Conversation Layer */}
            <Suspense fallback={
              <div className="py-12 bg-zinc-950/20 border-b border-zinc-900 flex flex-col items-center justify-center font-mono text-zinc-650 text-xs">
                <div className="w-4 h-4 border border-zinc-800 border-t-zinc-600 rounded-full animate-spin mb-2" />
                <span>SYS_LOADING_MODULE: AI_CONCIERGE...</span>
              </div>
            }>
              <AIAssistant onInteraction={incrementAIQuestions} />
            </Suspense>

            {/* Workspace layer */}
            <InteractiveDesk
              onInteraction={trackDeskClick}
              isCyberMode={isCyberMode}
              onToggleTheme={() => setIsCyberMode(!isCyberMode)}
            />

            {/* Capabilities mapping layer */}
            <Suspense fallback={
              <div className="py-12 bg-zinc-950/20 border-b border-zinc-900 flex flex-col items-center justify-center font-mono text-zinc-650 text-xs">
                <div className="w-4 h-4 border border-zinc-800 border-t-zinc-600 rounded-full animate-spin mb-2" />
                <span>SYS_LOADING_MODULE: SOLUTIONS_MAPPING...</span>
              </div>
            }>
              <ClientSolutions />
            </Suspense>

            {/* Evidence Sandboxes layer */}
            <Suspense fallback={
              <div className="py-12 bg-zinc-950/20 border-b border-zinc-900 flex flex-col items-center justify-center font-mono text-zinc-650 text-xs">
                <div className="w-4 h-4 border border-zinc-800 border-t-zinc-600 rounded-full animate-spin mb-2" />
                <span>SYS_LOADING_MODULE: EVIDENCE_SANDBOXES...</span>
              </div>
            }>
              <ProductPlayground onSandboxRun={trackSandboxRun} />
            </Suspense>

            {/* Clickable Architecture & Case studies */}
            <Suspense fallback={
              <div className="py-12 bg-zinc-950/20 border-b border-zinc-900 flex flex-col items-center justify-center font-mono text-zinc-650 text-xs">
                <div className="w-4 h-4 border border-zinc-800 border-t-zinc-600 rounded-full animate-spin mb-2" />
                <span>SYS_LOADING_MODULE: CASE_STUDIES...</span>
              </div>
            }>
              <CaseStudies onNodeClicked={trackNodeInspected} />
            </Suspense>

            {/* Open Source Wall */}
            <Suspense fallback={
              <div className="py-12 bg-zinc-950/20 border-b border-zinc-900 flex flex-col items-center justify-center font-mono text-zinc-650 text-xs">
                <div className="w-4 h-4 border border-zinc-800 border-t-zinc-600 rounded-full animate-spin mb-2" />
                <span>SYS_LOADING_MODULE: OPEN_SOURCE_WALL...</span>
              </div>
            }>
              <OpenSourceWall />
            </Suspense>

            {/* Skill Tiers & principles */}
            <Suspense fallback={
              <div className="py-12 bg-zinc-950/20 border-b border-zinc-900 flex flex-col items-center justify-center font-mono text-zinc-650 text-xs">
                <div className="w-4 h-4 border border-zinc-800 border-t-zinc-600 rounded-full animate-spin mb-2" />
                <span>SYS_LOADING_MODULE: TECH_SPECS...</span>
              </div>
            }>
              <EngineeringPrinciples />
            </Suspense>

            {/* Journey Logs */}
            <Suspense fallback={
              <div className="py-12 bg-zinc-950/20 border-b border-zinc-900 flex flex-col items-center justify-center font-mono text-zinc-650 text-xs">
                <div className="w-4 h-4 border border-zinc-800 border-t-zinc-600 rounded-full animate-spin mb-2" />
                <span>SYS_LOADING_MODULE: JOURNEY_LOG...</span>
              </div>
            }>
              <JourneyTimeline />
            </Suspense>

            {/* Contact Console form */}
            <Contact onFormSubmitted={incrementCommands} />
          </main>
        )}

        <Footer />
      </div>
    </>
  )
}

export default App