
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
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

interface SendEmailWidgetProps {
  showWidget: boolean
  onClose: () => void
}

export default function SendEmailWidget({ showWidget, onClose }: SendEmailWidgetProps) {
  const [isMinimized, setIsMinimized] = useState(false)
  const [isMaximized, setIsMaximized] = useState(false)
  const [showCc, setShowCc] = useState(false)
  const [showBcc, setShowBcc] = useState(false)

  useEffect(() => {
    if (showWidget) {
      setIsMinimized(false)
      setIsMaximized(false)
    }
  }, [showWidget])

  if (!showWidget) {
    return null
  }

  const handleClose = () => {
    onClose()
  }

  const handleMinimize = () => {
    setIsMinimized(true)
  }

  const handleMaximize = () => {
    setIsMaximized(!isMaximized)
    if (isMinimized) {
      setIsMinimized(false)
    }
  }

  const handleRestore = () => {
    setIsMinimized(false)
  }

  if (isMinimized) {
    return (
      <div
        className="fixed z-50 right-0 md:right-10 bottom-0 w-full md:w-96 h-12 rounded-t-xl bg-background shadow-lg border border-b-0 cursor-pointer"
        onClick={handleRestore}
      >
        <div className="flex items-center justify-between px-4 py-3">
          <span className="text-sm font-medium text-foreground">New Message</span>
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6"
              onClick={(e) => {
                e.stopPropagation()
                handleRestore()
              }}
            >
              <Maximize2 className="w-3 h-3" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6"
              onClick={(e) => {
                e.stopPropagation()
                handleClose()
              }}
            >
              <X className="w-3 h-3" />
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      {isMaximized && <div className="fixed inset-0 bg-black/20 z-40" onClick={() => setIsMaximized(false)} />}
      <div
        className={`fixed z-50 bg-background shadow-2xl border ${
          isMaximized
            ? "top-0 md:top-[5%] left-0 w-full md:left-[5%] md:w-[90%] h-full md:h-[90%] rounded-xl"
            : "border-b-0 rounded-t-xl h-auto w-full md:w-[600px] right-0 bottom-0"
        }`}
      >

        <div className="flex items-center justify-between px-4 py-3 bg-muted/50 rounded-t-xl border-b">
          <span className="text-sm font-medium text-foreground">New Message</span>
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon" className="h-6 w-6" onClick={handleMinimize}>
              <Minus className="w-3 h-3" />
            </Button>
            <Button variant="ghost" size="icon" onClick={handleMaximize} className="h-6 w-6">
              {isMaximized ? <Minimize2 className="w-3 h-3" /> : <Maximize2 className="w-3 h-3" />}
            </Button>
            <Button variant="ghost" size="icon" className="h-6 w-6" onClick={handleClose}>
              <X className="w-3 h-3" />
            </Button>
          </div>
        </div>


        <div className={`flex flex-col ${isMaximized ? "h-[calc(100%-60px)]" : "h-auto"}`}>
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

          <div className="flex-1 px-4 py-3">
            <Textarea
              className={`w-full border-0 resize-none focus-visible:ring-0 text-sm ${
                isMaximized ? "h-full min-h-[300px]" : "min-h-[8rem]"
              }`}
              placeholder="Compose email"
            />
          </div>

          <div className="px-4 py-3 border-t bg-background rounded-b-xl">
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
