import { useUtilityIPhone } from "../hooks/useUtilityIPhone";

import iPhoneStatus from "/assets/image/iPhone_status.png";
import "./IPhoneLayout.scss";

interface IPhoneLayoutProps {
  children: JSX.Element | JSX.Element[];
  isStatusBar?: boolean;

  isDynamicSize?: boolean;
  minSize?: number;
  defaultSize?: number;
  maxSize?: number;
}

export const IPhoneLayout: React.FC<IPhoneLayoutProps> = ({
  children,
  isStatusBar = true,
  isDynamicSize = false,
  minSize = 60,
  defaultSize = 75,
  maxSize = 100,
}) => {
  const { iPhoneLayoutRef, handleSizeDown, handleSizeUp } = useUtilityIPhone(
    minSize,
    defaultSize,
    maxSize
  );

  return (
    <div className="root-layout">
      <div ref={iPhoneLayoutRef} className="iPhone-layout">
        <div className="client-area">
          {isStatusBar && <img className="iPhone-status" src={iPhoneStatus} />}
          {children}
        </div>

        {isDynamicSize && (
          <div className="iPhone-utility-container">
            <button className="size-down-btn" onClick={handleSizeDown}>
              -
            </button>
            <button className="size-up-btn" onClick={handleSizeUp}>
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
