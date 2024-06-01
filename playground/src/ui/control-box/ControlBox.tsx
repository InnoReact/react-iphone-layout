import IPhoneIcon from "./assets/iphone.svg?react";
import LaptopIcon from "./assets/laptop.svg?react";
import RotationIcon from "./assets/rotation.svg?react";
import PlusIcon from "./assets/plus.svg?react";
import MinusIcon from "./assets/minus.svg?react";

import "./ControlBox.css";
import "./Position.css";
import { useResize } from "./hooks/useResize";

interface ControlBoxProps {
  position: "top" | "right" | "bottom" | "left";
  mode: "iPhone" | "laptop";
  iPhoneLayoutRef: React.RefObject<HTMLDivElement>;
  iPhoneSizeRef: React.MutableRefObject<number>;
  minSize: number;
  maxSize: number;
  handleChangeMode: (newMode: "iPhone" | "laptop") => void;
}

export const ControlBox: React.FC<ControlBoxProps> = ({
  position,
  mode,
  iPhoneLayoutRef,
  iPhoneSizeRef,
  minSize,
  maxSize,
  handleChangeMode,
}) => {
  const { handleSizeUp, handleSizeDown } = useResize(
    iPhoneLayoutRef,
    iPhoneSizeRef,
    minSize,
    maxSize
  );

  if (mode === "laptop") {
    return (
      <div className="laptop__mode">
        <button
          className="iPhone-active-btn"
          onClick={() => handleChangeMode("iPhone")}
        >
          <IPhoneIcon className="iphone-icon" width="64" height="64" />
        </button>
      </div>
    );
  }

  return (
    <aside className={`ril-control-box position__${position}`}>
      <ul className="ril-control-list">
        <li
          className="ril-control-item"
          onClick={() => handleChangeMode("iPhone")}
        >
          <IPhoneIcon
            className={`iphone-icon ${
              mode === "iPhone" ? "iPhone_focus_mode" : ""
            }`}
          />
        </li>
        <li
          className="ril-control-item"
          onClick={() => handleChangeMode("laptop")}
        >
          <LaptopIcon className="laptop-icon" />
        </li>
        <li className="ril-control-item">
          <RotationIcon className="rotation-icon" />
        </li>
        <li className="ril-control-item" onClick={handleSizeUp}>
          <PlusIcon className="plus-icon" />
        </li>
        <li className="ril-control-item" onClick={handleSizeDown}>
          <MinusIcon className="minus-icon" />
        </li>
      </ul>
    </aside>
  );
};
