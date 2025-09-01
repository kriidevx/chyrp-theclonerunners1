import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { ThemeProvider } from '../contexts/ThemeContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ModernBlog - A Beautiful Blogging Platform',
  description: 'A modern, responsive blogging platform built with Next.js, Tailwind CSS, and Supabase.',
  keywords: ['blog', 'nextjs', 'tailwindcss', 'supabase', 'modern', 'responsive'],
  authors: [{ name: 'ModernBlog Team' }],
  openGraph: {
    title: 'ModernBlog - A Beautiful Blogging Platform',
    description: 'A modern, responsive blogging platform built with Next.js, Tailwind CSS, and Supabase.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ModernBlog - A Beautiful Blogging Platform',
    description: 'A modern, responsive blogging platform built with Next.js, Tailwind CSS, and Supabase.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <ThemeProvider>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}