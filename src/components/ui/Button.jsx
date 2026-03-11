import React from "react";
import { cn } from "../../lib/utils";

const Button = React.forwardRef(({ className, variant = "primary", size = "md", asChild = false, ...props }, ref) => {
    const variants = {
        primary: "bg-primary text-white hover:bg-accent shadow-soft",
        secondary: "bg-white text-primary border border-primary/10 hover:bg-secondary shadow-soft",
        outline: "bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-white",
        ghost: "bg-transparent text-primary hover:bg-secondary",
    };

    const sizes = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
    };

    const Comp = asChild ? "span" : "button"; // Simplified asChild logic

    return (
        <Comp
            className={cn(
                "inline-flex items-center justify-center rounded-2xl font-semibold transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed active:scale-95",
                variants[variant],
                sizes[size],
                className
            )}
            ref={ref}
            {...props}
        />
    );
});

Button.displayName = "Button";

export default Button;
