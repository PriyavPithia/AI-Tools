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
    return <div className="w-full h-48 bg-muted flex items-center justify-center text-muted-foreground">{alt}</div>
  }

  return (
    <Image 
      src={src} 
      alt={alt}
      fill
      className="transition-transform duration-300 group-hover:scale-105"
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
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className="bg-card border-b border-border sticky top-0 z-10 transition-shadow duration-300" style={{ boxShadow: scrollY > 0 ? '0 2px 4px rgba(0,0,0,.2)' : 'none' }}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-primary">AITools</span>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" className="hover:bg-primary hover:text-primary-foreground transition-colors duration-300">Log In</Button>
            <Button className="bg-primary hover:bg-primary/80 text-primary-foreground transition-colors duration-300">Sign Up</Button>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        <div className="container mx-auto px-4 py-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold text-foreground mb-2">
              AI Tools <span className="relative">
                For You...
                <span className="absolute bottom-1 left-0 w-full h-1 bg-primary"></span>
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mt-4">Empower your workflow with AI-driven solutions</p>
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
                  <Card className="hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden group bg-card">
                    <div className="w-full h-48 relative overflow-hidden">
                      <ToolImage src={tool.image} alt={tool.name} />
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl font-semibold flex items-center justify-between" style={{ color: 'rgb(172 135 255)' }}>
                        {tool.name}
                        <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" style={{ color: 'rgb(172 135 255)' }} />
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{tool.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <footer className="bg-card text-muted-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 AITools. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
