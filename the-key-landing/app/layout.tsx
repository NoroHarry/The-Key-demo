import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'The Key',
  keywords: ['landing page', 'next.js', 'react', 'tailwindcss'],
  description: 'The Key',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
