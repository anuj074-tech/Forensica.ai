import { cn } from "@/lib/utils";

type PageHeaderProps = {
  title: string;
  description: string;
  className?: string;
  children?: React.ReactNode;
};

export function PageHeader({ title, description, className, children }: PageHeaderProps) {
  return (
    <div className={cn("mb-6 flex items-start justify-between", className)}>
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">{title}</h1>
        <p className="mt-1 text-muted-foreground">{description}</p>
      </div>
      {children}
    </div>
  );
}
