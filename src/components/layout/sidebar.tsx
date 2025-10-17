"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useTheme } from "next-themes";
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
} from "@/components/ui/sidebar";
import {
  ScanSearch,
  LayoutDashboard,
  FileText,
  Settings,
  CircleHelp,
  Users,
  FlaskConical,
  Library,
  LineChart,
  Mail,
  Moon,
  Sun,
  Monitor,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const navItems = [
  { href: "/", icon: <LayoutDashboard />, label: "Dashboard" },
  { href: "/case-analysis", icon: <ScanSearch />, label: "Case Dossier" },
  { href: "/report", icon: <FileText />, label: "Dossier Report" },
  { href: "/evidence", icon: <Library />, label: "Evidence" },
];

const tools = [
  { href: "/witness-analysis", icon: <Users />, label: "Witness Analysis" },
  { href: "/suspect-ranking", icon: <LineChart />, label: "Suspect Ranking" },
  { href: "/weapon-inference", icon: <FlaskConical />, label: "Weapon Inference" },
]

export function AppSidebar() {
  const pathname = usePathname();
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isSupportOpen, setIsSupportOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <>
      <Sidebar>
        <SidebarHeader>
          <div className="flex items-center gap-2 p-2">
            <ScanSearch className="h-8 w-8 text-sidebar-primary" />
            <h1 className="text-xl font-semibold text-sidebar-foreground">
              Forensica AI
            </h1>
          </div>
        </SidebarHeader>
        <SidebarContent className="p-2">
          <SidebarMenu>
            <p className="text-xs text-sidebar-foreground/50 font-medium uppercase px-2 py-1">Main</p>
            {navItems.map((item) => (
              <SidebarMenuItem key={item.href}>
                <SidebarMenuButton
                    asChild
                    isActive={pathname === item.href}
                    tooltip={{ children: item.label }}
                  >
                  <Link href={item.href}>
                    {item.icon}
                    <span>{item.label}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
           <SidebarMenu>
            <p className="text-xs text-sidebar-foreground/50 font-medium uppercase px-2 py-1 mt-4">Tools</p>
            {tools.map((item) => (
              <SidebarMenuItem key={item.href}>
                <SidebarMenuButton
                    asChild
                    isActive={pathname === item.href}
                    tooltip={{ children: item.label }}
                  >
                  <Link href={item.href}>
                    {item.icon}
                    <span>{item.label}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter>
           <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton tooltip={{children: 'Settings'}} onClick={() => setIsSettingsOpen(true)}>
                  <Settings />
                  <span>Settings</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton tooltip={{children: 'Support'}} onClick={() => setIsSupportOpen(true)}>
                  <CircleHelp />
                  <span>Support</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
      
      <Dialog open={isSettingsOpen} onOpenChange={setIsSettingsOpen}>
        <DialogContent>
            <DialogHeader>
              <DialogTitle>Settings</DialogTitle>
              <DialogDescription>
                Customize the appearance and behavior of the application.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-6 py-6">
              <div className="grid gap-3">
                <Label>Appearance</Label>
                <RadioGroup
                  defaultValue={theme}
                  onValueChange={setTheme}
                  className="grid grid-cols-3 gap-2"
                >
                  <div>
                    <RadioGroupItem value="light" id="light" className="peer sr-only" />
                    <Label
                      htmlFor="light"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                    >
                      <Sun className="mb-2 h-5 w-5" />
                      Light
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem value="dark" id="dark" className="peer sr-only" />
                    <Label
                      htmlFor="dark"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                    >
                      <Moon className="mb-2 h-5 w-5" />
                      Dark
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem value="system" id="system" className="peer sr-only" />
                    <Label
                      htmlFor="system"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                    >
                      <Monitor className="mb-2 h-5 w-5" />
                      System
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
        </DialogContent>
      </Dialog>

      <Dialog open={isSupportOpen} onOpenChange={setIsSupportOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Support</DialogTitle>
            <DialogDescription>
              For any support inquiries, please contact the creator.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-4 py-4">
             <p className="text-sm text-muted-foreground">
                You can reach out via email for any questions, feedback, or issues.
             </p>
             <Button variant="outline" asChild>
                <a href="mailto:redsleve074@gmail.com">
                    <Mail className="mr-2 h-4 w-4" />
                    redsleve074@gmail.com
                </a>
             </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
