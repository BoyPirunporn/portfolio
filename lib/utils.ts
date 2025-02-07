import { clsx, type ClassValue } from "clsx"
import { Children } from "react"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function EachElement<T>({ of, render }: { of: T[], render: (item: T, index: number) => React.ReactNode }) {
  return Children.toArray(of.map(render));
}