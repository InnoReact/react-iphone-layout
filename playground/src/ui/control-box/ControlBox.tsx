import IPhoneIcon from "./assets/iPhone.svg?react";
import LaptopIcon from "./assets/laptop.svg?react";
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
          <LaptopIcon
            className={`laptop-icon ${
              mode === "laptop" ? "laptop_focus_mode" : ""
            }`}
          />
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
