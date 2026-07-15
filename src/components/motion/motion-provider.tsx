"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

export const MotionDiv = motion.div;
export const MotionSection = motion.section;

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export type MotionDivProps = HTMLMotionProps<"div">;
