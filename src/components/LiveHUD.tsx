import { Terminal, Zap } from 'lucide-react'

interface LiveHUDProps {
  explorationProgress: number
  isRecruiterMode: boolean
  onToggleRecruiterMode: () => void
  onOpenPalette: () => void
  onOpenTelemetry: () => void
}

export function LiveHUD({
  explorationProgress,
  isRecruiterMode,
  onToggleRecruiterMode,
  onOpenPalette,
  onOpenTelemetry
}: LiveHUDProps) {
  return (
    <div className="fixed top-16 left-0 right-0 z-40 bg-zinc-950/80 backdrop-blur-sm border-b border-zinc-800/60 text-xs text-zinc-400 font-mono py-2 px-4 flex flex-col md:flex-row justify-between items-center gap-3">
      {/* Brand System Info */}
      <div className="flex items-center gap-2 w-full md:w-auto text-zinc-300">
        <Terminal className="w-3.5 h-3.5 text-red-500" />
        <span className="font-bold tracking-wider">DHRUVOS_KERNEL: v1.0.6</span>
      </div>

      {/* OS System Health & Telemetry */}
      <div className="flex flex-wrap items-center justify-between md:justify-end gap-4 w-full md:w-auto border-t border-zinc-900 md:border-t-0 pt-2 md:pt-0">
        <div className="hidden lg:flex items-center gap-2 text-xxs text-zinc-500">
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" /> Systems: Operational
          </span>
        </div>

        {/* Exploration Tracker Progress */}
        <div className="flex items-center gap-2">
          <button 
            onClick={onOpenTelemetry}
            className="flex items-center gap-2 hover:bg-zinc-900 px-2 py-1 rounded transition-colors text-zinc-300"
          >
            <span>Exploration:</span>
            <div className="w-24 h-2 bg-zinc-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-red-500 transition-all duration-500" 
                style={{ width: `${explorationProgress}%` }}
              />
            </div>
            <span className="font-semibold text-zinc-100">{explorationProgress}%</span>
          </button>
        </div>

        {/* Action controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenPalette}
            className="hidden md:flex items-center gap-1.5 px-2 py-1 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white rounded transition-colors"
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>Search</span>
            <kbd className="text-xxs px-1.5 bg-zinc-950 border border-zinc-850 rounded text-zinc-500">Ctrl+K</kbd>
          </button>

          <button
            onClick={onToggleRecruiterMode}
            className={`flex items-center gap-1.5 px-3 py-1 rounded border font-semibold transition-all duration-300 ${
              isRecruiterMode
                ? 'bg-red-600 text-white border-red-500 hover:bg-red-700 glow-red'
                : 'bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border-zinc-800'
            }`}
          >
            <Zap className="w-3.5 h-3.5 animate-pulse" />
            <span>{isRecruiterMode ? 'OS Mode' : 'Recruiter Mode'}</span>
            {isRecruiterMode && (
              <span className="hidden sm:inline text-xxs font-normal opacity-90 border-l border-white/20 pl-1.5">
                #2 min review
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}
