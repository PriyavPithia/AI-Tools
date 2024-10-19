export const tools = [
  { 
    name: "Text Humanizer", 
    description: "Increase fluency", 
    image: "/images/tools/humanizer.png", 
    color: "bg-emerald-500", 
    link: "https://ai-texthumanizer.netlify.app" 
},
  
  
  
  { name: "Agentic Chatbot", description: "Fix mistakes", image: "/images/tools/grammar-checker.jpg", color: "bg-red-500", link: "https://agenticchatbot.netlify.app" },
  { name: "Plagiarism Checker", description: "Prevent plagiarism", image: "/images/tools/plagiarism-checker.jpg", color: "bg-orange-500", link: "/plagiarism-checker" },
  { name: "AI Detector", description: "Analyze text", image: "/images/tools/ai-detector.jpg", color: "bg-amber-500", link: "/ai-detector" },
  { name: "Summarizer", description: "Summarize text", image: "/images/tools/summarizer.jpg", color: "bg-purple-500", link: "/summarizer" },
  { name: "Citation Generator", description: "Cite sources", image: "/images/tools/citation-generator.jpg", color: "bg-blue-500", link: "/citation-generator" },
  { name: "Translator", description: "Unlock languages", image: "/images/tools/translator.jpg", color: "bg-indigo-900", link: "/translator" },
  { name: "Flow", description: "Write with AI", image: "/images/tools/flow.jpg", color: "bg-sky-500", link: "/flow" }
];

export type Tool = typeof tools[number];
