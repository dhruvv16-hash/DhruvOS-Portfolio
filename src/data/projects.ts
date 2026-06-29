export const projects = [
  {
    id: 1,
    title: "Algorithmic Trading Strategy — ETH/USD",
    description: "Designed and backtested a multi-timeframe ETH/USD trading strategy combining UT Bot Alerts, Linear Regression, and ADX trend-strength filtering in Pine Script on TradingView. Built a live, interactive HTML dashboard powered by real-time Crypto.com market data to visualize entry/exit signals and strategy performance, iteratively tuning parameters for stronger risk-adjusted returns and controlled drawdown.",
    tech: ["Pine Script", "TradingView", "Python", "Crypto.com API", "HTML/JS"],
    features: ["Pine Script strategy indicator", "Crypto.com API market connection", "Linear regression and ADX filtering"],
    link: "https://github.com/dhruvv16-hash/DeltaBridge",
    fileName: "strategy.pine",
    codeSnippet: `//@version=5
strategy("ETH/USD Trend Following", overlay=true)
src = close
// UT Bot Signals & ADX trend filtering
keyValue = input.float(3.0, "Key Value")
atrPeriod = input.int(10, "ATR Period")
xATR = ta.atr(atrPeriod)
nLoss = keyValue * xATR
lr = ta.linreg(src, 14, 0)
[diplus, diminus, adx] = ta.dmi(14, 14)
buySignal = ta.crossover(src, lr) and adx > 25
if (buySignal)
    strategy.entry("Long Entry", strategy.long)`,
  },
  {
    id: 2,
    title: "AI Email Writer — Chrome Extension",
    description: "Built a Chrome Extension that injects an AI-powered \"AI Reply\" button into Gmail's UI using DOM mutation observers. Integrated with a Spring Boot REST API and Google Gemini AI to generate contextual, tone-aware email replies in real time.",
    tech: ["JavaScript", "Spring Boot", "Gemini AI API", "Chrome Extension API"],
    features: ["Gmail UI integration", "Spring Boot API gateway", "Gemini AI reply generation"],
    link: "https://github.com/dhruvv16-hash/EMAIL_WRITER-AI",
    fileName: "content.js",
    codeSnippet: `// Chrome Extension Content Script
const observer = new MutationObserver((mutations) => {
  const replyBoxes = document.querySelectorAll('.Am.Al.editable');
  replyBoxes.forEach((box) => {
    if (!box.parentNode.querySelector('.ai-reply-btn')) {
      const btn = document.createElement('button');
      btn.className = 'ai-reply-btn px-3 py-1 bg-red-600 text-white rounded-md';
      btn.innerText = 'AI Reply';
      btn.onclick = () => generateReply(box);
      box.parentNode.appendChild(btn);
    }
  });
});
observer.observe(document.body, { childList: true, subtree: true });`,
  },
  {
    id: 3,
    title: "Movie Recommendation System",
    description: "Built a content-based movie recommendation system using TF-IDF vectorization and cosine similarity to suggest similar movies. Processed and analyzed movie metadata to generate top-5 personalized recommendations based on text similarity. Deployed the model as an interactive Streamlit web app, enabling real-time user input and recommendations.",
    tech: ["Python", "ML", "Streamlit", "TF-IDF"],
    features: ["TF-IDF vectorization", "Cosine similarity matching", "Streamlit deployment"],
    link: "https://github.com/dhruvv16-hash/Movie-Recommondation",
    fileName: "recommender.py",
    codeSnippet: `def recommend_movies(title, cosine_sim, df):
    idx = indices[title]
    sim_scores = list(enumerate(cosine_sim[idx]))
    sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)
    sim_scores = sim_scores[1:6]
    movie_indices = [i[0] for i in sim_scores]
    return df['title'].iloc[movie_indices]`,
  },
  {
    id: 4,
    title: "Library Management System",
    description: "Designed and implemented an object-oriented library management system to handle book inventory, issue, and return workflows. Applied file handling to persist data, reducing manual record lookup time by ~60% during simulations. Structured the system using modular classes, improving code maintainability and scalability.",
    tech: ["C++", "OOPS", "File Handling"],
    features: ["Modular class design", "File-based storage", "Issue/return workflows"],
    link: "https://github.com/dhruvv16-hash",
    fileName: "library.cpp",
    codeSnippet: `class Library {
  private:
    vector<Book> books;
    vector<Member> members;
  public:
    void addBook(Book b);
    void issueBook(int bookId, int memberId);
    void returnBook(int bookId);
};`,
  },
  {
    id: 5,
    title: "Password Strength Checker",
    description: "Built a password evaluation tool using regex, entropy calculation, and rule-based validation to identify weak credentials. Improved weak-password detection accuracy by ~40% across test cases by combining multiple validation rules. Provided real-time feedback to users, increasing password compliance and security awareness.",
    tech: ["Python", "Regex", "Security"],
    features: ["Entropy calculation", "Real-time feedback", "Rule-based validation"],
    link: "https://github.com/dhruvv16-hash",
    fileName: "checker.py",
    codeSnippet: `def check_strength(password):
    entropy = calculate_entropy(password)
    has_upper = bool(re.search(r'[A-Z]', password))
    has_lower = bool(re.search(r'[a-z]', password))
    has_digit = bool(re.search(r'\\d', password))
    has_special = bool(re.search(r'[!@#$%^&*]', password))
    return calculate_score(entropy, [has_upper, has_lower, has_digit, has_special])`,
  },
]
