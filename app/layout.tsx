import type { Metadata } from 'next'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'
import { Toaster } from '@/components/ui/sonner'
import ErrorBoundary from '@/components/error-boundary'

export const metadata: Metadata = {
  title: 'PDF to Markdown Converter – Free Unlimited, Secure, 100% Browser-Based',
  description:
    'Convert PDF files to Markdown instantly in your browser. 100% privacy: your files never leave your device. Supports headings, tables, lists, and more. Fast, free unlimited, and secure PDF to Markdown conversion tool.',
  keywords: [
    'PDF to Markdown',
    'PDF converter',
    'Markdown converter',
    'browser-based PDF tool',
    'free unlimited PDF to Markdown',
    'secure PDF conversion',
    'privacy PDF tool',
    'open source PDF converter',
    'PDF to MD',
    'convert PDF',
    'markdown export',
    'no upload PDF converter',
    'offline PDF tool',
    'extract PDF text',
    'PDF to text',
    'PDF to markdown online',
    'PDF to markdown free unlimited',
    'PDF to markdown secure',
    'PDF to markdown browser',
  ],
  authors: [{ name: 'Michael Ryaboy' }],
  creator: 'Michael Ryaboy',
  publisher: 'Michael Ryaboy',
  applicationName: 'PDF to Markdown Converter',
  category: 'Utilities',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://pdftomarkdown.co/',
  },
  openGraph: {
    title: 'PDF to Markdown Converter – Free Unlimited, Secure, 100% Browser-Based',
    description:
      'Convert PDF files to Markdown instantly in your browser. 100% privacy: your files never leave your device. Supports headings, tables, lists, and more. Fast, free unlimited, and secure PDF to Markdown conversion tool.',
    url: 'https://pdftomarkdown.co/',
    siteName: 'PDF to Markdown Converter',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'PDF to Markdown Converter',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PDF to Markdown Converter – Free Unlimited, Secure, 100% Browser-Based',
    description:
      'Convert PDF files to Markdown instantly in your browser. 100% privacy: your files never leave your device. Supports headings, tables, lists, and more. Fast, free unlimited, and secure PDF to Markdown conversion tool.',
    images: ['/og.png'],
    creator: '@michaelchomsky',
    site: '@michaelchomsky',
  },
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📄</text></svg>',
    shortcut: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📄</text></svg>',
    apple: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📄</text></svg>',
  },
  metadataBase: new URL('https://pdftomarkdown.co'),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <ErrorBoundary>
          {children}
        </ErrorBoundary>
        <Toaster richColors />
        <Analytics />
      </body>
    </html>
  )
}
