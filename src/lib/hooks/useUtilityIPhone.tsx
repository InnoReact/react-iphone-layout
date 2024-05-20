import { useEffect, useRef } from "react";

export const useUtilityIPhone = (
  minSize: number,
  defaultSize: number,
  maxSize: number
) => {
  const iPhoneSizeRef = useRef<number>(defaultSize);
  const iPhoneLayoutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--iphone-size",
      `${defaultSize}%`
    );
  }, [defaultSize]);

  const changeStyle = () => {
    if (iPhoneLayoutRef.current) {
      iPhoneLayoutRef.current.style.height = `${iPhoneSizeRef.current}%`;
      document.documentElement.style.setProperty(
        "--iphone-size",
        `${iPhoneSizeRef.current}%`
      );
    }
  };

  const handleSizeUp = () => {
    if (iPhoneSizeRef.current >= maxSize) return;

    iPhoneSizeRef.current += 1;
    changeStyle();
  };

  const handleSizeDown = () => {
    if (iPhoneSizeRef.current <= minSize) return;

    iPhoneSizeRef.current -= 1;
    changeStyle();
  };

  return { iPhoneLayoutRef, handleSizeUp, handleSizeDown };
};
