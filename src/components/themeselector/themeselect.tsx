"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { themes, applyTheme, getTheme } from "@/lib/themes"
import { Palette, Check, Sun, Moon } from "lucide-react"

export function ThemeSelector() {
  const [currentTheme, setCurrentTheme] = useState("ocean")
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem("ocean") || "ocean"
    setCurrentTheme(savedTheme)
    const theme = getTheme(savedTheme)
    if (theme) {
      applyTheme(theme)
    }
  }, [])

  const handleThemeChange = (themeName: string) => {
    const theme = getTheme(themeName)
    if (theme) {
      setCurrentTheme(themeName)
      applyTheme(theme)
      localStorage.setItem("theme", themeName)
      setIsOpen(false)
    }
  }

  const getThemeIcon = (themeName: string) => {
    switch (themeName) {
      case "light":
      case "cream":
        return <Sun className="w-4 h-4" />
      case "dark":
      case "monochrome":
        return <Moon className="w-4 h-4" />
      default:
        return <Palette className="w-4 h-4" />
    }
  }

  const currentThemeData = getTheme(currentTheme)

  // check if they have clicked on the outside of the theme selector
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (isOpen && !target.closest(".theme-selector")) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen])

  return (
    <div className="relative">
      <Button variant="outline" onClick={() => setIsOpen(!isOpen)} className="flex items-center space-x-2">
        {getThemeIcon(currentTheme)}
        <span>{currentThemeData?.displayName || "Theme"}</span>
      </Button>

      {isOpen && (
        <div className="absolute theme-selector top-full right-0 mt-2 w-80 bg-popover border border-border rounded-lg shadow-lg z-50">
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Palette className="w-5 h-5 mr-2" />
              Choose Theme
            </h3>

            <div className="grid grid-cols-2 gap-3">
              {themes.map((theme) => (
                <div
                  key={theme.name}
                  className={`cursor-pointer transition-all hover:shadow-md ${
                    currentTheme === theme.name ? "ring-2 ring-primary" : ""
                  }`}
                  onClick={() => handleThemeChange(theme.name)}
                >
                  <div className="p-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        {getThemeIcon(theme.name)}
                        <span className="text-sm">{theme.displayName}</span>
                      </div>
                      {currentTheme === theme.name && <Check className="w-4 h-4 text-primary" />}
                    </div>
                    <p className="text-xs">{theme.description}</p>
                  </div>
                  <div className="p-3 pt-0">
                    <div className="flex space-x-1 h-6">
                      <div className="flex-1 rounded" style={{ backgroundColor: theme.colors.background }}></div>
                      <div className="flex-1 rounded" style={{ backgroundColor: theme.colors.primary }}></div>
                      <div className="flex-1 rounded" style={{ backgroundColor: theme.colors.accent }}></div>
                      <div className="flex-1 rounded" style={{ backgroundColor: theme.colors.secondary }}></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
