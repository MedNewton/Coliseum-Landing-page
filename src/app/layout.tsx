import "./globals.css"
import type { Metadata } from "next"
import { Host_Grotesk } from "next/font/google"
import InitColorSchemeScript from "@mui/material/InitColorSchemeScript"
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import ClientThemeProvider from "../providers/theme-provider"
import Navbar from "@/components/layout/navbar"

const hostGrotesk = Host_Grotesk({
  variable: "--font-host-grotesk",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Coliseum Blockchain",
  description: "High-performance blockchain powering scalable, secure, and developer-first financial products.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${hostGrotesk.variable}`} style={{ background: '#FAFAFA' }}>
        <AppRouterCacheProvider>
          <InitColorSchemeScript attribute="class" />
          <ClientThemeProvider>
            <Navbar />
            {children}
          </ClientThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
