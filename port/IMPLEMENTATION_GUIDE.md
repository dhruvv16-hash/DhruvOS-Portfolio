# Video Integration Guide for Dhruv Vira Portfolio

This guide explains how to integrate your animated video into your portfolio. Three options are provided, each with different visual impact and placement.

## Setup (Required for all options)

1. **Copy your video file** to the `public` folder:
   ```bash
   cp your-video.mp4 public/profile-video.mp4
   ```

## Option 1: Video Background in Hero Section
**Best for:** Maximum visual impact, modern aesthetic
**Impression:** Bold, cinematic, immediately engaging

### Implementation:
Replace the existing `src/sections/Hero.tsx` with `Hero-VideoBackground.tsx`:

```bash
cp src/sections/Hero-VideoBackground.tsx src/sections/Hero.tsx
```

### Features:
- Video plays as subtle background (30% opacity)
- Dark overlay ensures text remains readable
- Animated gradient orbs still present
- Auto-plays, loops, and is muted
- Mobile-friendly with `playsInline`

---

## Option 2: Video Portrait in About Section
**Best for:** Professional presentation, clean design
**Impression:** Polished, focused, personal connection

### Implementation:
Replace the existing `src/sections/About.tsx` with `About-VideoPortrait.tsx`:

```bash
cp src/sections/About-VideoPortrait.tsx src/sections/About.tsx
```

### Features:
- Video replaces the code block in About section
- Animated gradient border glow effect
- Floating name tag below video
- Smooth fade-in animation on scroll
- Creates strong visual hierarchy

---

## Option 3: Dedicated Video Introduction Section
**Best for:** Balanced approach, flexibility
**Impression:** Professional yet engaging, storytelling

### Implementation:
1. Copy the new section file (already created as `VideoIntro.tsx`)
2. Update `src/App.tsx` to include the new section:

```tsx
import { Navbar } from './components/Navbar'
import { Hero } from './sections/Hero'
import { VideoIntro } from './sections/VideoIntro'  // ADD THIS
import { About } from './sections/About'
import { Skills } from './sections/Skills'
import { Projects } from './sections/Projects'
import { Experience } from './sections/Experience'
import { Resume } from './sections/Resume'
import { Contact } from './sections/Contact'
import { Footer } from './sections/Footer'

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <VideoIntro />  {/* ADD THIS */}
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
```

### Features:
- Standalone section between Hero and About
- Play/pause control button
- Animated corner accents
- Floating info card with availability status
- Section header with gradient text
- Can be easily repositioned or removed

---

## Recommendations

### 🏆 Best Choice: Option 2 (Video Portrait in About)
**Why:** 
- Provides perfect balance of professionalism and visual interest
- Doesn't compete with hero section text
- Creates immediate personal connection
- Most memorable for recruiters/visitors
- Cleanest mobile experience

### 🎬 Most Dramatic: Option 1 (Video Background)
**Why:**
- Immediately grabs attention
- Modern, cutting-edge feel
- Works great for creative/tech portfolios
- May be too bold for conservative companies

### 🎯 Most Flexible: Option 3 (Dedicated Section)
**Why:**
- Easy to add/remove
- Doesn't alter existing sections
- Great for A/B testing
- Can be repositioned anywhere

---

## Performance Optimization Tips

1. **Compress your video** for web:
   ```bash
   # Using ffmpeg (recommended)
   ffmpeg -i input.mp4 -c:v libx264 -crf 28 -preset slow -c:a aac -b:a 128k profile-video.mp4
   ```

2. **Keep video file under 5MB** for best performance

3. **Consider providing multiple formats**:
   ```html
   <video>
     <source src="/profile-video.webm" type="video/webm">
     <source src="/profile-video.mp4" type="video/mp4">
   </video>
   ```

4. **Add loading lazy attribute** for better initial page load (if using Option 2 or 3):
   ```tsx
   <video loading="lazy" ... >
   ```

---

## Testing Checklist

- [ ] Video plays automatically on desktop
- [ ] Video plays on mobile (iOS/Android)
- [ ] Video loops smoothly
- [ ] Page loads quickly (check Network tab)
- [ ] Text remains readable (for Option 1)
- [ ] Animations work smoothly with video
- [ ] Works in all major browsers (Chrome, Firefox, Safari, Edge)

---

## Troubleshooting

### Video doesn't autoplay on mobile:
- Ensure `muted` and `playsInline` attributes are present
- iOS requires both for autoplay to work

### Video file too large:
- Use the ffmpeg compression command above
- Consider reducing video resolution to 720p
- Reduce video length if possible

### Video doesn't loop smoothly:
- Ensure last frame matches first frame
- Use video editing software to create seamless loop

---

## My Recommendation

Go with **Option 2 (Video Portrait in About Section)**. Here's why:

1. ✅ Professional yet modern
2. ✅ Doesn't distract from your name in Hero
3. ✅ Creates memorable first impression when users scroll
4. ✅ Perfect placement for "getting to know you"
5. ✅ Best mobile experience
6. ✅ Easily shareable (recruiters often screenshot About sections)

The animated gradient glow effect makes your video stand out without being overwhelming, and the floating name tag adds a nice professional touch.
