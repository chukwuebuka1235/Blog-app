// app/layout/ClientLayout.js
'use client'
import Header from "@/app/layout/Header"
import { DarkModeProvider } from "./contexts/DarkModeContext"
import { SessionProvider } from "next-auth/react"

export default function ClientLayout({ children }) {
  return (
      <SessionProvider>
        <DarkModeProvider>
          <Header />
          <div className="pt-[60px]">
            {children}
          </div>
        </DarkModeProvider>
      </SessionProvider>
  )
}