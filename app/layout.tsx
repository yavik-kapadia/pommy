import type { Metadata } from 'next'
import './globals.css'
import localFont from 'next/font/local'

const AileronUltraLight = localFont({ src: '../public/fonts/Aileron-UltraLight.otf' })

export const metadata: Metadata = {
  title: 'Pommy',
  description: 'Pomodoro timer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={AileronUltraLight.className}>{children}</body>
    </html>
  )
}
