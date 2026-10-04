with open("src/components/Navbar.tsx", "r", encoding="utf-8") as f:
    content = f.read()

target = "{ name: 'Workspace', href: '/workspace' },"
replacement = "{ name: 'Workspace', href: '/workspace' },\n  { name: 'Projects', href: '/projects' },"

if target in content:
    content = content.replace(target, replacement)
    with open("src/components/Navbar.tsx", "w", encoding="utf-8") as f:
        f.write(content)
    print("Navbar updated")
else:
    print("Navbar target not found")
