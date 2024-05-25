import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { IPhoneLayout } from "./ui";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <IPhoneLayout>
      <div className="ril-container">
        <p className="ril-message">
          📱 This is <strong>dynamic iPhone layout</strong>!
          <br />
          Add your component here.
        </p>
        <fieldset className="ril-fieldset">
          <legend className="ril-legend">More Information</legend>
          <a
            href="https://github.com/BangDori/react-iphone-layout"
            className="github-link"
            target="_blank"
          >
            Visit GitHub Repository
          </a>
        </fieldset>
      </div>
    </IPhoneLayout>
  </React.StrictMode>
);
