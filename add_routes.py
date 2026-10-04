import re

with open("src/App.tsx", "r", encoding="utf-8") as f:
    content = f.read()

replacement = """<Routes>
                <Route path="/projects" element={
                  <Suspense fallback={<div className="py-12 bg-black text-center text-xs text-zinc-650">Loading...</div>}>
                    <ProjectsLanding />
                  </Suspense>
                } />
                <Route path="/projects/:slug" element={
                  <Suspense fallback={<div className="py-12 bg-black text-center text-xs text-zinc-650">Loading...</div>}>
                    <ProjectDetail />
                  </Suspense>
                } />
                <Route path="/" element={"""

content = re.sub(r'<Routes>\s*<Route path="/" element=\{', replacement, content)

with open("src/App.tsx", "w", encoding="utf-8") as f:
    f.write(content)

print("Routes added successfully")
