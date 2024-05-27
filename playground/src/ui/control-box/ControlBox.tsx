import IPhoneIcon from "./assets/iPhone.svg?react";
import LaptopIcon from "./assets/laptop.svg?react";
import PlusIcon from "./assets/plus.svg?react";
import MinusIcon from "./assets/minus.svg?react";

import "./ControlBox.css";
import "./Position.css";

interface ControlBoxProps {
  position?: "top" | "right" | "bottom" | "left";
}

export const ControlBox: React.FC<ControlBoxProps> = ({ position }) => {
  const controlBoxClass = `ril-control-box position__${position}`;

  return (
    <aside className={controlBoxClass}>
      <ul className="ril-control-list">
        <li className="ril-control-item">
          <IPhoneIcon className="iphone-icon" />
        </li>
        <li className="ril-control-item">
          <LaptopIcon className="laptop-icon" />
        </li>
        <li className="ril-control-item">
          <PlusIcon className="plus-icon" />
        </li>
        <li className="ril-control-item">
          <MinusIcon className="minus-icon" />
        </li>
      </ul>
    </aside>
  );
};
