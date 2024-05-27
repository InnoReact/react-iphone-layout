import { useUtilityIPhone } from "../../hooks/useUtilityIPhone";

import iPhoneStatus from "./assets/iPhone_status.png";
import { ControlBox } from "../control-box";
import "./IPhoneLayout.css";

interface IPhoneLayoutProps {
  children: React.ReactNode;
  isStatusBar?: boolean;
  position?: "top" | "right" | "bottom" | "left";

  isDynamicSize?: boolean;
  minSize?: number;
  defaultSize?: number;
  maxSize?: number;
}

export function IPhoneLayout({
  children,
  isStatusBar = true,
  isDynamicSize = false,
  position = "top",
  minSize = 60,
  defaultSize = 75,
  maxSize = 100,
}: IPhoneLayoutProps) {
  const { iPhoneLayoutRef, handleSizeDown, handleSizeUp } = useUtilityIPhone(
    minSize,
    defaultSize,
    maxSize
  );

  return (
    <>
      <div className="ril-root">
        <div ref={iPhoneLayoutRef} className="ril-iphone">
          <div className="ril-client-area">
            {isStatusBar && (
              <img className="ril-status-bar" src={iPhoneStatus} />
            )}
            {children}
          </div>

          {isDynamicSize && (
            <div className="ril-utility-container">
              <button className="ril-btn-size-down" onClick={handleSizeDown}>
                -
              </button>
              <button className="ril-btn-size-up" onClick={handleSizeUp}>
                +
              </button>
            </div>
          )}
        </div>
      </div>
      <ControlBox position={position} />
    </>
  );
}
