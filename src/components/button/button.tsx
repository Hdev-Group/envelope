import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center cursor-pointer justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {

        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",

        compose: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm",
        reply: "border border-primary/20 bg-primary/10 text-primary hover:bg-primary/20",
        archive: "border border-accent/50 bg-accent/30 text-accent-foreground hover:bg-accent/50",
        delete: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        spam: "border border-destructive/20 bg-destructive/10 text-destructive hover:bg-destructive/20",
        star: "border border-yellow-500/20 bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 hover:bg-yellow-500/20",
        flag: "border border-purple-500/20 bg-purple-500/10 text-purple-600 dark:text-purple-400 hover:bg-purple-500/20",
        send: "bg-green-600 text-white hover:bg-green-700 shadow-sm",
        draft: "border border-muted-foreground/20 bg-muted text-muted-foreground hover:bg-muted/80",

        "cta-primary":
          "bg-gradient-to-r from-primary to-primary/80 text-primary-foreground hover:from-primary/90 hover:to-primary/70 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200",
        "cta-secondary":
          "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200",
        "cta-success":
          "bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:from-green-600 hover:to-emerald-600 shadow-lg",
        "cta-warning":
          "bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600 shadow-lg",

        "header-nav": "text-foreground/70 hover:text-foreground hover:bg-accent/50 rounded-lg",
        "header-user": "border border-border bg-card hover:bg-accent shadow-sm",
        "header-search": "bg-muted text-muted-foreground hover:bg-muted/80 border-0",
        "header-mobile": "text-muted-foreground hover:text-foreground hover:bg-accent/50",

        "hero-primary":
          "bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300",
        "hero-secondary":
          "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-4 rounded-xl transition-all duration-300",
        feature:
          "bg-card border border-border text-card-foreground hover:border-border/80 hover:shadow-md transition-all duration-200",
        pricing: "w-full bg-primary text-primary-foreground hover:bg-primary/90 py-3 rounded-lg font-semibold",
        "pricing-popular":
          "w-full bg-gradient-to-r from-primary to-accent text-primary-foreground hover:from-primary/90 hover:to-accent/90 py-3 rounded-lg font-semibold shadow-lg",

        floating: "rounded-full shadow-lg hover:shadow-xl transition-shadow duration-200 bg-primary text-primary-foreground hover:bg-primary/90",
        glass: "bg-background/20 hover:bg-background/30 backdrop-blur-sm border border-border/30 text-foreground",
        minimal: "text-muted-foreground hover:text-foreground underline decoration-2 underline-offset-4",
        badge: "bg-muted text-muted-foreground hover:bg-muted/80 text-xs px-2 py-1 rounded-full",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        xl: "h-14 rounded-lg px-10 text-base",
        icon: "h-10 w-10",
        "icon-sm": "h-8 w-8",
        "icon-lg": "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  href?: string
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, href, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    if (href) {
      return (
        <a href={href} className={cn(buttonVariants({ variant, size, className }))}>
          {props.children}
        </a>
      );
    }
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button"

export { Button, buttonVariants }
