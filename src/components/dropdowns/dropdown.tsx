"use client"

import { useState, useRef, useEffect, type ReactNode } from "react"
import { createPortal } from "react-dom"
import { cn } from "@/lib/utils"
import { Check } from "lucide-react"

interface DropdownPosition {
  top: number
  left: number
  width: number
}

interface DropdownItemProps {
  children: ReactNode
  onClick?: () => void
  disabled?: boolean
  destructive?: boolean
  selected?: boolean
  icon?: ReactNode
  shortcut?: string
  className?: string
}

interface DropdownSeparatorProps {
  className?: string
}

interface DropdownLabelProps {
  children: ReactNode
  className?: string
}

interface CustomDropdownProps {
  trigger: ReactNode
  children: ReactNode
  align?: "start" | "center" | "end"
  side?: "top" | "bottom" | "left" | "right"
  sideOffset?: number
  className?: string
  contentClassName?: string
  disabled?: boolean
  onOpenChange?: (open: boolean) => void
}

// Dropdown Item Component
export function DropdownItem({
  children,
  onClick,
  disabled = false,
  destructive = false,
  selected = false,
  icon,
  shortcut,
  className,
}: DropdownItemProps) {
  return (
    <button
      className={cn(
        "relative flex w-full items-center gap-3 px-3 py-2 text-sm outline-none transition-colors",
        "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
        "disabled:pointer-events-none disabled:opacity-50",
        destructive && "text-destructive hover:bg-destructive/10 focus:bg-destructive/10",
        selected && "bg-accent text-accent-foreground",
        className,
      )}
      onClick={onClick}
      disabled={disabled}
      role="menuitem"
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      <span className="flex-1 text-left">{children}</span>
      {selected && <Check className="h-4 w-4 flex-shrink-0" />}
      {shortcut && <span className="ml-auto text-xs text-muted-foreground flex-shrink-0">{shortcut}</span>}
    </button>
  )
}

// Dropdown Separator Component
export function DropdownSeparator({ className }: DropdownSeparatorProps) {
  return <div className={cn("my-1 h-px bg-border", className)} role="separator" />
}

// Dropdown Label Component
export function DropdownLabel({ children, className }: DropdownLabelProps) {
  return <div className={cn("px-3 py-2 text-xs font-medium text-muted-foreground", className)}>{children}</div>
}

// Main Dropdown Component
export function CustomDropdown({
  trigger,
  children,
  align = "start",
  side = "bottom",
  sideOffset = 4,
  className,
  contentClassName,
  disabled = false,
  onOpenChange,
}: CustomDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [position, setPosition] = useState<DropdownPosition>({ top: 0, left: 0, width: 0 })
  const triggerRef = useRef<HTMLButtonElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

const calculatePosition = () => {
    if (!triggerRef.current) return

    const triggerRect = triggerRef.current.getBoundingClientRect()
    const viewportWidth = window.innerWidth
    const viewportHeight = window.innerHeight

    let top = 0
    let left = 0
    const width = triggerRect.width

    if (side === "bottom") {
        top = triggerRect.bottom + sideOffset
    } else if (side === "top") {
        top = triggerRect.top - sideOffset
    } else if (side === "left" || side === "right") {
        top = triggerRect.top
    }

    if (side === "bottom" || side === "top") {
        if (align === "start") {
            left = triggerRect.left
        } else if (align === "center") {
            left = triggerRect.left + triggerRect.width / 2
        } else if (align === "end") {
            left = triggerRect.right
        }
    } else if (side === "right") {
        left = triggerRect.right + sideOffset
    } else if (side === "left") {
        left = triggerRect.left - sideOffset
    }

    // Use actual content size if available
    let contentWidth = 230
    let contentHeight = 300
    if (contentRef.current) {
        const rect = contentRef.current.getBoundingClientRect()
        contentWidth = rect.width
        contentHeight = rect.height
    }

    // Adjust for viewport boundaries
    if (left + contentWidth > viewportWidth - 8) {
        left = viewportWidth - contentWidth - 8
    }
    if (left < 8) {
        left = 8
    }

    if (top + contentHeight > viewportHeight - 8) {
        top = viewportHeight - contentHeight - 8
    }
    if (top < 8) {
        top = 8
    }

    setPosition({ top, left, width })
}


  const handleToggle = () => {
    if (disabled) return

    const newOpen = !isOpen
    setIsOpen(newOpen)
    onOpenChange?.(newOpen)

    if (newOpen) {
      calculatePosition()
    }
  }

  const handleClose = () => {
    setIsOpen(false)
    onOpenChange?.(false)
  }

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        triggerRef.current &&
        contentRef.current &&
        !triggerRef.current.contains(event.target as Node) &&
        !contentRef.current.contains(event.target as Node)
      ) {
        handleClose()
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isOpen])

  // Handle escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        handleClose()
        triggerRef.current?.focus()
      }
    }

    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [isOpen])

  // Handle keyboard navigation
  useEffect(() => {
    if (!isOpen || !contentRef.current) return

    const handleKeyDown = (event: KeyboardEvent) => {
      const items = contentRef.current?.querySelectorAll('[role="menuitem"]:not([disabled])')
      if (!items || items.length === 0) return

      const currentIndex = Array.from(items).findIndex((item) => item === document.activeElement)

      switch (event.key) {
        case "ArrowDown":
          event.preventDefault()
          const nextIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0
          ;(items[nextIndex] as HTMLElement).focus()
          break
        case "ArrowUp":
          event.preventDefault()
          const prevIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1
          ;(items[prevIndex] as HTMLElement).focus()
          break
        case "Enter":
        case " ":
          event.preventDefault()
          ;(document.activeElement as HTMLElement)?.click()
          break
      }
    }

    contentRef.current.addEventListener("keydown", handleKeyDown)
    return () => contentRef.current?.removeEventListener("keydown", handleKeyDown)
  }, [isOpen])

  // Focus first item when opened
  useEffect(() => {
    if (isOpen && contentRef.current) {
      const firstItem = contentRef.current.querySelector('[role="menuitem"]:not([disabled])') as HTMLElement
      firstItem?.focus()
    }
  }, [isOpen])

  const dropdownContent =
    isOpen && mounted
      ? createPortal(
          <div
            ref={contentRef}
            className={cn(
              "fixed z-50 min-w-[12rem] overflow-hidden rounded-lg border bg-popover p-1 text-popover-foreground shadow-lg",
              "animate-in fade-in-0 zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
              contentClassName,
            )}
            style={{
              top: position.top,
              left: position.left,
              minWidth: Math.max(position.width, 192),
            }}
            role="menu"
            aria-orientation="vertical"
            data-side={side}
          >
            {children}
          </div>,
          document.body,
        )
      : null

  return (
    <div className={cn("relative inline-block", className)}>
      <button
        ref={triggerRef}
        onClick={handleToggle}
        disabled={disabled}
        className={cn(
          "inline-flex items-center justify-center gap-2 transition-colors",
          "disabled:pointer-events-none disabled:opacity-50",
          isOpen && "bg-accent text-accent-foreground",
        )}
        aria-expanded={isOpen}
        aria-haspopup="menu"
      >
        {trigger}
      </button>
      {dropdownContent}
    </div>
  )
}
