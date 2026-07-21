"use client";
import { animate, motion, useInView, useMotionValue, useScroll, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0 }}
      animate={{ filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
export function MotionCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -6, rotateX: 1.5, rotateY: -1.5 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
export function FloatingIcon({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
export function AnimatedStat({ value }: { value: string }) {
  const number = Number.parseFloat(value.replace(/[^\d.]/g, ""));
  const suffix = value.replace(/[\d.]/g, "");
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);
  const [display, setDisplay] = useState(value);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const motionValue = useMotionValue(0);
  useEffect(() => {
    if (!Number.isFinite(number) || !isInView || hasAnimated.current) return;
    hasAnimated.current = true;
    const unsubscribe = motionValue.on("change", (latest) => {
      setDisplay(`${Math.round(latest)}${suffix}`);
    });
    const controls = animate(motionValue, number, { duration: 1.2, ease: [0.22, 1, 0.36, 1] });
    return () => {
      unsubscribe();
      controls.stop();
      setDisplay(value);
    };
  }, [isInView, motionValue, number, suffix, value]);
  return <span ref={ref}>{display}</span>;
}
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });
  return (
    <motion.div
      className="fixed left-0 top-0 z-50 h-1 origin-left bg-gradient-to-r from-primary to-accent"
      style={{ scaleX }}
    />
  );
}
