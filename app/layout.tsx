import type { Metadata } from 'next'

import './globals.css'


export const metadata: Metadata = {
  title: 'Car Showcase',
  description: 'Showcase all kinds of vehicle you have for sale',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
