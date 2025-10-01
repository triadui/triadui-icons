import { type ClassValue, clsx } from 'clsx';

/**
 * Utility function to concatenate class names conditionally
 * Uses clsx for combining class names
 * 
 * @param inputs - Class values to combine
 * @returns Combined class string
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}