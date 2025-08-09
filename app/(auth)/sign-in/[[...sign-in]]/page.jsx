import { SignIn } from '@clerk/nextjs';
import React from 'react';
import { clerkTheme } from '@/app/clerk-theme';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'X-Photo Editor | Sign In',
  description: 'Sign in to your X-Photo Editor account to access your AI-powered image editing projects. Secure authentication powered by Clerk.',
  keywords: 'sign in, login, authentication, Clerk, AI photo editor, image editing, Next.js',
};

const SignInPage = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen">
      <Button asChild variant="ghost" className="absolute top-4 left-4">
        <Link href="/">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Link>
      </Button>
      <SignIn appearance={clerkTheme} />
    </div>
  );
};

export default SignInPage;
