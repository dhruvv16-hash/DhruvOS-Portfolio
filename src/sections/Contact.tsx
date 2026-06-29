import React, { useState } from 'react'
import { Mail, Phone, MapPin, Send, Github, Linkedin, CheckCircle } from 'lucide-react'
import { toast } from 'sonner'

interface ContactProps {
  onFormSubmitted: () => void
}

export function Contact({ onFormSubmitted }: ContactProps) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [step, setStep] = useState(1) // 1: Name, 2: Email, 3: Message, 4: Ready

  const nameSuggestion = "Technical Recruiter"
  const emailSuggestion = "hiring@company.com"
  
  const getNameHint = () => {
    if (!formData.name) return ''
    if (nameSuggestion.toLowerCase().startsWith(formData.name.toLowerCase())) {
      return nameSuggestion.slice(formData.name.length)
    }
    return ''
  }

  const getEmailHint = () => {
    if (!formData.email) return ''
    if (emailSuggestion.toLowerCase().startsWith(formData.email.toLowerCase())) {
      return emailSuggestion.slice(formData.email.length)
    }
    return ''
  }

  const handleNameKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Tab' || e.key === 'ArrowRight') {
      const hint = getNameHint()
      if (hint) {
        e.preventDefault()
        setFormData(prev => ({ ...prev, name: prev.name + hint }))
        setStep(2)
      }
    }
  }

  const handleEmailKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Tab' || e.key === 'ArrowRight') {
      const hint = getEmailHint()
      if (hint) {
        e.preventDefault()
        setFormData(prev => ({ ...prev, email: prev.email + hint }))
        setStep(3)
      }
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate pipeline encryption transmission
    await new Promise((resolve) => setTimeout(resolve, 1200))
    
    setIsSubmitting(false)
    setFormData({ name: '', email: '', message: '' })
    setStep(1)
    toast.success('Secure briefing dispatched successfully!')
    onFormSubmitted() // Telemetry trigger
  }

  const contactInfo = [
    { icon: Mail, label: 'Email Address', value: 'dhruvvira17@gmail.com', href: 'mailto:dhruvvira17@gmail.com' },
    { icon: Phone, label: 'Phone Coordinates', value: '+91 9303000832', href: 'tel:+919303000832' },
    { icon: MapPin, label: 'Physical Registry', value: 'Madhya Pradesh, India', href: '#' },
  ]

  const socialLinks = [
    { icon: Github, href: 'https://github.com/dhruvv16-hash', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/dhruv-mayur-vira-5428b031b', label: 'LinkedIn' },
  ]

  return (
    <section id="connect" className="py-24 bg-black relative overflow-hidden border-t border-zinc-900 grid-bg">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-500/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-red-500 text-xs font-mono uppercase tracking-widest block mb-2">Connect Terminal</span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">Let's Build Something</h2>
          <p className="text-zinc-500 text-xs md:text-sm font-mono mt-2">
            Dispatch a secure encrypted briefing to initiate project collaborations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* CLI Connect Terminal */}
          <div className="bg-black border border-zinc-800 rounded-xl overflow-hidden shadow-2xl flex flex-col min-h-[380px]">
            <div className="flex items-center justify-between px-4 py-2.5 bg-zinc-900 border-b border-zinc-850 select-none">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                <span className="text-zinc-400 font-mono text-xxs ml-2">
                  guest@dhruvos:~$ ./send_brief.sh
                </span>
              </div>
              <span className="text-[9px] text-zinc-600 font-mono">SECURE_SSL</span>
            </div>

            <form onSubmit={handleSubmit} className="flex-1 p-5 font-mono text-xs md:text-sm space-y-4 text-green-400">
              
              {/* Step 1: Name */}
              <div className="space-y-1">
                <div><span className="text-zinc-600">&gt;&gt;</span> Enter client/recruiter name:</div>
                <div className="flex items-center gap-2">
                  <span className="text-zinc-500">&gt;</span>
                  <div className="relative flex-1">
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onKeyDown={handleNameKeyDown}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value })
                        if (step === 1 && e.target.value.length > 2) setStep(2)
                      }}
                      placeholder="Your Name"
                      className="w-full bg-transparent text-white border-b border-zinc-900 focus:border-green-500/50 outline-none pb-0.5"
                    />
                    {getNameHint() && (
                      <span className="absolute left-0 bottom-0.5 text-zinc-600 pointer-events-none whitespace-pre">
                        {formData.name.replace(/ /g, '\u00a0')}
                        <span className="opacity-40">{getNameHint()} [Tab]</span>
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Step 2: Email */}
              {step >= 2 && (
                <div className="space-y-1 animate-in fade-in slide-in-from-left-2 duration-300">
                  <div><span className="text-zinc-600">&gt;&gt;</span> Enter return email coordinates:</div>
                  <div className="flex items-center gap-2">
                    <span className="text-zinc-500">&gt;</span>
                    <div className="relative flex-1">
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onKeyDown={handleEmailKeyDown}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value })
                          if (step === 2 && e.target.value.includes('@')) setStep(3)
                        }}
                        placeholder="your@email.com"
                        className="w-full bg-transparent text-white border-b border-zinc-900 focus:border-green-500/50 outline-none pb-0.5"
                      />
                      {getEmailHint() && (
                        <span className="absolute left-0 bottom-0.5 text-zinc-600 pointer-events-none whitespace-pre">
                          {formData.email.replace(/ /g, '\u00a0')}
                          <span className="opacity-40">{getEmailHint()} [Tab]</span>
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Message */}
              {step >= 3 && (
                <div className="space-y-1 animate-in fade-in slide-in-from-left-2 duration-300">
                  <div><span className="text-zinc-600">&gt;&gt;</span> Input project brief payload:</div>
                  <div className="flex items-start gap-2">
                    <span className="text-zinc-500 pt-1">&gt;</span>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value })
                        if (step === 3 && e.target.value.length > 5) setStep(4)
                      }}
                      placeholder="What are we building?..."
                      className="flex-1 bg-zinc-950/60 border border-zinc-900 focus:border-green-500/50 outline-none rounded p-2 text-white resize-none"
                    />
                  </div>
                </div>
              )}

              {/* Step 4: Submission Ready */}
              {step >= 4 && (
                <div className="pt-4 animate-in fade-in duration-300">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-2.5 bg-green-600 hover:bg-green-700 text-white rounded font-bold transition-all flex items-center justify-center gap-2 select-none border border-green-500/20"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-3 h-3 border border-white border-t-transparent rounded-full animate-spin" />
                        <span>Encrypting transmission...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Dispatch Briefing Packet</span>
                      </>
                    )}
                  </button>
                </div>
              )}

            </form>
          </div>

          {/* Socials & OS Status HUD */}
          <div className="space-y-8">
            <div className="space-y-6">
              {contactInfo.map((item) => (
                <a 
                  key={item.label} 
                  href={item.href} 
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:bg-red-500/10 group-hover:border-red-500/30 transition-all">
                    <item.icon className="w-5 h-5 text-zinc-500 group-hover:text-red-500 transition-colors" />
                  </div>
                  <div>
                    <div className="text-xs text-zinc-500 font-mono">{item.label}</div>
                    <div className="text-sm font-semibold text-white group-hover:text-red-500 transition-colors font-mono">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Follow grid */}
            <div>
              <div className="text-xs font-mono text-zinc-500 mb-4">Coordinates channels:</div>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-500 hover:text-red-500 hover:border-red-500/30 transition-all"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* System health dashboard check */}
            <div className="bg-zinc-900/30 border border-zinc-900 rounded-xl p-5 space-y-3 font-mono text-xs text-zinc-500">
              <div className="flex items-center gap-2 border-b border-zinc-900 pb-2 text-zinc-400 font-bold">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>SYSTEM HEALTH REPORT</span>
              </div>
              <ul className="space-y-1.5 text-xxs">
                <li className="flex justify-between">
                  <span>DhruvOS Shell:</span>
                  <span className="text-green-500 font-bold">Operational</span>
                </li>
                <li className="flex justify-between">
                  <span>System Modules:</span>
                  <span className="text-white">12 / 12 mounted</span>
                </li>
                <li className="flex justify-between">
                  <span>GitHub event streams:</span>
                  <span className="text-green-500 font-bold">Connected</span>
                </li>
                <li className="flex justify-between">
                  <span>AI assistant weights:</span>
                  <span className="text-white">Gemini-Core-Ready</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
export default Contact
