import "@/styles/globals.css"
import { Metadata } from "next"

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { SiteHeader } from "@/components/site-header"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"
import Sidebar, { SidebarItem } from "@/components/Sidebar"
import { Laptop } from "lucide-react"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <body
          className={cn("min-h-screen bg-background font-sans antialiased",fontSans.variable)}>

          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="flex h-screen w-full items-center ">
              <SiteHeader />
              <Sidebar>
                <SidebarItem icon={<Laptop/>} text="Dashboard"  active={true} />
                <SidebarItem icon={<Laptop/>} text="About" />
                <SidebarItem icon={<Laptop/>} text="Contact" />
              </Sidebar>

              <div className="flex h-screen w-full justify-center">
                {children}
                </div>
            </div>
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
