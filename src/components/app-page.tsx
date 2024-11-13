'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { tools } from "@/data/tools"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const ToolImage = ({ src, alt }: { src: string; alt: string }) => {
  const [error, setError] = useState(false)

  if (error) {
    return <div className="w-full h-48 bg-purple-900/10 flex items-center justify-center text-purple-200">{alt}</div>
  }

  return (
    <Image 
      src={src} 
      alt={alt}
      fill
      className="transition-transform duration-500 group-hover:scale-110"
      style={{ objectFit: "cover" }}
      onError={() => setError(true)}
    />
  )
}

export function Page() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <header className="backdrop-blur-md bg-white/70 border-b border-purple-100 sticky top-0 z-10 transition-all duration-300" 
        style={{ boxShadow: scrollY > 0 ? '0 4px 6px rgba(139, 92, 246, 0.1)' : 'none' }}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">AITools</span>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white transition-all duration-300">Log In</Button>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white transition-all duration-300">Sign Up</Button>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        <div className="container mx-auto px-4 py-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold mb-2 relative group">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-purple-600 to-yellow-500 
                hover:from-purple-600 hover:via-orange-400 hover:to-yellow-500 transition-all duration-500
                [text-shadow:_0_0_30px_rgba(139,92,246,0.3)]">
                AI Tools
              </span>
              <span className="relative ml-2 text-black">
                For You
                <span className="absolute bottom-1 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-yellow-500 
                  group-hover:from-purple-600 group-hover:to-orange-400 transition-all duration-500
                  [box-shadow:_0_0_15px_rgba(139,92,246,0.5)]"></span>
              </span>
            </h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xl mt-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-orange-400
                hover:from-orange-400 hover:to-purple-600 transition-all duration-500"
            >
              Empower your workflow with AI-driven solutions
            </motion.p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={tool.link} target="_blank" rel="noopener noreferrer">
                  <Card className="hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden group bg-white/80 backdrop-blur-sm border-purple-100">
                    <div className="w-full h-48 relative overflow-hidden">
                      <ToolImage src={tool.image} alt={tool.name} />
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl font-semibold flex items-center justify-between text-purple-600">
                        {tool.name}
                        <ArrowRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300 text-purple-600" />
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-purple-900/70">{tool.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <footer className="bg-purple-900/5 text-purple-600/80 py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 AITools. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}