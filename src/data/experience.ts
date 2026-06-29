export const experience = [
  {
    role: "Open Source Contributor",
    company: "omegaUp",
    period: "2026",
    tech: ["Vue 3", "TypeScript", "Jest", "Cypress", "PHP"],
    details: [
      "Diagnosed and fixed a stale-state bug in the Teams Group admin page by replacing an immutable server-rendered payload with reactive Vue 3 state (ref()), so saved values update instantly across dependent UI tabs instead of requiring a page refresh (PR merged, live in production).",
      "Shipped a debounced, Enter-key-aware search experience with loading and empty states and URL synchronization for the Problems list page; identified and resolved a race condition in concurrent API responses using a request-cancellation pattern (CI-passing, in review).",
      "Corrected a malformed table in the platform's public API documentation (Contests endpoint reference) to improve developer-facing accuracy (CI-passing, in review).",
      "Authored a Google Summer of Code (GSoC) 2026 proposal to extend the reactive-state fix across 4+ admin workflows and introduce a static-analysis (ESLint) guardrail against regressions, backed by a full Jest and Cypress testing plan."
    ]
  }
]

export const education = [
  {
    institution: "Vellore Institute of Technology, Chennai",
    degree: "B.Tech in Computer Science and Engineering",
    period: "2024 - 2028",
    details: [
      "Data Structures and Algorithms",
      "Object-Oriented Programming",
      "Computer Networks",
      "Business Analytics",
      "Theory of Computation",
      "Operating Systems",
      "Computer Organization and Architecture",
    ],
  },
]

export const certifications = [
  {
    name: "Microsoft Learn Student Ambassador",
    issuer: "Microsoft",
    description: "Actively applied Microsoft development tools and learning resources.",
  },
  {
    name: "Quantitative Research & Software Engineering Virtual Experience",
    issuer: "J.P. Morgan Chase & Co.",
    description: "Simulated real-world software engineering and financial data tasks.",
  },
  {
    name: "AI and Data Scientist",
    issuer: "One Roadmap",
    description: "Applied Python, NumPy, and Pandas for data analysis projects.",
  },
]
