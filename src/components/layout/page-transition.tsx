"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

import { MotionDiv } from "@/components/motion/motion-provider";

export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <MotionDiv
      key={pathname}
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionDiv>
  );
}
