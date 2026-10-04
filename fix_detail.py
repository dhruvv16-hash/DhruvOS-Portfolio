import re

with open("src/sections/ProjectDetail.tsx", "r", encoding="utf-8") as f:
    content = f.read()

content = content.replace("import { ArrowLeft, ArrowRight, Github, ExternalLink, Activity, Target, Shield, Zap, Box, Server, Database } from 'lucide-react'", "import { ArrowLeft, ArrowRight, Github, ExternalLink, Zap, Box, Server } from 'lucide-react'")
content = content.replace("import { motion } from 'framer-motion'\n", "")

with open("src/sections/ProjectDetail.tsx", "w", encoding="utf-8") as f:
    f.write(content)
