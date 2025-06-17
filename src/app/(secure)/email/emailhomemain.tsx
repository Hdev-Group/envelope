"use client"

import { Button } from "@/components/button/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Menu,
  Pencil,
  Search,
  Inbox,
  Send,
  FileText,
  Trash2,
  Archive,
  Star,
  MoreHorizontal,
  Reply,
  ReplyAll,
  Forward,
  Paperclip,
  Settings,
  Plus,
  Bell,
  HelpCircle,
  ArrowLeft,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { ThemeSelector } from "@/components/themeselector/themeselect"
import VerifiedBadge from "@/components/emailcomponents/VerifiedBadge"

interface Email {
  id: string
  sender: string
  senderEmail: string
  subject: string
  preview: string
  time: string
  isRead: boolean
  isStarred: boolean
  hasAttachment: boolean
  avatar?: string
  isImportant?: boolean
  isVerified?: string // "verified" | "premium" | "staff" | "partner" | "checkmark"
}

const mockEmails: Email[] = [
  {
    id: "1",
    sender: "Hdev Group",
    senderEmail: "me",
    subject: "Welcome to Envelope!",
    preview: "Thank you for signing up for Envelope. We're excited to have you on board!",
    time: "2 hours ago",
    isRead: false,
    isStarred: true,
    hasAttachment: false,
    avatar: "/placeholder.svg?height=28&width=28",
    isImportant: true,
    isVerified: "staff",
  },
]

const sidebarItems = [
  { icon: Inbox, label: "Inbox", count: 12, active: true },
  { icon: Star, label: "Starred", count: 3 },
  { icon: Send, label: "Sent" },
  { icon: FileText, label: "Drafts", count: 2 },
  { icon: Archive, label: "Archive" },
  { icon: Trash2, label: "Trash" },
]

