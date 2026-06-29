import { useEffect, useState, useRef } from 'react'
import { Search, Terminal, ArrowRight } from 'lucide-react'

interface CommandPaletteProps {
  isOpen: boolean
  onClose: () => void
  onActionTriggered: (action: string) => void
}

export function CommandPalette({ isOpen, onClose, onActionTriggered }: CommandPaletteProps) {
  const [query, setQuery] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  
  const commands = [
    { name: 'System Assistant (AI Concierge)', category: 'Navigation', shortcut: '#assistant', action: 'scroll-assistant' },
    { name: 'Developer Desk (Workspace Modules)', category: 'Navigation', shortcut: '#desk', action: 'scroll-desk' },
    { name: 'Sandbox Lab (Live Demos)', category: 'Navigation', shortcut: '#sandbox', action: 'scroll-sandbox' },
    { name: 'Build Logs (Deep Case Studies)', category: 'Navigation', shortcut: '#build-logs', action: 'scroll-logs' },
    { name: 'Tech Specs (Skill Radar & Principles)', category: 'Navigation', shortcut: '#specs', action: 'scroll-specs' },
    { name: 'Connect Terminal (Hire / Contact)', category: 'Navigation', shortcut: '#connect', action: 'scroll-connect' },
    { name: 'Open Github Profile', category: 'Action', shortcut: '> github', action: 'open-github' },
    { name: 'Download Resume (DOCX)', category: 'Action', shortcut: '> resume', action: 'download-resume' },
    { name: 'Reboot DhruvOS (Show Boot Sequence)', category: 'Action', shortcut: '> reboot', action: 'reboot' },
    { name: 'Trigger Client solutions grid', category: 'Navigation', shortcut: '#solutions', action: 'scroll-solutions' }
  ]

  const filteredCommands = commands.filter(cmd => 
    cmd.name.toLowerCase().includes(query.toLowerCase()) || 
    cmd.shortcut.toLowerCase().includes(query.toLowerCase()) ||
    cmd.category.toLowerCase().includes(query.toLowerCase())
  )

  const [history, setHistory] = useState<string[]>(['> hire', '> resume', '#specs', '> reboot'])
  const [historyIdx, setHistoryIdx] = useState(-1)

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus()
      // Lock scroll
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  // Handle keys logic
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose()
    } else if (e.key === 'Tab') {
      // Tab Autocomplete the first matching command
      e.preventDefault()
      if (filteredCommands.length > 0) {
        setQuery(filteredCommands[0].shortcut)
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (history.length > 0) {
        const nextIdx = historyIdx < history.length - 1 ? historyIdx + 1 : 0
        setHistoryIdx(nextIdx)
        setQuery(history[nextIdx])
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (history.length > 0) {
        const nextIdx = historyIdx > 0 ? historyIdx - 1 : history.length - 1
        setHistoryIdx(nextIdx)
        setQuery(history[nextIdx])
      }
    }
  }

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (filteredCommands.length > 0) {
        const cmd = filteredCommands[0]
        onActionTriggered(cmd.action)
        // Add to history
        setHistory(prev => [cmd.shortcut, ...prev.filter(h => h !== cmd.shortcut)].slice(0, 10))
        setHistoryIdx(-1)
        onClose()
      }
    } else {
      handleKeyDown(e)
    }
  }

  if (!isOpen) return null

  return (
    <div 
      className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-2xl bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 px-4 py-3 border-b border-zinc-800 bg-zinc-900/50">
          <Search className="w-5 h-5 text-zinc-400" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Type a command or keyword (e.g. trading, > hire, specs)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleInputKeyDown}
            className="flex-1 bg-transparent text-white placeholder-zinc-500 outline-none text-sm md:text-base font-mono"
          />
          <button 
            onClick={onClose}
            className="text-xs px-2 py-1 bg-zinc-800 text-zinc-400 rounded border border-zinc-700 font-mono"
          >
            ESC
          </button>
        </div>

        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filteredCommands.length > 0 ? (
            filteredCommands.map((cmd) => (
              <button
                key={cmd.shortcut}
                onClick={() => {
                  onActionTriggered(cmd.action)
                  onClose()
                }}
                className="w-full flex items-center justify-between px-3 py-2 text-left hover:bg-zinc-800/50 rounded-lg group transition-colors font-mono"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-red-500 group-hover:border-red-500/30 transition-all">
                    <Terminal className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-200 group-hover:text-white transition-colors">{cmd.name}</div>
                    <div className="text-xs text-zinc-500">{cmd.category}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs px-2 py-0.5 bg-zinc-900 border border-zinc-800 text-zinc-400 rounded-md font-mono">
                    {cmd.shortcut}
                  </span>
                  <ArrowRight className="w-4 h-4 text-zinc-600 group-hover:text-red-500 group-hover:translate-x-1 transition-all" />
                </div>
              </button>
            ))
          ) : (
            <div className="p-4 text-center text-zinc-500 text-sm font-mono">
              No matching commands. Try searching 'AI', 'Trading', 'resume', or '&gt; hire'.
            </div>
          )}
        </div>

        <div className="px-4 py-2 border-t border-zinc-850 bg-zinc-900/20 text-xxs text-zinc-600 font-mono flex justify-between">
          <span>Search tags: Python, Quant, Spring, Docker, C++</span>
          <span>Tip: Type '&gt;' for actions</span>
        </div>
      </div>
    </div>
  )
}
