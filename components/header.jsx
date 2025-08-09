'use client'

import { SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import { Button } from './ui/button'
import useStoreUserEffect from '@/hooks/use-store-user-effect'
import { BarLoader } from 'react-spinners'
import { Authenticated, Unauthenticated } from 'convex/react'
import { motion } from 'framer-motion'
import { LayoutDashboard } from 'lucide-react'
import { clerkTheme } from '@/app/clerk-theme'

const navLinks = [
  { href: '#features', label: 'Features' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#contact', label: 'Contact' },
]

function Header() {
  const pathname = usePathname()
  const { isLoading } = useStoreUserEffect()
  const [active, setActive] = useState('')

  return (
    <header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 text-nowrap w-[90%] md:w-auto">
      <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-full px-4 md:px-8 py-2 md:py-3 flex items-center justify-between gap-8">
        <Link href="/" className="mr-10 md:mr-20">
          <span className="font-extrabold text-4xl font-stretch-200%">X</span>
        </Link>

        {pathname === '/' && (
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setActive(link.label)}
                className={`relative font-medium transition-all duration-300 cursor-pointer ${
                  active === link.label
                    ? 'text-cyan-400'
                    : 'text-white hover:text-cyan-400'
                }`}
              >
                {link.label}
                {active === link.label && (
                  <motion.span
                    layoutId="active-pill"
                    className="absolute inset-x-0 bottom-[-8px] h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
                    transition={{
                      type: 'spring',
                      stiffness: 300,
                      damping: 25,
                    }}
                  />
                )}
              </Link>
            ))}
          </div>
        )}

        <div className="flex items-center gap-3 ml-10 md:ml-20">
          <Authenticated>
            <Link href="/dashboard">
              <Button
                variant="glass"
                className="flex w-8 h-8 md:h-auto md:w-auto"
              >
                <LayoutDashboard className="h-4 w-4" />
                <span className="hidden md:flex">Dashboard</span>
              </Button>
            </Link>

            <UserButton
              appearance={{
                ...clerkTheme,
                elements: {
                  avatarBox: 'w-10 h-10 rounded-lg border border-white/20',
                  userButtonPopoverCard:
                    'shadow-xl backdrop-blur-md bg-slate-900/90 border border-white/20',
                  userPreviewMainIdentifier: 'font-semibold text-white',
                },
              }}
              afterSignOutUrl="/"
            />
          </Authenticated>

          <Unauthenticated>
            <SignInButton>
              <Button variant="glass" className="flex">
                Sign In
              </Button>
            </SignInButton>

            <SignUpButton>
              <Button variant="primary">Get Started</Button>
            </SignUpButton>
          </Unauthenticated>
        </div>

        {isLoading && (
          <div className="fixed bottom-0 left-0 w-full z-40 flex justify-center">
            <BarLoader width="90%" />
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
