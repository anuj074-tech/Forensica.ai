
import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type DashboardCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  imageUrl?: string;
  imageHint?: string;
  href: string;
};

export function DashboardCard({
  title,
  description,
  icon: Icon,
  imageUrl,
  imageHint,
  href,
}: DashboardCardProps) {
  return (
    <Link href={href} className="group block">
      <Card className="h-full overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1">
        {imageUrl && (
          <div className="relative h-40 w-full overflow-hidden">
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              data-ai-hint={imageHint}
            />
          </div>
        )}
        <CardHeader className="flex flex-row items-start gap-4 space-y-0">
            <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                </div>
            </div>
            <div className="flex-1">
                <CardTitle className="text-lg">{title}</CardTitle>
                <CardDescription className="mt-1">{description}</CardDescription>
            </div>
        </CardHeader>
      </Card>
    </Link>
  );
}

    