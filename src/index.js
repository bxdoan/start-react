import { createRoot } from "react-dom/client";
import "./components/App/index.css";

import App from "./components/App/App";

const root = createRoot(document.getElementById("root"));
root.render(App());