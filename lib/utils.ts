import { clsx, type ClassValue } from "clsx"
import { Children } from "react"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function EachElement<T>({ of, render }: { of: T[], render: (item: T, index: number) => React.ReactNode }) {
  return Children.toArray(of.map(render));
}


export function calculateExperience(startDate) {
  const start = new Date(startDate);
  const now = new Date();

  let years = now.getFullYear() - start.getFullYear();
  let months = now.getMonth() - start.getMonth();

 
  if (now.getDate() < start.getDate()) {
    months--;
  }

  // ถ้าเดือนติดลบ ให้ยืมปี
  if (months < 0) {
    years--;
    months += 12;
  }

  return { years, months };
}
