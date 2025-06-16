"use client"

import { useState } from "react"
import { Button } from "@/components/button/button"
import { X, Sparkles, Gift, Zap, Bell } from "lucide-react"

interface BannerProps {
  variant?: "announcement" | "promotion" | "update" | "warning"
  dismissible?: boolean
  onDismiss?: () => void
}

const bannerVariants = {
  announcement: "bg-blue-600 text-white",
  promotion: "bg-gradient-to-r from-purple-600 to-pink-600 text-white",
  update: "bg-green-600 text-white",
  warning: "bg-orange-600 text-white",
}

const bannerIcons = {
  announcement: Bell,
  promotion: Gift,
  update: Sparkles,
  warning: Zap,
}

export function Banner({ variant = "announcement", dismissible = true, onDismiss }: BannerProps) {
  const [isVisible, setIsVisible] = useState(true)

  const handleDismiss = () => {
    setIsVisible(false)
    onDismiss?.()
  }

  if (!isVisible) return null

  const Icon = bannerIcons[variant]

  return (
    <div className={`${bannerVariants[variant]} flex items-center justify-center w-full`}>
        <div className={`flex flex-row w-full md:flex-col  container mx-auto px-4 py-3 relative`}>
        <div className="flex items-start md:items-center justify-center flex-col md:flex-row gap-2 text-sm font-medium">
            <Icon className="w-4 h-4 md:flex hidden" />
            {variant === "announcement" && <span>📧 New email features now available! Check out our latest updates.</span>}
            {variant === "promotion" && <span>🎉 Limited time: Get 50% off Pro plan - Use code SAVE50</span>}
            {variant === "update" && <span>✨ Version 2.0 is here! Experience faster email with new AI features.</span>}
            {variant === "warning" && <span>⚠️ Scheduled maintenance on Dec 25th, 2-4 AM EST. Plan accordingly.</span>}
            <Button variant="link" size="sm" className="text-white underline hover:no-underline ml-2 p-0 h-auto">
            Learn more →
            </Button>
        </div>

        {dismissible && (
            <Button
            variant="ghost"
            size="icon-sm"
            onClick={handleDismiss}
            className="absolute right-2 top-1/2 cursor-pointer transform -translate-y-1/2 text-white hover:bg-white/20 h-6 w-6"
            >
            <X className="w-3 h-3" />
            </Button>
        )}
        </div>
    </div>
  )
}
