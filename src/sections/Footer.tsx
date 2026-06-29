import { Github, Linkedin, Twitter, Heart } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()
  const quickLinks = [
    { name: 'About', href: '#desk' },
    { name: 'Skills', href: '#specs' },
    { name: 'Projects', href: '#sandbox' },
    { name: 'Contact', href: '#connect' },
  ]
  const socialLinks = [
    { icon: Github, href: 'https://github.com/dhruvv16-hash', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/dhruv-mayur-vira-5428b031b', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  ]

  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <a href="#" className="text-2xl font-bold text-white mb-4 block">DV</a>
            <p className="text-muted-foreground text-sm">Building the future, one line of code at a time.</p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-red-500 transition-colors">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-red-500 hover:border-red-500/30 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">© {currentYear} Dhruv Vira. All rights reserved.</p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">Made with <Heart className="w-4 h-4 text-red-500" /> using React & Tailwind</p>
        </div>
      </div>
    </footer>
  )
}
