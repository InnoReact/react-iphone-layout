import { useEffect, useRef } from "react";

/**
 * iPhone 레이아웃의 크기를 동적으로 변경하는 훅입니다.
 * @returns iPhone 레이아웃의 참조와 사이즈 변경 핸들러
 */
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
