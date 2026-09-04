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
  title: 'Dae Hyun Lee - Master of Science in Data Science',
  description: 'Personal academic portfolio of Dae Hyun Lee. M.S. Student in Data Science.',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
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
