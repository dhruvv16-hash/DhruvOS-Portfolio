import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface VideoIntroProps {
  onComplete: () => void
}

export function VideoIntro({ onComplete }: VideoIntroProps) {
  const [showVideo, setShowVideo] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Auto-play video
    if (videoRef.current) {
      videoRef.current.play()
    }

    // Hide video after 3.5 seconds and trigger completion
    const timer = setTimeout(() => {
      setShowVideo(false)
      setTimeout(onComplete, 500) // Wait for fade-out animation
    }, 3500)

    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <AnimatePresence>
      {showVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9998] bg-black flex items-center justify-center"
        >
          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/P_video.mp4" type="video/mp4" />
          </video>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
