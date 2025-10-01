import React from 'react';
import { cn } from '../../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const buttonVariants = {
  primary: 'bg-[var(--m3-sys-color-primary)] text-[var(--m3-sys-color-on-primary)] hover:bg-[var(--m3-sys-color-primary)]/90',
  secondary: 'bg-[var(--m3-sys-color-secondary)] text-[var(--m3-sys-color-on-secondary)] hover:bg-[var(--m3-sys-color-secondary)]/90',
  outline: 'border border-[var(--m3-sys-color-outline)] text-[var(--m3-sys-color-on-surface)] hover:bg-[var(--m3-sys-color-surface-container)]',
  ghost: 'hover:bg-[var(--m3-sys-color-surface-container)] text-[var(--m3-sys-color-on-surface)]',
};

const buttonSizes = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
};

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}) => {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-[var(--m3-sys-shape-corner-medium)] font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--m3-sys-color-primary)]/20 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
        buttonVariants[variant],
        buttonSizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};