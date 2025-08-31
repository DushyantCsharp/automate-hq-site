"use client";
import { motion } from "framer-motion";
export function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return <motion.div initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.2}} transition={{duration:.6,ease:"easeOut",delay}}>{children}</motion.div>;
}
export function PageFade({ children }: { children: React.ReactNode }) {
  return <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:.4}}>{children}</motion.div>;
}
