"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, Variants, motion } from "framer-motion";
import { useState } from "react";

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
  return (
    <div className="flex gap-4 items-center">
      <motion.div
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onTapStart={() => setIsHovered(true)}
        onTap={() => setIsHovered(false)}
        whileHover={{ scale: 1.3, color: color ? color : "" }}
        whileTap={{ scale: 1.3, color: color ? color : "" }}
        className="flex aspect-square cursor-pointer items-center justify-center rounded-full bg-primary text-primary-foreground h-10 w-10"
      >
        {icon}
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        className="font-thin"
      >
        {text}
      </motion.p>
    </div>
  );
};

export default SkillIcon;
