import re

# 1. Update ProjectsLanding.tsx
with open("src/sections/ProjectsLanding.tsx", "r", encoding="utf-8") as f:
    landing = f.read()

fallback_target = """<div className="w-full h-full bg-zinc-900 flex items-center justify-center text-zinc-700 font-mono text-sm">
                    No visual output available
                  </div>"""

fallback_replacement = """<div className="w-full h-full bg-zinc-950 flex flex-col items-center justify-center font-mono text-center p-6 space-y-4 border-b border-zinc-900">
                    <div className="text-white font-bold text-xl tracking-widest">{project.title}</div>
                    <div className="text-red-500 text-xs font-bold tracking-widest uppercase">TradingView Strategy Scanner</div>
                    <div className="flex gap-4 text-xs text-zinc-500">
                      <span className="flex flex-col items-center"><span className="text-zinc-300">Browser</span> Automation</span>
                      <span className="flex flex-col items-center"><span className="text-zinc-300">Strategy</span> Extraction</span>
                      <span className="flex flex-col items-center"><span className="text-zinc-300">Multi</span> Timeframe</span>
                    </div>
                  </div>"""

if fallback_target in landing:
    landing = landing.replace(fallback_target, fallback_replacement)
    with open("src/sections/ProjectsLanding.tsx", "w", encoding="utf-8") as f:
        f.write(landing)
    print("Updated ProjectsLanding.tsx fallback")
else:
    print("Could not find fallback target in ProjectsLanding")

# 2. Update ProjectDetail.tsx
with open("src/sections/ProjectDetail.tsx", "r", encoding="utf-8") as f:
    detail = f.read()

# In ProjectDetail, it only renders the hero if heroImage or thumbnail exists.
# We need to render the fallback if neither exists.
hero_target = """        {/* Hero Image */}
        {(project.heroImage || project.thumbnail) && (
          <div className="w-full aspect-video md:aspect-[21/9] rounded-xl overflow-hidden border border-zinc-800 bg-zinc-950 mb-20 shadow-2xl shadow-black/50">
            <img 
              src={project.heroImage || project.thumbnail} 
              alt={`${project.title} Hero`} 
              className="w-full h-full object-cover object-top"
            />
          </div>
        )}"""

hero_replacement = """        {/* Hero Image / Fallback */}
        <div className="w-full aspect-video md:aspect-[21/9] rounded-xl overflow-hidden border border-zinc-800 bg-zinc-950 mb-20 shadow-2xl shadow-black/50">
          {(project.heroImage || project.thumbnail) ? (
            <img 
              src={project.heroImage || project.thumbnail} 
              alt={`${project.title} Hero`} 
              className="w-full h-full object-cover object-top"
            />
          ) : (
            <div className="w-full h-full bg-zinc-950 flex flex-col items-center justify-center font-mono text-center p-8 space-y-6">
              <div className="text-white font-bold text-3xl md:text-5xl tracking-widest">{project.title}</div>
              <div className="text-red-500 text-sm md:text-base font-bold tracking-widest uppercase">TradingView Strategy Scanner</div>
              <div className="flex flex-wrap justify-center gap-8 text-xs md:text-sm text-zinc-500 mt-4">
                <span className="flex flex-col items-center gap-1"><span className="text-zinc-300 font-bold">Browser</span> Automation</span>
                <span className="flex flex-col items-center gap-1"><span className="text-zinc-300 font-bold">Strategy</span> Extraction</span>
                <span className="flex flex-col items-center gap-1"><span className="text-zinc-300 font-bold">Multi</span> Timeframe</span>
                <span className="flex flex-col items-center gap-1"><span className="text-zinc-300 font-bold">NSE</span> Universe</span>
              </div>
            </div>
          )}
        </div>"""

if hero_target in detail:
    detail = detail.replace(hero_target, hero_replacement)
    with open("src/sections/ProjectDetail.tsx", "w", encoding="utf-8") as f:
        f.write(detail)
    print("Updated ProjectDetail.tsx fallback")
else:
    print("Could not find hero target in ProjectDetail")

