import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from 'sonner'
import FloatingShapes from '@/components/floating-shapes'
import { ConvexClientProvider } from './convex-client-provider'
import { ClerkProvider } from '@clerk/nextjs'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata = {
  title: 'X-Photo Editor',
  description:
    'An open-source AI-powered image editor built with Next.js, Convex (real-time database), and Clerk (authentication). A learning project for modern full-stack web development.',
  keywords:
    'AI photo editor, image editing, Next.js, Convex, Clerk, React, open source, learning project, full-stack, real-time, Shadcn UI, Framer Motion, Vercel, JavaScript, TypeScript, web development',
  openGraph: {
    title: 'X-Photo Editor | AI-Powered Image Editing',
    description:
      'An open-source AI-powered image editor built with Next.js, Convex, and Clerk. A learning project for modern full-stack web development.',
    url: process.env.NEXT_PUBLIC_PROJECT_URL,
    siteName: 'X-Photo Editor',
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_PROJECT_URL}/og-image.png`, // Replace with a relevant OG image
        width: 1200,
        height: 630,
        alt: 'X-Photo Editor - AI-Powered Image Editing',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'X-Photo Editor | AI-Powered Image Editing',
    description:
      'An open-source AI-powered image editor built with Next.js, Convex, and Clerk. A learning project for modern full-stack web development.',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ClerkProvider>
            <ConvexClientProvider>
              <main className="bg-slate-900 min-h-screen text-white overflow-x-hidden">
                <FloatingShapes />
                <Toaster richColors />
                {children}
              </main>
            </ConvexClientProvider>
          </ClerkProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
