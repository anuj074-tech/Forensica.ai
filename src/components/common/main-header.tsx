import React from "react";
import { SidebarTrigger } from "@/components/ui/sidebar";

type MainHeaderProps = {
  title: string;
};

export function MainHeader({ title }: MainHeaderProps) {
  return (
    <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b bg-background px-4 sm:px-6">
      <SidebarTrigger className="flex md:hidden" />
      <h1 className="font-headline text-xl font-semibold">{title}</h1>
    </header>
  );
}
