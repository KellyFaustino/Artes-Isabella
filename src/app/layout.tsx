import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Exposição Quadros Isabella',
  description: 'Obras de arte da Isabella',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={'bg-gray-100 dark:bg-dark-100'}>{children}</body>
    </html>
  )
}
