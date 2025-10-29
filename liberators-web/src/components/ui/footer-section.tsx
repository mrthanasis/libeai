"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Linkedin, Moon, Send, Sun, Twitter } from "lucide-react"
import Image from "next/image"

function Footerdemo() {
  const [isDarkMode, setIsDarkMode] = React.useState(true)

  React.useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDarkMode])

  return (
    <footer className="relative border-t bg-background text-foreground transition-colors duration-300">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Newsletter Section */}
          <div className="relative">
            <div className="mb-4">
              <Image 
                src="/images/logo-dark.png" 
                alt="Liberators AI" 
                width={180} 
                height={50}
                className="h-10 w-auto"
              />
            </div>
            <p className="mb-6 text-sm text-muted-foreground">
              Building AI Workforces for Enterprise Teams
            </p>
            <form className="relative">
              <Input
                type="email"
                placeholder="you@company.com"
                className="pr-12 backdrop-blur-sm"
              />
              <Button
                type="submit"
                size="icon"
                className="absolute right-1 top-1 h-8 w-8 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 text-white transition-transform hover:scale-105"
              >
                <Send className="h-4 w-4" />
                <span className="sr-only">Subscribe</span>
              </Button>
            </form>
            <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-purple-500/10 blur-2xl" />
          </div>

          {/* Company Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Company</h3>
            <nav className="space-y-2 text-sm">
              <a href="#what-we-do" className="block transition-colors hover:text-purple-400">
                What We Do
              </a>
              <a href="#demo" className="block transition-colors hover:text-purple-400">
                How it Works
              </a>
              <a href="#team" className="block transition-colors hover:text-purple-400">
                About
              </a>
              <a href="#" className="block transition-colors hover:text-purple-400">
                Careers
              </a>
              <a href="#" className="block transition-colors hover:text-purple-400">
                Contact
              </a>
            </nav>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Services</h3>
            <nav className="space-y-2 text-sm">
              <a href="#cognitive-teams" className="block transition-colors hover:text-purple-400">
                Cognitive Teams
              </a>
              <a href="#our-services" className="block transition-colors hover:text-purple-400">
                AI Transformation
              </a>
              <a href="#transformations" className="block transition-colors hover:text-purple-400">
                Case Studies
              </a>
              <a href="#testimonials" className="block transition-colors hover:text-purple-400">
                Testimonials
              </a>
              <a href="#faq" className="block transition-colors hover:text-purple-400">
                FAQ
              </a>
            </nav>
          </div>

          {/* Connect Section */}
          <div className="relative">
            <h3 className="mb-4 text-lg font-semibold">Connect</h3>
            <div className="mb-6 flex space-x-3">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="rounded-full border-white/10 bg-white/5 hover:bg-white/10 hover:border-purple-400/50 transition-all"
                      asChild
                    >
                      <a href="https://twitter.com/liberatorsai" target="_blank" rel="noopener noreferrer">
                        <Twitter className="h-4 w-4" />
                        <span className="sr-only">Twitter</span>
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Twitter</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="rounded-full border-white/10 bg-white/5 hover:bg-white/10 hover:border-purple-400/50 transition-all"
                      asChild
                    >
                      <a href="https://www.linkedin.com/company/liberatorsai" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-4 w-4" />
                        <span className="sr-only">LinkedIn</span>
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Connect on LinkedIn</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>

            {/* Theme Toggle */}
            <div className="flex items-center space-x-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 w-fit">
              <Sun className="h-4 w-4 text-muted-foreground" />
              <Switch
                id="dark-mode"
                checked={isDarkMode}
                onCheckedChange={setIsDarkMode}
              />
              <Moon className="h-4 w-4 text-muted-foreground" />
              <Label htmlFor="dark-mode" className="sr-only">
                Toggle dark mode
              </Label>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Liberators AI. All rights reserved.
          </p>
          <nav className="flex gap-6 text-sm">
            <a href="#" className="transition-colors hover:text-purple-400">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-purple-400">
              Terms
            </a>
            <a href="#" className="transition-colors hover:text-purple-400">
              Security
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export { Footerdemo }