export default function EmailApp() {
  const [selectedEmail, setSelectedEmail] = useState<Email | null>(mockEmails[0])
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-background to-foreground/30">
      <header className="bg-slate-800/50 backdrop-blur-xl border-b z-50 border-slate-700/50 px-4 lg:px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="">
                <div className="flex items-center gap-4">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                    className="h-10 w-10 rounded-2xl"
                  >
                    <Menu className="h-5 w-5 text-white" />
                  </Button>
                </div>
              </div>
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">E</span>
              </div>
              <h1 className="text-2xl lg:flex hidden font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                Envelope
              </h1>
            </div>
            <div className="relative w-full max-w-sm lg:w-96">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input
                placeholder="Search all emails..."
                className="pl-11 bg-slate-700/30 border-slate-600/50 rounded-2xl h-10 text-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 backdrop-blur-sm"
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <ThemeSelector />
            <Button variant="glass" size="icon" className="rounded-xl">
              <Bell className="h-4 w-4 text-slate-300" />
            </Button>
            <Button variant="glass" size="icon" className="rounded-xl">
              <HelpCircle className="h-4 w-4 text-slate-300" />
            </Button>
            <Button variant="glass" size="icon" className="rounded-xl">
              <Settings className="h-4 w-4 text-slate-300" />
            </Button>

            {/* User Profile */}
            <Button variant="glass" className="gap-3 h-10 rounded-2xl px-0 lg:px-4">
              <Avatar className="h-7 w-7 ring-2 ring-blue-500/30">
                <AvatarImage src="/placeholder.svg?height=28&width=28" />
                <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold text-sm">
                  JD
                </AvatarFallback>
              </Avatar>
              <span className="font-medium hidden lg:flex text-slate-200 text-sm">John Doe</span>
            </Button>
          </div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden relative">
        {!sidebarCollapsed && (
          <div
            className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-30"
            onClick={() => setSidebarCollapsed(true)}
          />
        )}

        <div
          className={cn(
            "bg-gradient-to-b from-slate-800/50 to-slate-900/50 backdrop-blur-xl border-r border-slate-700/50 flex flex-col transition-all duration-500 ease-in-out",
            "lg:relative absolute inset-y-0 left-0 z-40",
            sidebarCollapsed ? "w-20 lg:w-20" : "w-72 lg:w-72",
            "lg:translate-x-0",
            sidebarCollapsed ? "-translate-x-full lg:translate-x-0" : "translate-x-0",
          )}
        >
          <div className="p-4">
            <Button
              variant="compose"
              size={sidebarCollapsed ? "icon-lg" : "lg"}
              className={cn(
                "rounded-2xl shadow-2xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300",
                sidebarCollapsed ? "w-12 h-12" : "w-full justify-start gap-3",
              )}
            >
              <Pencil className="h-5 w-5" />
              {!sidebarCollapsed && <span className="font-semibold">Compose</span>}
            </Button>
          </div>

          {/* Navigation Items */}
          <ScrollArea className="flex-1 px-4">
            <div className="space-y-2">
              {sidebarItems.map((item) => (
                <Button
                  key={item.label}
                  variant={item.active ? "glass" : "ghost"}
                  className={cn(
                    "w-full justify-start gap-4 h-12 rounded-2xl transition-all duration-300 hover:bg-slate-700/30",
                    sidebarCollapsed && "justify-center",
                    item.active && "bg-slate-700/50 border border-slate-600/50 shadow-lg",
                  )}
                  size={sidebarCollapsed ? "icon-lg" : "default"}
                >
                  <item.icon className="h-5 w-5 text-white" />
                  {!sidebarCollapsed && (
                    <>
                      <span className="flex-1 text-left font-medium text-slate-200">{item.label}</span>
                      {item.count && (
                        <Badge className="bg-blue-500/20 text-blue-300 border-blue-400/30 rounded-full px-2 py-1 text-xs font-semibold">
                          {item.count}
                        </Badge>
                      )}
                    </>
                  )}
                </Button>
              ))}
            </div>
          </ScrollArea>
        </div>

        <div
          className={cn(
            "bg-slate-800/30 backdrop-blur-xl border-r border-slate-700/50 flex flex-col transition-all duration-300",
            "w-full ",
            selectedEmail ? "hidden lg:flex lg:w-96" : "flex",
          )}
        >
          <div className="p-6 border-b border-slate-700/30">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-slate-200">Inbox</h2>
              <div className="flex items-center gap-2">
                <Button variant="glass" size="sm" className="rounded-xl">
                  <Plus className="h-4 w-4 mr-2" />
                  Filters
                </Button>
                <Button variant="glass" size="icon-sm" className="rounded-xl">
                  <Settings className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          <ScrollArea className="flex-1">
            <div className="p-2 space-y-1">
              {mockEmails.map((email) => (
                <div
                  key={email.id}
                  className={cn(
                    "p-4 cursor-pointer rounded-2xl transition-all duration-300 hover:bg-slate-700/30 group",
                    selectedEmail?.id === email.id &&
                      "bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 shadow-lg",
                    !email.isRead && "bg-slate-700/20",
                    email.isImportant && "border-l-4 border-orange-500",
                  )}
                  onClick={() => setSelectedEmail(email)}
                >
                  <div className="flex items-start gap-4">
                    <Avatar className="h-10 w-10 mt-1 ring-2 ring-slate-600/50 group-hover:ring-blue-500/50 transition-all duration-300">
                      <AvatarImage src={email.avatar || "/placeholder.svg"} />
                      <AvatarFallback className="bg-gradient-to-r from-slate-600 to-slate-700 text-slate-200 text-sm font-semibold">
                        {email.sender
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-sm gap-4 flex flex-row font-semibold text-slate-200 truncate">
                          {email.sender}
                          {email.isVerified && (
                            <VerifiedBadge
                              type={email.isVerified as any}
                              isVerified={email.isVerified as any}
                              showTooltip={false}
                            />
                          )}
                        </div>
                        <span
                          className={cn(
                            "text-sm truncate",
                            !email.isRead ? "font-bold text-slate-100" : "font-semibold text-slate-300",
                          )}
                        ></span>
                        <div className="flex items-center gap-2">
                          {email.isStarred && (
                            <Button variant="star" size="icon-sm" className="rounded-lg">
                              <Star className="h-3 w-3 fill-current" />
                            </Button>
                          )}
                          {email.hasAttachment && <Paperclip className="h-3 w-3 text-slate-400" />}
                          <span className="text-xs text-slate-500 font-medium">{email.time}</span>
                        </div>
                      </div>

                      <div
                        className={cn(
                          "text-sm mb-2 truncate",
                          !email.isRead ? "font-semibold text-slate-200" : "text-slate-400",
                        )}
                      >
                        {email.subject}
                      </div>

                      <div className="text-xs text-slate-500 line-clamp-2 leading-relaxed">{email.preview}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
                  {selectedEmail ? (
        <div
          className={cn(
            "flex-1 flex flex-col bg-slate-800/20 backdrop-blur-xl transition-all duration-300",
            selectedEmail ? "flex" : "hidden lg:flex",
          )}
        >
              <div className="p-4 lg:p-8 border-b border-slate-700/30">
                <div className="lg:hidden mb-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedEmail(null)}
                    className="gap-2 rounded-xl text-slate-300"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Back to Inbox
                  </Button>
                </div>

                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-start gap-4">
                    <Avatar className="h-12 w-12 ring-2 ring-blue-500/30">
                      <AvatarImage src={selectedEmail.avatar || "/placeholder.svg"} />
                      <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold">
                        {selectedEmail.sender
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h2 className="text-2xl font-bold text-slate-100 mb-2">{selectedEmail.subject}</h2>
                      <div className="text-sm flex flex-row items-center text-slate-400">
                        <span className="font-semibold text-slate-300">{selectedEmail.sender}</span>
                        <span className="mx-2">•</span>
                        <span>{selectedEmail.senderEmail}</span>
                        {selectedEmail.isVerified && (
                          <>
                            <span className="mx-2">•</span>
                            <span>
                              <VerifiedBadge type="checkmark" isVerified={selectedEmail.isVerified as any} />
                            </span>
                          </>
                        )}
                      </div>
                      <div className="text-xs text-slate-500 mt-1 font-medium">{selectedEmail.time} • To: me</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Button variant="star" size="icon" className="rounded-xl">
                      <Star className={cn("h-4 w-4", selectedEmail.isStarred ? "fill-current" : "")} />
                    </Button>
                    <Button variant="glass" size="icon" className="rounded-xl">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-2 lg:gap-3">
                  <Button variant="reply" size="sm" className="gap-2 rounded-xl flex-1 lg:flex-none min-w-0">
                    <Reply className="h-4 w-4" />
                    <span className="hidden sm:inline">Reply</span>
                  </Button>
                  <Button variant="reply" size="sm" className="gap-2 rounded-xl flex-1 lg:flex-none min-w-0">
                    <ReplyAll className="h-4 w-4" />
                    <span className="hidden sm:inline">Reply All</span>
                  </Button>
                  <Button variant="reply" size="sm" className="gap-2 rounded-xl flex-1 lg:flex-none min-w-0">
                    <Forward className="h-4 w-4" />
                    <span className="hidden sm:inline">Forward</span>
                  </Button>
                  <Button variant="archive" size="sm" className="gap-2 rounded-xl">
                    <Archive className="h-4 w-4" />
                    <span className="hidden lg:inline">Archive</span>
                  </Button>
                  <Button variant="delete" size="sm" className="gap-2 rounded-xl">
                    <Trash2 className="h-4 w-4" />
                    <span className="hidden lg:inline">Delete</span>
                  </Button>
                </div>
              </div>
              <ScrollArea className="flex-1 p-4 lg:p-8">
                <div className="prose prose-invert max-w-none">
                  <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/30">
                    <p className="text-slate-300 leading-relaxed mb-4 text-base">{selectedEmail.preview}</p>
                    <p className="text-slate-300 leading-relaxed mb-4 text-base">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p className="text-slate-300 leading-relaxed mb-4 text-base">
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                      mollit anim id est laborum.
                    </p>
                    <p className="text-slate-300 leading-relaxed text-base">
                      Best regards,
                      <br />
                      <span className="font-semibold text-slate-200">{selectedEmail.sender}</span>
                    </p>
                  </div>

                  {selectedEmail.hasAttachment && (
                    <div className="mt-6 p-6 bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-2xl border border-slate-600/30">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-blue-500/20 rounded-xl">
                          <Paperclip className="h-5 w-5 text-blue-400" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-semibold text-slate-200">Q4_Marketing_Strategy.pdf</div>
                          <div className="text-xs text-slate-400">2.4 MB</div>
                        </div>
                        <Button variant="cta-primary" size="sm" className="rounded-xl">
                          Download
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </ScrollArea>
            </div>
          ) : (
            null
          )}
        </div>
      </div>
  )
}
