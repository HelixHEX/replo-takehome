import { type ClassValue, clsx } from "clsx";
import { SyntheticEvent, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const useScrollTop = (): {
  ref: React.RefObject<HTMLDivElement>;
  onScroll: () => void;
  scrollTop: number;
} => {
  const ref = useRef<HTMLDivElement>(null);
  const [scrollTop, setScrollTop] = useState(0);

  const onScroll = () => {
    console.log("onScroll");
    if (ref.current) {
      setScrollTop(ref.current.scrollTop);
    }
  };

  return { ref, onScroll, scrollTop };
};
