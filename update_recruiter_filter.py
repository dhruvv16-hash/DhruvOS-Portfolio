import re

with open("src/App.tsx", "r", encoding="utf-8") as f:
    content = f.read()

target = "projectsManifest.projects.filter(p => !['openbb', 'supabase-os'].includes(p.id)).map(proj => ("
replacement = "projectsManifest.projects.filter(p => p.type === 'personal').map(proj => ("

if target in content:
    content = content.replace(target, replacement)
    with open("src/App.tsx", "w", encoding="utf-8") as f:
        f.write(content)
    print("Updated Recruiter Mode filtering")
else:
    print("Could not find filter string")
