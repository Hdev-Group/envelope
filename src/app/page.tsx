"use client"

import { Banner } from "@/components/header/banner"
import Header from "@/components/header/publicheader"
import { Button } from "@/components/button/button"
import { useState } from "react"
import { ArrowRight, Zap, Shield, Star, Play, ChevronRight, Sparkles, Globe, Lock, OctagonAlert } from "lucide-react"

interface HeaderProps {
  showBanner?: boolean
  bannerVariant?: "announcement" | "promotion" | "update" | "warning"
  isLoggedIn?: boolean
}

export default function Page() {
    const showBanner = true; 
  const [bannerVisible, setBannerVisible] = useState(showBanner)
  const [bannerVariant, setBannerVariant] = useState<HeaderProps["bannerVariant"]>("announcement")
  const isLoggedIn = true; 


  return (
    <div className="h-screen relative overflow-hidden  flex flex-col">
      {bannerVisible && <Banner variant={bannerVariant} onDismiss={() => setBannerVisible(false)} />}
      <Header showBanner={bannerVisible} bannerVariant={bannerVariant} isLoggedIn={isLoggedIn} />
      <main className="flex-1 relative overflow-y-scroll overflow-x-hidden lg:overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
        </div>
        <div className="relative h-full container mx-auto px-6 pb-10 md:pt-0 py-8">
          <div className="grid grid-cols-12 gap-6 h-full">
            <div className="col-span-12 lg:col-span-7 flex flex-col justify-center space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium">
                  <Zap className="w-4 h-4 mr-2" />
                  Secure Email Built for the Future.
                </div>

                <h1 className="text-5xl w-auto lg:text-7xl font-bold text-foreground leading-tight">
                  Email, Reinvented for Tomorrow

                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                  Envelope is the email platform of tomorrow, combining cutting-edge security to
                  deliver a seamless, intuitive and powerful email experience. 
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button
                    variant="cta-primary"
                    size="xl"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-2xl shadow-blue-500/25"
                  >
                    Start Free Trial
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <Button
                    variant="cta-secondary"
                    size="xl"
                    className=""
                  >
                    <Play className="w-5 h-5 mr-2" />
                    Watch Demo
                  </Button>
                </div>
                <div className="flex items-center space-x-6 pt-6">
                  <div className="flex items-center space-x-2">
                    <div className="flex -space-x-2">
                      {[1, 2, 3, 4].map((i) => (
                        <div
                          key={i}
                          className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 border-2 border-[#101418]"
                        ></div>
                      ))}
                    </div>
                    <span className="text-muted-foreground text-sm">10k+ users</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                    <span className="text-muted-foreground text-sm ml-2">4.9/5 rating</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-5 lg:pb-0 pb-64 flex flex-col justify-center space-y-4">
              <div className="bg-background backdrop-blur-sm border hover:border-muted-foreground rounded-2xl p-6 transition-all duration-300 group">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                    <Lock className="w-6 h-6 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-2">Secure Emails</h3>
                    <p className="text-foreground text-sm">
                      State-of-the-art encryption and privacy features to keep your communications safe.
                    </p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-gray-300 transition-colors" />
                </div>
              </div>
              <div className="bg-background backdrop-blur-sm border hover:border-muted-foreground rounded-2xl p-6 transition-all duration-300 group">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center group-hover:bg-purple-500/30 transition-colors">
                    <OctagonAlert className="w-6 h-6 text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-2">Filtering and Convenience</h3>
                    <p className="text-foreground text-sm">
                      Advanced filtering options and smart organization keep your inbox clutter-free.
                    </p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-gray-300 transition-colors" />
                </div>
              </div>
              <div className="bg-background backdrop-blur-sm border hover:border-muted-foreground rounded-2xl p-6 transition-all duration-300 group">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
                    <Globe className="w-6 h-6 text-green-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-2">Universal Access</h3>
                    <p className="text-foreground text-sm">
                      Access your email from anywhere with seamless sync across all your devices.
                    </p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-gray-300 transition-colors" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-gray-700/50">
          <div className="container mx-auto px-6 py-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-foreground">99.9%</div>
                <div className="text-sm text-foreground">Uptime</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">10M+</div>
                <div className="text-sm text-foreground">Emails Processed</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">150+</div>
                <div className="text-sm text-foreground">Countries</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">24/7</div>
                <div className="text-sm text-foreground">Support</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
