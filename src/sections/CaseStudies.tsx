import { useState } from 'react'
import { projectsManifest } from '../data/projectsManifest'
import { Terminal, Database } from 'lucide-react'

interface CaseStudiesProps {
  onNodeClicked: (nodeId: string) => void
}

export function CaseStudies({ onNodeClicked }: CaseStudiesProps) {
  const [activeStudyIdx, setActiveStudyIdx] = useState(0)
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null)

  const activeStudy = projectsManifest.caseStudies[activeStudyIdx]

  const selectNode = (nodeId: string) => {
    setSelectedNodeId(nodeId)
    onNodeClicked(nodeId) // Increment telemetry exploration stats
  }

  return (
    <section id="build-logs" className="py-24 bg-zinc-950 border-b border-zinc-900 grid-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
          <div>
            <span className="text-red-500 text-xs font-mono uppercase tracking-widest block mb-2">Build Logs</span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">Case Studies & Architectures</h2>
            <p className="text-zinc-500 text-xs md:text-sm font-mono mt-2">
              Deep-dive metrics, constraint tradeoffs, and interactive system flow explanations.
            </p>
          </div>

          {/* Toggle Tab selector */}
          <div className="flex gap-2">
            {projectsManifest.caseStudies.map((study, idx) => (
              <button
                key={study.id}
                onClick={() => {
                  setActiveStudyIdx(idx)
                  setSelectedNodeId(null)
                }}
                className={`px-4 py-2 border rounded-lg text-xs font-mono transition-all ${
                  activeStudyIdx === idx
                    ? 'border-red-500 bg-red-500/10 text-red-400 font-semibold'
                    : 'border-zinc-900 bg-zinc-900/40 text-zinc-500 hover:text-white'
                }`}
              >
                {study.projectTitle}
              </button>
            ))}
          </div>
        </div>

        {/* Case Study Grid */}
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Main Case Study Text & Timeline */}
          <div className="lg:col-span-2 space-y-8 font-sans">
            
            {/* Metrics Ribbon */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {activeStudy.metrics.map((m) => (
                <div key={m.label} className="bg-black/60 border border-zinc-900 rounded-lg p-3 text-center">
                  <span className="text-xxs text-zinc-500 block uppercase font-mono tracking-wider">{m.label}</span>
                  <span className="text-sm font-bold text-white mt-1 block font-mono">{m.value}</span>
                </div>
              ))}
            </div>

            {/* Factual problem structure */}
            <div className="space-y-6">
              <div className="bg-zinc-900/10 p-5 rounded-lg border border-zinc-900">
                <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-2">The Problem</h4>
                <p className="text-sm text-zinc-300 leading-relaxed font-sans">{activeStudy.problem}</p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-zinc-900/10 p-5 rounded-lg border border-zinc-900">
                  <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-2">Constraints</h4>
                  <p className="text-xs text-zinc-400 leading-relaxed font-sans">{activeStudy.constraints}</p>
                </div>
                <div className="bg-zinc-900/10 p-5 rounded-lg border border-zinc-900">
                  <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-2">Architectural Tradeoffs</h4>
                  <p className="text-xs text-zinc-400 leading-relaxed font-sans">{activeStudy.tradeoffs}</p>
                </div>
              </div>

              <div className="bg-zinc-900/10 p-5 rounded-lg border border-zinc-900">
                <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-2">Implementation Summary</h4>
                <p className="text-sm text-zinc-300 leading-relaxed font-sans">{activeStudy.implementation}</p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-zinc-900/10 p-5 rounded-lg border border-zinc-900">
                  <h4 className="text-xs font-mono text-green-500 uppercase tracking-widest mb-2">Technical Results</h4>
                  <p className="text-xs text-zinc-400 leading-relaxed font-sans">{activeStudy.results}</p>
                </div>
                <div className="bg-red-950/5 p-5 rounded-lg border border-red-950/20">
                  <h4 className="text-xs font-mono text-red-400 uppercase tracking-widest mb-2">Business Outcomes & Impact</h4>
                  <p className="text-xs text-red-200/80 leading-relaxed font-sans">{activeStudy.businessImpact}</p>
                </div>
              </div>
            </div>

            {/* Chronological Timeline */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Project Build Timeline:</h4>
              <div className="flex flex-wrap gap-2 select-none font-mono">
                {activeStudy.timeline.map((item) => (
                  <div key={item.label} className="bg-zinc-900/50 border border-zinc-900 p-2.5 rounded text-center min-w-[90px]">
                    <span className="text-zinc-500 block text-xxs">{item.label}</span>
                    <span className="text-white font-bold text-xs">{item.days} days</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Interactive Flow Diagram Explorer */}
          <div className="flex flex-col gap-6">
            
            {/* SVG Outline Nodes Box */}
            <div className="bg-black border border-zinc-900 rounded-xl p-5 flex flex-col justify-between min-h-[380px]">
              
              <div className="space-y-4">
                <span className="text-xxs text-zinc-500 font-mono uppercase tracking-widest block border-b border-zinc-900 pb-2">
                  System Architecture Nodes
                </span>

                <div className="flex flex-col gap-3 font-mono text-xs">
                  {activeStudy.architectureNodes.map((node) => (
                    <button
                      key={node.id}
                      onClick={() => selectNode(node.id)}
                      className={`w-full flex items-center justify-between p-3 border rounded-lg text-left transition-all ${
                        selectedNodeId === node.id 
                          ? 'border-red-500 bg-red-500/5 text-red-400' 
                          : 'border-zinc-850 hover:border-zinc-700 bg-zinc-900/20 text-zinc-300'
                      }`}
                    >
                      <div>
                        <div className="font-bold text-xs">{node.label}</div>
                        <div className="text-[10px] text-zinc-500">{node.role}</div>
                      </div>
                      <span className="text-[10px] px-1.5 py-0.5 bg-zinc-950 border border-zinc-800 rounded text-zinc-500">
                        {node.id.toUpperCase()}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="text-xxs text-zinc-600 font-mono pt-4 border-t border-zinc-900">
                Tip: Click system nodes to view specific layers responsibilities.
              </div>
            </div>

            {/* Node Info Sidebar */}
            <div className="bg-zinc-950 border border-zinc-855 rounded-xl p-5 min-h-[220px]">
              {selectedNodeId ? (
                (() => {
                  const nodeData = activeStudy.architectureNodes.find((n) => n.id === selectedNodeId)
                  if (!nodeData) return null
                  return (
                    <div className="space-y-4 font-mono text-xs md:text-sm animate-in fade-in slide-in-from-bottom-2 duration-200 text-green-500">
                      <div className="flex items-center gap-2 border-b border-zinc-900 pb-2">
                        <Terminal className="w-4 h-4 text-red-500" />
                        <span className="font-bold text-white">{nodeData.label} ({nodeData.role})</span>
                      </div>
                      
                      <p className="text-zinc-400 text-xs leading-relaxed bg-black/50 p-3 rounded border border-zinc-900">
                        {nodeData.description}
                      </p>

                      {/* Mocked backend details */}
                      <div className="space-y-1.5 text-xxs text-zinc-500">
                        <div className="flex justify-between">
                          <span>Auth Status:</span>
                          <span className="text-green-500 font-semibold">JWT Verified</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Caching Path:</span>
                          <span className="text-zinc-300">Redis LRU Eviction</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Rate Limits:</span>
                          <span className="text-zinc-300">Token Bucket (60 req/min)</span>
                        </div>
                      </div>
                    </div>
                  )
                })()
              ) : (
                <div className="text-center py-12 text-zinc-650 font-mono text-xs space-y-2">
                  <Database className="w-6 h-6 mx-auto text-zinc-700 animate-pulse" />
                  <p>Click architecture node to load specific middleware logs.</p>
                </div>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
