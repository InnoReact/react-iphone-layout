import "./ControlBox.css";

export const ControlBox = () => {
  return (
    <aside className="ril-control-box">
      <ul className="ril-control-list">
        <li className="ril-control-item">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              y="0.5"
              width="39"
              height="39"
              rx="19.5"
              stroke="#B3B9C4"
            />
            <rect
              width="16"
              height="1"
              transform="matrix(1 0 0 -1 11.5 30.75)"
              fill="#B3B9C4"
            />
            <line x1="20" y1="24.75" x2="20" y2="29.75" stroke="#B3B9C4" />
            <rect
              x="6.5"
              y="9.5"
              width="27"
              height="14.75"
              rx="3.5"
              fill="#B3B9C4"
              stroke="#B3B9C4"
            />
          </svg>
        </li>
        <li className="ril-control-item">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              y="0.5"
              width="39"
              height="39"
              rx="19.5"
              stroke="#B3B9C4"
            />
            <path
              d="M25.6923 35H15.3077C14.0349 35 13 34.1592 13 33.125V6.875C13 5.84082 14.0349 5 15.3077 5H25.6923C26.9651 5 28 5.84082 28 6.875V33.125C28 34.1592 26.9651 35 25.6923 35Z"
              fill="#B3B9C4"
            />
            <rect
              x="18.1923"
              y="5.92308"
              width="4.61538"
              height="0.461538"
              rx="0.230769"
              fill="#D9D9D9"
            />
          </svg>
        </li>
        <li className="ril-control-item">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              y="0.5"
              width="39"
              height="39"
              rx="19.5"
              stroke="#B3B9C4"
            />
            <line x1="20.5" y1="10" x2="20.5" y2="30" stroke="#B3B9C4" />
            <line x1="10" y1="19.5" x2="30" y2="19.5" stroke="#B3B9C4" />
          </svg>
        </li>
        <li className="ril-control-item">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              y="0.5"
              width="39"
              height="39"
              rx="19.5"
              stroke="#B3B9C4"
            />
            <line x1="10" y1="19.5" x2="30" y2="19.5" stroke="#B3B9C4" />
          </svg>
        </li>
      </ul>
    </aside>
  );
};
