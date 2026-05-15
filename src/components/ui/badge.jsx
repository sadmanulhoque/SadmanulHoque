import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex w-fit shrink-0 items-center justify-center gap-1.5 rounded-md border px-3 py-1.5 text-sm font-medium whitespace-nowrap transition-all [&>svg]:pointer-events-none [&>svg]:shrink-0 [&>svg]:size-4",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground border-primary hover:bg-primary/80",
        secondary:
          "border-muted-foreground/40 bg-background text-foreground hover:bg-muted/50 hover:border-muted-foreground/60",
        destructive:
          "bg-destructive/10 text-destructive border-destructive/30 hover:bg-destructive/20",
        outline:
          "border-muted-foreground/40 bg-background text-foreground hover:bg-muted/50",
        ghost:
          "hover:bg-muted hover:text-muted-foreground border-transparent",
        link: "text-primary underline-offset-4 hover:underline border-transparent",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant = "default",
  ...props
}) {
  return (
    <span
      className={cn(badgeVariants({ variant }), className)}
      {...props} />
  );
}

export { Badge }
