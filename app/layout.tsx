import type { Metadata } from 'next'
import { DM_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-mono",
})

export const metadata: Metadata = {
  title: "DH Lee's Personal Website",
  description: 'Personal academic portfolio of Dae Hyun Lee. M.S. Student in Data Science.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={dmMono.variable}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
