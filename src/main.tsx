import ReactDOM from "react-dom/client";

import { IPhoneLayout } from "./lib";
import "./main.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <IPhoneLayout isStatusBar isDynamicSize={true}>
    <div className="description">
      <p className="message">
        📱 This is dynamic iPhone layout!
        <br />
        Add your component here.
      </p>
      <p className="info">
        <span className="label">More information:</span>
        <a href="https://github.com/BangDori/react-iphone-layout">
          react-iphone-layout
        </a>
      </p>
    </div>
  </IPhoneLayout>
);
