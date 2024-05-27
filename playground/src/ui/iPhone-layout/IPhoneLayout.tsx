import { useInitIPhone } from "../../hooks/useInitIPhone";

import iPhoneStatus from "./assets/iPhone_status.png";
import { ControlBox } from "../control-box";
import "./IPhoneLayout.css";

interface IPhoneLayoutProps {
  children: React.ReactNode;
  isStatusBar?: boolean;
  position?: "top" | "right" | "bottom" | "left";
  mode?: "iPhone" | "laptop";

  minSize?: number;
  defaultSize?: number;
  maxSize?: number;
}

export function IPhoneLayout({
  children,
  isStatusBar = true,
  position = "top",
  mode = "iPhone",
  minSize = 60,
  defaultSize = 75,
  maxSize = 100,
}: IPhoneLayoutProps) {
  const { iPhoneLayoutRef, iPhoneSizeRef } = useInitIPhone(defaultSize);

  return (
    <>
      {mode === "iPhone" ? (
        <div className="ril-root">
          <div ref={iPhoneLayoutRef} className="ril-iphone">
            <div className="ril-client-area">
              {isStatusBar && (
                <img className="ril-status-bar" src={iPhoneStatus} />
              )}
              {children}
            </div>
          </div>
        </div>
      ) : (
        children
      )}
      <ControlBox
        position={position}
        iPhoneLayoutRef={iPhoneLayoutRef}
        iPhoneSizeRef={iPhoneSizeRef}
        mode={mode}
        minSize={minSize}
        maxSize={maxSize}
      />
    </>
  );
}
