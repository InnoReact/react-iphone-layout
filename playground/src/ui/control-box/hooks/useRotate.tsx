import { useEffect, useRef } from "react";

const IPHONE_PORTRAIT_MODE = 0; // 세로 모드
const IPHONE_LANDSCAPE_MODE = -90; // 가로 모드

export const useRotate = () => {
  const iPhoneModeRef = useRef(IPHONE_PORTRAIT_MODE);

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--iphone-mode",
      `${IPHONE_PORTRAIT_MODE}deg`
    );
  }, []);

  const handleRotate = () => {
    if (iPhoneModeRef.current === IPHONE_PORTRAIT_MODE) {
      // 가로 모드로 변경
      iPhoneModeRef.current = IPHONE_LANDSCAPE_MODE;
      document.documentElement.style.setProperty(
        "--iphone-mode",
        `${IPHONE_LANDSCAPE_MODE}deg`
      );
    } else {
      // 세로 모드로 변경
      iPhoneModeRef.current = IPHONE_PORTRAIT_MODE;
      document.documentElement.style.setProperty(
        "--iphone-mode",
        `${IPHONE_PORTRAIT_MODE}deg`
      );
    }
  };

  return { handleRotate };
};
