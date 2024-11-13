export const tools = [
  { 
    name: "Text Clean Up", 
    description: "Enhance your writing", 
    image: "/images/tools/cleantext.png", 
    color: "bg-emerald-500", 
    link: "https://ai-text-humanizer.netlify.app" 
  },
 
  { 
    name: "Prompt Engineer", 
    description: "Craft perfect prompts", 
    image: "/images/tools/prompt.png", 
    color: "bg-sky-500", 
    link: "https://promptengineerapp.netlify.app" 
  }
];

export type Tool = typeof tools[number];
