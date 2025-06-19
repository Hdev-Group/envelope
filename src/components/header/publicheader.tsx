"use client"

import { useState } from "react"
import { Button } from "@/components/button/button"
import { ThemeSelector } from "@/components/themeselector/themeselect"
import { Banner } from "./banner"
import {
  Menu,
  X,
  User,
  Settings,
  LogOut,
  Mail,
  Search,
  Bell,
  ChevronDown,
  Home,
  Users,
  FileText,
  HelpCircle,
  Zap,
} from "lucide-react"
import Image from "next/image"

interface HeaderProps {
  showBanner?: boolean
  bannerVariant?: "announcement" | "promotion" | "update" | "warning"
  isLoggedIn?: boolean
}

export default function Header({ showBanner = true, bannerVariant = "announcement", isLoggedIn = false }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [showUserMenu, setShowUserMenu] = useState(false)
  const [bannerVisible, setBannerVisible] = useState(showBanner)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const navigation = [
    { name: "Home", href: "#", icon: Home },
    { name: "Features", href: "#", icon: Zap },
    { name: "About", href: "#", icon: Users },
    { name: "Blog", href: "#", icon: FileText },
    { name: "Help", href: "#", icon: HelpCircle },
  ]

  return (
    <div className="w-full sticky top-0 z-50">

      <header className="w-full bg-background/80 backdrop-blur-3xl shadow-md border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-4">
                <div className="rounded-lg flex items-center justify-center">
                  <Image src="/logo/main.png" alt="Envelope Logo" width={32} height={32} className="w-auto visible md:hidden h-8" />
                </div>
                <Image src="/logo/wordmarks/light.png" alt="Envelope Wordmark" width={180} height={48} className="hidden md:block" />
                </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center justify-center space-x-1">
              {navigation.map((item) => {
                const Icon = item.icon
                return (
                  <Button key={item.name} variant="header-nav">
                    <Icon className="w-4 h-4 mr-2" />
                    {item.name}
                  </Button>
                )
              })}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-3">
              {/* Theme Selector */}
              <div className="hidden sm:block">
                <ThemeSelector />
              </div>

              {isLoggedIn ? (
                <>
                  {/* Notifications */}
                  <Button variant="ghost" size="icon" className="relative">
                    <Bell className="w-5 h-5" />
                    <span className="absolute -top-1 -right-1 w-3 h-3 bg-destructive rounded-full text-xs flex items-center justify-center text-destructive-foreground">
                      3
                    </span>
                  </Button>

                  {/* User Menu */}
                  <div className="relative">
                    <Button variant="header-user" size="sm" onClick={() => setShowUserMenu(!showUserMenu)}>
                      <User className="w-4 h-4 mr-2" />
                      <span className="hidden sm:inline">John Doe</span>
                      <ChevronDown className="w-3 h-3 ml-1" />
                    </Button>

                    {/* User Dropdown */}
                    {showUserMenu && (
                      <div className="absolute right-0 mt-2 w-48 bg-popover rounded-lg shadow-lg border border-border py-1 z-50">
                        <Button
                          variant="ghost"
                          className="w-full justify-start px-4 py-2 text-popover-foreground hover:bg-accent hover:text-accent-foreground"
                        >
                          <User className="w-4 h-4 mr-3" />
                          Profile
                        </Button>
                        <Button
                          variant="ghost"
                          className="w-full justify-start px-4 py-2 text-popover-foreground hover:bg-accent hover:text-accent-foreground"
                        >
                          <Settings className="w-4 h-4 mr-3" />
                          Settings
                        </Button>
                        <hr className="my-1 border-border" />
                        <Button
                          variant="ghost"
                          className="w-full justify-start px-4 py-2 text-destructive hover:bg-destructive/10 hover:text-destructive"
                        >
                          <LogOut className="w-4 h-4 mr-3" />
                          Sign out
                        </Button>
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <>
                  {/* Auth Buttons */}
                  <Button variant="ghost" size="sm">
                    Sign in
                  </Button>
                  <Button variant="cta-primary" size="sm">
                    Get Started
                  </Button>
                </>
              )}

              {/* Mobile Menu Button */}
              <Button variant="header-mobile" size="icon" onClick={toggleMobileMenu} className="lg:hidden">
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="lg:hidden border-t border-border py-4">
              <div className="flex flex-col space-y-2">
                {navigation.map((item) => {
                  const Icon = item.icon
                  return (
                    <Button key={item.name} variant="ghost" className="justify-start">
                      <Icon className="w-4 h-4 mr-3" />
                      {item.name}
                    </Button>
                  )
                })}


                {/* Mobile Theme Selector */}
                <div className="pt-2 sm:hidden">
                  <div className="px-3 py-2">
                    <span className="text-sm font-medium text-muted-foreground mb-2 block">Theme</span>
                    <ThemeSelector />
                  </div>
                </div>

                {!isLoggedIn && (
                  <div className="pt-4 border-t border-border space-y-2">
                    <Button variant="ghost" className="w-full justify-start">
                      Sign in
                    </Button>
                    <Button variant="cta-primary" className="w-full">
                      Get Started
                    </Button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  )
}
