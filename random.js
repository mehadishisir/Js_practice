// Random Quote Generator 🎲

const quotes = [
  "Code is like humor. When you have to explain it, it’s bad.",
  "Fix the cause, not the symptom.",
  "First, solve the problem. Then, write the code.",
  "Experience is the name everyone gives to their mistakes.",
  "JavaScript is weird… but fun 😄"
];

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

console.log("💡 Random Quote:");
console.log(getRandomQuote());