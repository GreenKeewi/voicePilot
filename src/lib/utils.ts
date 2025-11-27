// Tremor Raw cx [v0.0.0]

import clsx, { type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cx(...args: ClassValue[]) {
  return twMerge(clsx(...args))
}

// Tremor Raw focusInput [v0.0.1]

export const focusInput = [
  // base
  "focus:ring-2",
  // ring color
  "focus:ring-blue-200 dark:focus:ring-blue-700/30",
  // border color
  "focus:border-blue-500 dark:focus:border-blue-700",
]

// Tremor Raw focusRing [v0.0.1]

export const focusRing = [
  // base
  "outline outline-offset-2 outline-0 focus-visible:outline-2",
  // outline color
  "outline-blue-500 dark:outline-blue-500",
]

// Tremor Raw hasErrorInput [v0.0.1]

export const hasErrorInput = [
  // base
  "ring-2",
  // border color
  "border-red-500 dark:border-red-700",
  // ring color
  "ring-red-200 dark:ring-red-700/30",
]

// Parse a price string like "$1,499" or "$7,500+" and return a discounted
// formatted price preserving currency symbol and trailing plus sign.
export function applyDiscountToPriceString(priceStr: string, discount = 0.2) {
  if (!priceStr || typeof priceStr !== "string") return priceStr

  // Capture currency symbol (e.g., $), number part, and optional trailing +
  const m = priceStr.match(/^([^\d]*)([\d,\.]+)([^\d]*)$/)
  if (!m) return priceStr

  const [, currency = "", numberPart, trailing = ""] = m

  // Remove commas and parse number
  const numeric = parseFloat(numberPart.replace(/,/g, ""))
  if (Number.isNaN(numeric)) return priceStr

  const discounted = Math.round(numeric * (1 - discount))

  // Format with commas
  const formatted = discounted.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

  return `${currency}${formatted}${trailing}`
}
