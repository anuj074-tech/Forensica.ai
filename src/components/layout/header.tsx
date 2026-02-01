'use client';

import {SidebarTrigger} from '@/components/ui/sidebar';
import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {Button} from '@/components/ui/button';
import {useUser, useAuth} from '@/firebase';
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import {Loader2, LogIn} from 'lucide-react';
import {useToast} from '@/hooks/use-toast';

export function AppHeader() {
  const {user, loading} = useUser();
  const auth = useAuth();
  const {toast} = useToast();

  const handleSignIn = async () => {
    if (!auth) return;
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      toast({
        title: 'Signed In',
        description: `Welcome back, ${result.user.displayName}!`,
      });
    } catch (error: any) {
      if (error.code === 'auth/unauthorized-domain') {
        toast({
          variant: 'destructive',
          title: 'Sign In Failed',
          description:
            "This app's domain is not authorized for sign-in. Please check your Firebase project's settings.",
          duration: 9000,
        });
      } else if (error.code === 'auth/popup-closed-by-user') {
        toast({
          title: 'Sign In Cancelled',
          description: 'You closed the sign-in window.',
        });
      } else {
        toast({
          variant: 'destructive',
          title: 'An Error Occurred',
          description: error.message || 'Could not sign in with Google. Please try again.',
        });
      }
    }
  };

  const handleSignOut = async () => {
    if (!auth) return;
    try {
      await signOut(auth);
      toast({
        title: 'Signed Out',
        description: 'You have been successfully signed out.',
      });
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: 'Sign Out Failed',
        description: error.message || 'Could not sign out. Please try again.',
      });
    }
  };

  return (
    <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <SidebarTrigger className="md:hidden" />
      <div className="flex w-full items-center justify-end gap-4">
        {loading ? (
          <Loader2 className="h-6 w-6 animate-spin" />
        ) : user ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage
                    src={
                      user.photoURL ||
                      `https://picsum.photos/seed/${user.uid}/40/40`
                    }
                    alt={user.displayName || 'User'}
                  />
                  <AvatarFallback>
                    {user.displayName?.charAt(0) || 'U'}
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">
                    {user.displayName}
                  </p>
                  <p className="text-xs leading-none text-muted-foreground">
                    {user.email}
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleSignOut}>Log out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Button onClick={handleSignIn}>
            <LogIn className="mr-2 h-4 w-4" />
            Sign In with Google
          </Button>
        )}
      </div>
    </header>
  );
}
