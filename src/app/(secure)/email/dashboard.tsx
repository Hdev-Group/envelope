"use client"

import { Button } from "@/components/button/button"
import { Menu, Pencil } from "lucide-react"

export default function Email(){
    return(
        <div className="flex flex-col w-full items-center bg-[#101418] justify-start h-screen">
            <div className="w-full px-5">
                {/* Email header */}
                <div className="w-full flex justify-between items-center flex-row p-4">
                    <div className="flex items-center flex-row gap-3 text-white space-x-2">
                        <Menu className="w-6 h-6 text-white cursor-pointer" />
                        <h1 className="text-xl font-bold">Envelope</h1>
                    </div>
                    <div>
                        <Menu className="w-6 h-6 text-white cursor-pointer" />
                    </div>
                </div>
            </div>
            <div className="flex flex-row w-full h-full pb-6">
                <div className="h-full flex flex-col">
                    {/* Email sidebar */}
                    <div className="w-auto h-full p-4">
                        <Button variant="compose" size="lg" className="w-full">
                            <Pencil className="mr-2 h-auto w-4" />
                            Compose
                        </Button>
                        <ul className="mt-2">
                            <li className="text-gray-400">Inbox</li>
                            <li className="text-gray-400">Sent</li>
                            <li className="text-gray-400">Drafts</li>
                            <li className="text-gray-400">Spam</li>
                        </ul>
                    </div>
                </div>
                <div className="h-full flex flex-col flex-1">
                    {/* Email content */}
                    <div className="flex-1 p-6 bg-[#fff] rounded-2xl w-full h-full overflow-y-auto">
                    </div>
                </div>

                <div>
                    {/* Email side viewer / preview */}
                </div>
            </div>
        </div>
    )
}