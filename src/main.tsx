import ReactDOM from "react-dom/client";

import { IPhoneLayout } from "./lib";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <IPhoneLayout isStatusBar isDynamicSize={true}>
    <p>This is iPhone Layout!</p>
  </IPhoneLayout>
);
