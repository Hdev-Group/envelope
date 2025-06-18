"use client"

import type React from "react"

import { Button } from "@/components/button/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Minus,
  Maximize2,
  Minimize2,
  X,
  ChevronDown,
  Bold,
  Italic,
  Underline,
  Link2,
  Smile,
  Paperclip,
  ImageIcon,
  MoreHorizontal,
  Trash2,
} from "lucide-react"
import { useState } from "react"

export default function SendEmailWidget() {
  const [isExpanded, setIsExpanded] = useState(true)
  const [height, setHeight] = useState(500)
  const [showCc, setShowCc] = useState(false)
  const [showBcc, setShowBcc] = useState(false)
  const [bigScreen, setBigScreen] = useState(false)

  const handleResize = (e: React.MouseEvent) => {
    const startY = e.clientY
    const startHeight = height

    const handleMouseMove = (e: MouseEvent) => {
      const newHeight = Math.max(200, Math.min(600, startHeight - (e.clientY - startY)))
      setHeight(newHeight)
    }

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseup", handleMouseUp)
    }

    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseup", handleMouseUp)
  }

  if (!isExpanded) {
    return (
      <div className="fixed z-50 right-10 bottom-0 w-96 h-12 rounded-t-xl bg-muted-foreground/5 shadow-lg border cursor-pointer border-b-0" onClick={() => setIsExpanded(true)}>
        <div className="flex items-center justify-between px-4 py-3 bg-background rounded-t-xl">
          <span className="text-sm font-medium text-foreground">New Message</span>
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon" className="h-6 w-6 " onClick={() => setIsExpanded(true)}>
              <Maximize2 className="w-3 h-3" />
            </Button>
            <Button variant="ghost" size="icon" className="h-6 w-6 ">
              <X className="w-3 h-3" />
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <div
        className={`fixed z-50 bg-background shadow-2xl border ${
          bigScreen
            ? "inset-0 w-full h-full rounded-none"
            : "border-b-0 rounded-t-xl h-auto w-[600px] right-10 bottom-0"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-3 bg-muted-foreground/5 rounded-t-xl border-b">
          <span className="text-sm font-medium text-foreground">New Message</span>
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => { setIsExpanded(false); setBigScreen(false); }}>
              <Minus className="w-3 h-3" />
            </Button>
            <Button variant="ghost" size="icon" onClick={() => setBigScreen(!bigScreen)} className="h-6 w-6">
              {bigScreen ? <Minimize2 className="w-3 h-3" /> : <Maximize2 className="w-3 h-3" />}
            </Button>
            <Button variant="ghost" size="icon" className="h-6 w-6">
              <X className="w-3 h-3" />
            </Button>
          </div>
        </div>


        <div className={`flex flex-col ${bigScreen ? "h-[calc(100vh-60px)]" : "h-full"}`}>

          <div className="px-4 py-2 border-b">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-sm text-foreground">From:</span>
                <span className="text-sm">Harry Campbell &lt;hthebeast7@gmail.com&gt;</span>
              </div>
              <Button variant="ghost" size="icon" className="h-5 w-5">
                <ChevronDown className="w-3 h-3" />
              </Button>
            </div>
          </div>


          <div className="px-4 py-2 border-b">
            <div className="flex items-center gap-2">
              <span className="text-sm text-foreground">To:</span>
              <Input className="border-0 p-0 h-auto focus-visible:ring-0 text-sm" placeholder="Recipients" />
              <div className="flex gap-2 text-xs text-blue-600">
                <button onClick={() => setShowCc(!showCc)}>Cc</button>
                <button onClick={() => setShowBcc(!showBcc)}>Bcc</button>
              </div>
            </div>
          </div>


          {showCc && (
            <div className="px-4 py-2 border-b">
              <div className="flex items-center gap-2">
                <span className="text-sm text-foreground">Cc:</span>
                <Input className="border-0 p-0 h-auto focus-visible:ring-0 text-sm" placeholder="Recipients" />
              </div>
            </div>
          )}


          {showBcc && (
            <div className="px-4 py-2 border-b">
              <div className="flex items-center gap-2">
                <span className="text-sm text-foreground">Bcc:</span>
                <Input className="border-0 p-0 h-auto focus-visible:ring-0 text-sm" placeholder="Recipients" />
              </div>
            </div>
          )}

          <div className="px-4 py-2 border-b">
            <Input className="border-0 p-0 h-auto focus-visible:ring-0 text-sm" placeholder="Subject" />
          </div>

          {/* Signature */}
          <div className="px-4 py-3 border-b bg-background">
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                H
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium text-blue-600">Harry Campbell</div>
                <div className="text-xs text-foreground">Chief Developer | Hdev Group</div>
                <div className="text-xs text-foreground mt-1">
                  <span className="font-medium">E:</span> hcampbell.dev@gmail.com{" "}
                  <span className="font-medium">W:</span>{" "}
                  <a href="#" className="text-blue-600 underline">
                    https://hdev.uk
                  </a>
                </div>
              </div>
            </div>
            <div className="text-xs text-foreground mt-3 leading-relaxed">
              This email and any files transmitted with it are confidential and intended solely for the use of the
              individual or entity to whom they are addressed. If you have received this email in error please notify
              the system manager. This message contains confidential information and is intended only for the individual
              named. If you are not the named addressee you should not disseminate, distribute or copy this e-mail.
              Please notify the sender immediately by e-mail if you have received this e-mail by mistake and delete this
              e-mail from your system. If you are not the intended recipient you are notified that disclosing, copying,
              distributing or taking any action in reliance on the contents of this information is strictly prohibited.
            </div>
          </div>

          <div className="flex-1 px-4 py-3">
            <Textarea
              className={`w-full border-0 resize-none focus-visible:ring-0 text-sm ${
                bigScreen ? "h-full min-h-[300px]" : "h-32"
              }`}
              placeholder="Compose email"
            />
          </div>

          <div className="px-4 py-3 border-t bg-background">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 text-sm">Send</Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Bold className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Italic className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Underline className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Link2 className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Smile className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Paperclip className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <ImageIcon className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <MoreHorizontal className="w-4 h-4" />
                </Button>
              </div>
              <Button variant="destructive" size="icon" className="h-8 w-8">
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
