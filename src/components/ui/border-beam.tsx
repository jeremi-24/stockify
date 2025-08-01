"use client";

import { cn } from "@/lib/utils";
import React, { FC, useEffect, useRef, useState } from "react";

interface BorderBeamProps {
  className?: string;
  children: React.ReactNode;
  colorFrom?: string;
  colorTo?: string;
  duration?: number;
  delay?: number;
}

export const BorderBeam: FC<BorderBeamProps> = ({
  className,
  children,
  colorFrom = "#10B981", // Emerald-500
  colorTo = "#34D399",   // Emerald-400
  duration = 5,
  delay = 0,
}) => {
  const [path, setPath] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const { width, height } = containerRef.current.getBoundingClientRect();
      setPath(
        `M${width},0 H0 V${height} H${width} V0 Z`
      );
    }
  }, []);

  return (
    <div
      ref={containerRef}
      style={
        {
          "--duration": `${duration}s`,
          "--delay": `${delay}s`,
          "--color-from": colorFrom,
          "--color-to": colorTo,
        } as React.CSSProperties
      }
      className={cn(
        "relative w-full h-full p-px rounded-[inherit] [border:calc(1px)_solid_transparent] [background:linear-gradient(to_right,hsl(var(--primary)),hsl(var(--primary)))_padding-box,var(--border-beam)_border-box]",
        className
      )}
    >
      <svg
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        width="100%"
        height="100%"
        viewBox={`0 0 ${containerRef.current?.clientWidth || 0} ${containerRef.current?.clientHeight || 0}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d={path}
          stroke="url(#border-beam-gradient)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            offsetPath: `path("${path}")`,
            animation: "border-beam var(--duration) linear var(--delay) infinite",
          }}
        />
        <defs>
          <linearGradient
            id="border-beam-gradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="var(--color-from)" />
            <stop offset="1" stopColor="var(--color-to)" />
          </linearGradient>
        </defs>
      </svg>
      {children}
    </div>
  );
};
