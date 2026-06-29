import { useEffect, useState } from 'react'

interface BootSequenceProps {
  onComplete: () => void
}

export function BootSequence({ onComplete }: BootSequenceProps) {
  const [logs, setLogs] = useState<string[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)

  const bootLogs = [
    'Initializing DhruvOS Kernel v1.0.6...',
    'Checking hardware resources... 8 Cores found.',
    'Loading memory systems... RAM: 16GB [OK]',
    'Mounting file system: e:/Dhruv_Vira_Portfolio... [OK]',
    'Verifying configuration assets... 12/12 loaded.',
    'Establishing GitHub API handshake...',
    'Connection established with user: dhruvv16-hash',
    'Loading AI Assistant modules (Gemini Core)...',
    'Configuring Vector Store routes (Pinecone index)...',
    'Mounting Sandbox modules: [InvestorGPT, Trading, Email, APIs] [OK]',
    'Syncing telemetry systems...',
    'DhruvOS ready. Booting interface...'
  ]

  useEffect(() => {
    // Check if user has booted before
    const hasBooted = localStorage.getItem('dhruvos_booted')
    if (hasBooted === 'true') {
      onComplete()
      return
    }

    if (currentIndex < bootLogs.length) {
      const timer = setTimeout(() => {
        setLogs((prev) => [...prev, bootLogs[currentIndex]])
        setCurrentIndex((prev) => prev + 1)
      }, currentIndex === 0 ? 100 : Math.random() * 120 + 40)
      return () => clearTimeout(timer)
    } else {
      const finishTimer = setTimeout(() => {
        localStorage.setItem('dhruvos_booted', 'true')
        onComplete()
      }, 300)
      return () => clearTimeout(finishTimer)
    }
  }, [currentIndex, onComplete])

  const skipBoot = () => {
    localStorage.setItem('dhruvos_booted', 'true')
    onComplete()
  }

  return (
    <div className="fixed inset-0 z-50 flex flex-col justify-between bg-black p-6 font-mono text-green-500 text-sm md:text-base leading-relaxed select-none">
      <div className="flex-1 max-w-4xl mx-auto w-full overflow-y-auto space-y-2 pr-4">
        <div className="text-xs text-green-600 mb-8 border-b border-green-950 pb-2 flex justify-between">
          <span>DHRUVOS CORE DIAGNOSTICS</span>
          <span>SYS_STATUS: IN_BOOT</span>
        </div>
        
        {logs.map((log, index) => (
          <div key={index} className="flex items-start gap-2">
            <span className="text-green-800">[{index.toString().padStart(2, '0')}]</span>
            <span>{log}</span>
          </div>
        ))}
        
        {currentIndex < bootLogs.length && (
          <div className="flex items-center gap-1">
            <span className="text-green-800">[{currentIndex.toString().padStart(2, '0')}]</span>
            <span className="w-2 h-4 bg-green-500 animate-pulse" />
          </div>
        )}
      </div>

      <div className="max-w-4xl mx-auto w-full border-t border-green-950 pt-4 flex justify-between items-center text-xs text-green-700">
        <span>Press skip to bypass loading logs.</span>
        <button
          onClick={skipBoot}
          className="px-4 py-2 border border-green-700 rounded hover:bg-green-950/30 hover:text-green-400 transition-colors"
        >
          Skip Boot Sequence →
        </button>
      </div>
    </div>
  )
}
