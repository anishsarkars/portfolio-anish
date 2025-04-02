import React from "react";
import { cn } from "@/lib/utils";

export interface BentoGridProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export interface BentoCardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  title: string;
  description?: string;
  icon?: React.ReactNode;
  header?: React.ReactNode;
  cta?: string;
  href?: string;
  target?: string;
  isFeatured?: boolean;
}

export function BentoGrid({ className, children, ...props }: BentoGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-max",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function BentoCard({
  className,
  title,
  description,
  icon,
  header,
  cta,
  href,
  target,
  isFeatured,
  ...props
}: BentoCardProps) {
  return (
    <div
      className={cn(
        "group/bento row-span-1 rounded-xl p-4 border backdrop-blur-md bg-background/30 hover:bg-background/50 transition duration-300 ease-in-out shadow-sm",
        isFeatured && "md:col-span-2",
        className
      )}
      {...props}
    >
      {header ? header : null}
      <div className="flex flex-col h-full justify-between gap-2">
        <div>
          {icon && <div className="mb-2 mt-2">{icon}</div>}
          <h3 className="font-bold text-lg tracking-tight">{title}</h3>
          {description && (
            <div className="text-sm text-muted-foreground">{description}</div>
          )}
        </div>
        {cta && (
          <div className="flex items-center justify-between">
            {href ? (
              <a
                href={href}
                target={target}
                className="text-sm font-medium text-primary group-hover/bento:underline"
              >
                {cta}
              </a>
            ) : (
              <div className="text-sm font-medium text-primary">{cta}</div>
            )}
            {href && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary opacity-0 group-hover/bento:opacity-100 transition-opacity ml-1"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            )}
          </div>
        )}
      </div>
    </div>
  );
} 