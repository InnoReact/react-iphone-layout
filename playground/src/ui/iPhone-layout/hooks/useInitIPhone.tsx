import { useEffect, useRef } from "react";

export function useInitIPhone(defaultSize: number) {
  const iPhoneSizeRef = useRef<number>(defaultSize);
  const iPhoneLayoutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--iphone-size",
      `${defaultSize}%`
    );
  }, [defaultSize]);

  return { iPhoneLayoutRef, iPhoneSizeRef };
}
