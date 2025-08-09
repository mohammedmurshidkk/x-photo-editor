import { SignUp } from '@clerk/nextjs';
import React from 'react';
import { clerkTheme } from '@/app/clerk-theme';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const SignUpPage = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen">
      <Button
        asChild
        variant="ghost"
        className="absolute top-4 left-4"
      >
        <Link href="/">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Link>
      </Button>
      <SignUp appearance={clerkTheme} />
    </div>
  );
};

export default SignUpPage;
