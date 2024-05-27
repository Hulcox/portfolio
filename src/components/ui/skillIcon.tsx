"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";

const SkillIcon = ({
  text,
  icon,
  color,
}: {
  text: string;
  icon: any;
  color?: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const characters = useMemo(() => text.split(""), [text]);

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onTapStart={() => setIsHovered(true)}
      onTap={() => setIsHovered(false)}
      className="flex gap-4 items-center cursor-pointer"
    >
      <motion.div
        animate={
          isHovered ? { scale: 1.2, color: color } : { scale: 1, color: "" }
        }
        className="flex aspect-square cursor-pointer items-center justify-center rounded-full bg-primary text-primary-foreground h-10 w-10"
      >
        {icon}
      </motion.div>
      <p className="flex justify-center space-x-1">
        <AnimatePresence>
          {characters.map((char, i) => (
            <motion.span
              key={i}
              animate={{
                color: isHovered ? color : "",
                scale: isHovered ? 1.2 : 1,
              }}
              transition={{
                yoyo: Infinity,
                duration: 0.1,
                delay: i * 0.01,
              }}
              className={cn("font-display text-center tracking-[-0.15em]")}
            >
              {char}
            </motion.span>
          ))}
        </AnimatePresence>
      </p>
    </motion.div>
  );
};

export default SkillIcon;
