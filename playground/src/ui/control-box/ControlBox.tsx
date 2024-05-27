import IPhoneIcon from "./assets/iPhone.svg?react";
import LaptopIcon from "./assets/laptop.svg?react";
import PlusIcon from "./assets/plus.svg?react";
import MinusIcon from "./assets/minus.svg?react";

import "./ControlBox.css";
import "./Position.css";
import { useResize } from "./hooks/useResize";

interface ControlBoxProps {
  position?: "top" | "right" | "bottom" | "left";
  iPhoneLayoutRef: React.RefObject<HTMLDivElement>;
  iPhoneSizeRef: React.MutableRefObject<number>;
  minSize: number;
  maxSize: number;
}

export const ControlBox: React.FC<ControlBoxProps> = ({
  position,
  iPhoneLayoutRef,
  iPhoneSizeRef,
  minSize,
  maxSize,
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
        <li className="ril-control-item">
          <IPhoneIcon className="iphone-icon" />
        </li>
        <li className="ril-control-item">
          <LaptopIcon className="laptop-icon" />
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
