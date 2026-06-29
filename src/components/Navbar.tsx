import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Github, Linkedin, Terminal } from 'lucide-react'

const navItems = [
  { name: 'Concierge', href: '#assistant' },
  { name: 'Workspace', href: '#desk' },
  { name: 'Sandbox Lab', href: '#sandbox' },
  { name: 'Build Logs', href: '#build-logs' },
  { name: 'Tech Specs', href: '#specs' },
  { name: 'Connect', href: '#connect' },
]

interface NavbarProps {
  onOpenPalette: () => void
}

export function Navbar({ onOpenPalette }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-zinc-955/95 backdrop-blur-md border-b border-zinc-800'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#" className="text-xl font-bold text-white font-mono tracking-wider hover:text-red-500 transition-colors">
              DHRUV_OS<span className="text-red-500">.</span>
            </a>
            
            {/* Nav links */}
            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-xs font-mono text-zinc-400 hover:text-white transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <button
                onClick={onOpenPalette}
                className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white flex items-center justify-center hover:border-zinc-700 transition-all"
                title="Search Command Palette (Ctrl+K)"
              >
                <Terminal className="w-4 h-4" />
              </button>

              <a 
                href="https://github.com/dhruvv16-hash" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="GitHub Profile" 
                className="text-zinc-400 hover:text-white transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a 
                href="https://www.linkedin.com/in/dhruv-mayur-vira-5428b031b" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LinkedIn Profile" 
                className="text-zinc-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="#connect" 
                className="px-3 py-1.5 text-xs font-mono text-black bg-white rounded-lg hover:bg-zinc-200 transition-colors"
              >
                Connect
              </a>
            </div>
            
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-white p-2">
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-zinc-950 md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-6">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-xl font-mono text-zinc-300 hover:text-red-500 transition-colors"
                >
                  {item.name}
                </motion.a>
              ))}

              <button
                onClick={() => {
                  setIsMobileMenuOpen(false)
                  onOpenPalette()
                }}
                className="px-6 py-2 bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs rounded-full font-mono flex items-center gap-2"
              >
                <Terminal className="w-4 h-4" /> Open Console Search
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
