import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function formatCurrencyINR(value, options = {}) {
  const { maximumFractionDigits = 0, minimumFractionDigits = 0 } = options;
  return `₹${Number(value || 0).toLocaleString("en-IN", {
    maximumFractionDigits,
    minimumFractionDigits,
  })}`;
}
