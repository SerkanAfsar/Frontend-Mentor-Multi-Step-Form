import clsx from "clsx";
import { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...args: ClassValue[]) => {
  return twMerge(clsx(args));
};

export function GetProperty<T extends object, K extends keyof T>(
  obj: T,
  key: K,
) {
  return obj[key];
}
