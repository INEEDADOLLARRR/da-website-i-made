import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '../../utils';

export interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  children: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({ children, className, variant = 'primary', fullWidth, ...props }: ButtonProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "relative group overflow-hidden rounded-full px-8 py-3.5 font-medium transition-all duration-300",
        fullWidth ? "w-full" : "w-auto",
        variant === 'primary' && "bg-primary text-white shadow-lg shadow-zinc-500/25",
        variant === 'secondary' && "bg-white text-primary border border-zinc-200 shadow-sm hover:border-zinc-300",
        className
      )}
      {...props}
    >
      {variant === 'primary' && (
        <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-10" />
      )}
      <span className="relative z-20 flex items-center justify-center gap-2">
        {children}
      </span>
    </motion.button>
  );
};