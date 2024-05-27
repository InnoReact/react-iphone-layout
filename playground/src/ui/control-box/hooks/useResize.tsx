export const useResize = (
  iPhoneLayoutRef: React.RefObject<HTMLDivElement>,
  iPhoneSizeRef: React.MutableRefObject<number>,
  minSize: number,
  maxSize: number
) => {
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

  return { handleSizeUp, handleSizeDown };
};
