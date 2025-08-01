import { cn } from "@/lib/utils";
import React from "react";

interface BorderBeamInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  containerClassName?: string;
}

export const BorderBeamInput = React.forwardRef<
  HTMLInputElement,
  BorderBeamInputProps
>(({ className, containerClassName, ...props }, ref) => {
  return (
    <div
      className={cn(
        "group relative w-full",
        containerClassName
      )}
    >
      <div
        className="absolute -inset-[1.5px] rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 transition-opacity duration-300 group-focus-within:opacity-100"
        aria-hidden="true"
      />
      <input
        ref={ref}
        className={cn(
          "relative w-full rounded-lg border border-transparent bg-background px-4 py-2 text-base text-foreground transition-shadow duration-200 placeholder:text-muted-foreground focus:outline-none focus:shadow-[0_0_0_2px_hsl(var(--background))]",
          className
        )}
        {...props}
      />
    </div>
  );
});

BorderBeamInput.displayName = "BorderBeamInput";
