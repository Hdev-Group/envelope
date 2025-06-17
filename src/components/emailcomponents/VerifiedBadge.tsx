"use client"

import { Check, Shield, Star, Crown } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

type VerificationType = "verified" | "premium" | "staff" | "partner" | "checkmark"

interface VerifiedBadgeProps {
  isVerified: string
  type?: VerificationType
  size?: "sm" | "md" | "lg"
  showTooltip?: boolean
}

const verificationConfig = {
  verified: {
    icon: Check,
    label: "Verified",
    color: "cyan",
    bgColor: "bg-cyan-500/10 hover:bg-cyan-500/20",
    borderColor: "border-cyan-500/20",
    textColor: "text-cyan-500",
    dotColor: "bg-cyan-500",
    description: "This email address has been verified by Envelope staff and confirmed to be authentic.",
  },
  premium: {
    icon: Star,
    label: "Premium",
    color: "yellow",
    bgColor: "bg-yellow-500/10 hover:bg-yellow-500/20",
    borderColor: "border-yellow-500/20",
    textColor: "text-yellow-500",
    dotColor: "bg-yellow-500",
    description: "This user has a premium Envelope subscription with enhanced features and priority support.",
  },
  staff: {
    icon: Shield,
    label: "Staff",
    color: "purple",
    bgColor: "bg-purple-500/10 hover:bg-purple-500/20",
    borderColor: "border-purple-500/20",
    textColor: "text-purple-500",
    dotColor: "bg-purple-500",
    description: "This is an official Envelope staff member. All communications from this account are authentic.",
  },
  partner: {
    icon: Crown,
    label: "Partner",
    color: "orange",
    bgColor: "bg-orange-500/10 hover:bg-orange-500/20",
    borderColor: "border-orange-500/20",
    textColor: "text-orange-500",
    dotColor: "bg-orange-500",
    description: "This user is a verified business partner with special privileges and trusted status.",
  },
  checkmark: {
    icon: Check,
    label: "",
    color: "blue",
    bgColor: "bg-blue-500",
    borderColor: "border-blue-500",
    textColor: "text-white",
    dotColor: "bg-blue-500",
    description: "This account has been verified and is authentic.",
  },
}

export default function VerifiedBadge({
  isVerified,
  type = "verified",
  size = "md",
  showTooltip = true,
}: VerifiedBadgeProps) {
  const [isHovering, setIsHovering] = useState(false)
  const config = verificationConfig[type]
  const IconComponent = config.icon

  const sizeClasses = {
    sm: {
      badge: "text-xs px-2 py-0.5",
      icon: "h-3 w-3",
      dot: "w-1 h-1",
      tooltip: "w-72 text-xs",
    },
    md: {
      badge: "text-xs px-2 py-[1px]",
      icon: "h-3.5 w-3.5",
      dot: "w-1.5 h-1.5",
      tooltip: "w-80 text-sm",
    },
    lg: {
      badge: "text-sm px-3 py-1",
      icon: "h-4 w-4",
      dot: "w-2 h-2",
      tooltip: "w-96 text-sm",
    },
  }

  if (type === "checkmark") {
    return (
      <div className="relative inline-flex">
        <div
          className={cn(
            "flex items-center justify-center rounded-full transition-all duration-200",
            config.bgColor,
            size === "sm" ? "w-4 h-4" : size === "md" ? "w-5 h-5" : "w-6 h-6",
          )}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <IconComponent className={cn("text-white", sizeClasses[size].icon)} />
        </div>

        {showTooltip && isHovering && (
          <div
            className="absolute left-1/2 -translate-x-1/2 top-full mt-2 z-50 px-3 py-2 bg-gray-900/95 border border-gray-700/50 rounded-lg shadow-xl backdrop-blur-sm animate-in fade-in-50 slide-in-from-top-1 duration-200"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <div className="text-white font-medium text-xs whitespace-nowrap">Verified Account</div>
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 border-l border-t border-gray-700/50 rotate-45" />
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="relative inline-flex">
      <div
        className={cn(
          "flex items-center gap-1.5 border rounded-full cursor-pointer transition-all duration-200",
          config.bgColor,
          config.borderColor,
          sizeClasses[size].badge,
        )}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className={cn("rounded-full animate-pulse", config.dotColor, sizeClasses[size].dot)} />
        <span className={cn("font-semibold", config.textColor)}>{config.label}</span>
      </div>

      {showTooltip && isHovering && (
        <div
          className={cn(
            "absolute left-0 top-full mt-2 z-50 cursor-default bg-gray-900/95 border border-gray-700/50 rounded-xl shadow-2xl backdrop-blur-lg animate-in fade-in-50 slide-in-from-top-2 duration-200",
            sizeClasses[size].tooltip,
          )}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >

          <div className="p-4 border-b border-gray-700/30">
            <div className="flex items-center gap-3">
              <h3 className="text-white font-semibold text-base">{isVerified}</h3>
              <div
                className={cn(
                  "flex items-center gap-1.5 border rounded-full px-2 py-0.5 text-xs",
                  config.bgColor,
                  config.borderColor,
                )}
              >
                <div className={cn("w-1.5 h-1.5 rounded-full animate-pulse", config.dotColor)} />
                <span className={cn("font-semibold", config.textColor)}>{config.label}</span>
              </div>
            </div>
          </div>

          <div className="p-4">
            <div className="flex items-start gap-3 mb-4">
              <div className={cn("p-2 rounded-lg", config.bgColor)}>
                <IconComponent className={cn("h-5 w-5", config.textColor)} />
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm mb-1">{config.label} Account</h4>
                <p className={cn("text-sm", config.textColor)}>{isVerified} has been verified by Envelope.</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <Check className="text-green-400 h-4 w-4 mt-0.5 flex-shrink-0" />
                <p className="text-gray-300 text-sm">Email address confirmed and authenticated</p>
              </div>

              <div className="flex items-start gap-2">
                <Check className="text-green-400 h-4 w-4 mt-0.5 flex-shrink-0" />
                <p className="text-gray-300 text-sm">Identity verified by Envelope security team</p>
              </div>

              {type === "staff" && (
                <div className="flex items-start gap-2">
                  <Check className="text-green-400 h-4 w-4 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300 text-sm">Official Envelope team member</p>
                </div>
              )}

              {type === "premium" && (
                <div className="flex items-start gap-2">
                  <Check className="text-green-400 h-4 w-4 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300 text-sm">Premium subscription active</p>
                </div>
              )}
            </div>

            <div className="mt-4 p-3 bg-gray-800/50 rounded-lg border border-gray-700/30">
              <p className="text-gray-300 text-sm leading-relaxed">{config.description}</p>
            </div>
          </div>

          {/* Arrow */}
          <div className="absolute -top-2 left-4 w-4 h-4 bg-gray-900 border-l border-t border-gray-700/50 rotate-45" />
        </div>
      )}
    </div>
  )
}
